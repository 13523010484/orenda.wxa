const config = require('./config');

App({
    api: config,
    onLaunch: function () {
        console.log('onLaunch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        haswxLogin: wx.getStorageSync('loginInfo') || false
    },
    // request
    request(url, param, callback, method) {
        let self = this
        wx.request({
            url: url,
            data: param,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: method || 'GET',
            dataType: 'json',
            success: function (ret) {
                var body = ret.data;
                if (body.code === 403) {
                    this.getWxLogin(function () {

                    })
                    //未登录逻辑
                }
                if (body.hasErrors === true) {
                    wx.showModal({
                        title: '提示',
                        content: body.message,
                        showCancel: false,
                        confirmText: '我知道了',
                        confirmColor: '#5bc4c7',
                        success(res) {
                            if (res.confirm) { }
                        }
                    })
                    return false
                }
                return typeof callback == "function" && callback(body)
            },
            fail: function (ret) {
                wx.showModal({
                    title: '提示',
                    content: '网络连接错误',
                    showCancel: false,
                    confirmText: '我知道了',
                    confirmColor: '#5bc4c7',
                    success(res) {
                        if (res.confirm) { }
                    }
                })
            }
        })
    },
    // 微信登录 
    getWxLogin: function (callback) {
        var self = this
        wx.login({
            success: function (res) {
                if (res.code) {
                    callback(res.code)
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            },
            fail: function (err) {
                console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
                callback(err)
            }
        })
    }
})
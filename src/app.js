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
        // haswxLogin: false,
        // openid: null
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
                // 假设用户未登录过小程序逻辑处理
                if (body.code === 401) {
                    this.getWxLogin()
                    //未登录逻辑
                }
                if (body.hasErrors === true) {
                    wx.hideLoading()
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
                return typeof callback == "function" && callback(ret)
            }
        })
    },
    // 微信登录 
    getWxLogin: function (callback) {
        var self = this
        wx.login({
            success: function (data) {
                // 此处请求后台提供登录接口

            },
            fail: function (err) {
                console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
                callback(err)
            }
        })
    }
})

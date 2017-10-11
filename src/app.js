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
                                // 假设!!!假设用户未登录过小程序逻辑处理
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
                                console.log(ret)
                                //接口网络请求失败，原因可能有两种：1、接口域名未被允许访问 2、接口链接错误 3、网络请求超时
                                //按照现情况直接弹框提示，弹框确认后操作上线后再考虑
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
                                // 此处请求后台提供登录接口
                                if (res.code) {
                                        // 输出res , res是个对象，其中返回了errMsg 和 code
                                        //得到 code 再和接口进行交互（发起网络请求），把code和接口需要的其他信息传给后台
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
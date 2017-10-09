const config = require('./config');
function request(url, param, callback, method) {
        wx.request({
                url: url,
                data: param,
                method: method || 'GET',
                dataType: 'json',
                header: { 'content-type': 'application/json' },
                success: function (ret) {
                        var data = ret.data.hasErrors == true ? { code: 0, msg: ret.data.message } : { code: 1, data: ret.data.data };
                        return typeof callback == "function" && callback
                },
                fail: function () {
                        var data = { code: 401, msg: '网络连接错误！' };
                        return typeof callback == "function" && callback
                }
        })
}

App({
        request: request,
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
        }
})

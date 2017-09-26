const config = require('./config');
function request(url, param, callback) {
        wx.request({
                url: url,
                data: param,
                method: 'POST',
                dataType: 'json',
                header: { 'content-type': 'application/json' },
                success: function (res) {
                },
                fail: function () {

                }
        })
}

App({
        request: request,
        api: config,
        onLaunch: function () {
                console.log('App Launch')
        },
        onShow: function () {
                console.log('App Show')
        },
        onHide: function () {
                console.log('App Hide')
        },
        globalData: {
                haswxLogin: false,
                openid: null
        }
})

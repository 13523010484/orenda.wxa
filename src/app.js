const config = require('./config')
App({
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

//获取app.js
var app = getApp()
const loginUrl = app.api.loginUrl
Page({
    /* 页面初始化数据 */
    data: {
        login_name: '',
        login_password: ''
    },

    bindKeyInput: function (e) {
        this.setData({
            login_name: e.detail.value
        })
    },
    bindPassword: function (e) {
        this.setData({
            login_password: e.detail.value
        })
    },
    /* 用户输入用户名密码登录逻辑*/
    getLogin: function () {
        var $this = this
        app.request(loginUrl, { loginName: this.data.login_name, loginPassword: this.data.login_password }, function (res) {
            if (res.code == 1) {
                // 登录成功，跳转到主页面
                wx.setStorageSync('loginInfo', res.data);
                app.globalData.hasLogin == res.data;
                wx.switchTab({
                    url: '/page/task/index'
                })
            }
        }, 'POST')
    },
    /* 页面登录*/
    go_login: function () {
        this.getLogin()
    }
})
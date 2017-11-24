//获取app.js
var app = getApp()
const loginUrl = app.api.loginUrl

Page({
    /* 页面初始化数据 */
    data: {
        login_name: '',
        login_password: '',
        code: ''
    },
    /**
     * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
        //var that = this
        //微信登录获取code
        // app.getWxLogin(function (code) {
        //     that.setData({
        //         code: code
        //     })
        // })
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
        var $this = this, paras = {
            loginName: this.data.login_name,
            loginPassword: this.data.login_password,
            //code: this.data.code
        }
        wx.showLoading({
            title: '登录中...',
        })
        app.request(loginUrl, paras, function (res) {
            if (res.code == 1) {
                // 登录成功，跳转到主页面
                wx.hideLoading()
                wx.setStorageSync('userInfo', res.data);
                app.globalData.userInfo == res.data;
                wx.switchTab({
                    url: '/page/task/index'
                })
            }
        }, 'POST')
    },
    /* 页面登录*/
    go_login: function () {
        this.getLogin()
        console.log(this)
    }
})
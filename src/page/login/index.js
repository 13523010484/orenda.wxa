//获取app.js
var app = getApp()
const loginUrl = require('../../config').loginUrl
function get_data(that) {
        var $this = that
        app.request(loginUrl, { login_name: $this.data.login_name, login_password: $this.data.login_password }, function (res) {
                if (res.code == 1) {
                        wx.setStorageSync('loginInfo', res.data);
                        app.globalData.hasLogin == res.data;
                        wx.switchTab({
                                url: './page/taskDetail/index',
                        })
                } else {
                        wx.showModal({
                                title: '提示',
                                content: res.msg,
                                showCancel: false,
                                confirmColor: '#55b2ff',
                                success: function (res) {
                                        if (res.confirm) {
                                                console.log('点击弹出框确认按钮后，再次进行操作')
                                        }
                                }
                        })
                }
        }, 'POST')
}
Page({
        /* 页面初始化数据 */
        data: {
                login_name: '',
                login_password: ''
        },

        /* 页面登录*/
        // onLaunch: function () {
        //         wx.login({
        //                 success: function (res) {
        //                         if (res.code) {
        //                                 wx.request({
        //                                         url: '',
        //                                         data: res.code
        //                                 })
        //                         } else {
        //                                 console.log('用户登录失败！' + res.errMsg)
        //                         }
        //                 }
        //         })
        // },
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
        go_login: function () {
                get_data(this);
        }
})
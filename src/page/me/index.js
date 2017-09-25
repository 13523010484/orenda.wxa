var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getUserInfo();
    },
    /**
   * 获取微信公共信息
   */
    getUserInfo() {
        var that = this
        if (app.globalData.haswxLogin === false) {
            wx.login({
                success: _getUserInfo
            })
        } else {
            _getUserInfo()
        }
        function _getUserInfo() {
            wx.getUserInfo({
                success(res) {
                    app.globalData.haswxLogin = res.userInfo
                    that.setData({
                        userInfo: res.userInfo
                    })
                },
                fail(res) {
                    that.setData({
                        userInfo: true
                    })
                }
            })
        }
    },

    /**
     * 
     **/
    jumpDetail: function () {
            wx.navigateTo({
                    url: '/page/weekDemand/index',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
            })
    },

    /**
     * 退出登录
     */
    signOut: function () {
        //仅用于模拟退出登录流程
        wx.showLoading({
            title: '退出中',
        })

        setTimeout(function () {
            wx.hideLoading()
            wx.navigateTo({
                url: '/page/login/index'
            })
        }, 500)
    }

})
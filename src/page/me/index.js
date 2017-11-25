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
        //点击初次进入页面时加载数据
        this.getUserInfo();
        this.setData({
            userInfo: app.globalData.userInfo || wx.getStorageSync('userInfo')
        })
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
                    res.userInfo.userName = that.data.userInfo.userName
                    that.setData({
                        userInfo: res.userInfo
                    })
                }
            })
        }
    },
    /**
     * 退出登录
     */
    signOut: function () {
        wx.showLoading({
            title: '退出中',
        })
        wx.clearStorageSync('userInfo')
        setTimeout(function () {
            wx.hideLoading()
            wx.redirectTo({
                url: '/page/login/index'
            })
        }, 500)
    }

})
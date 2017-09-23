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
            wx.showToast({
                title: '退出成功',
                icon: 'success',
                duration: 1000
            })
            setTimeout(function () {
                wx.navigateTo({
                    url: '/page/login/index'
                })
            }, 500)
        }, 500)
    }

})
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

    jumpDetail: function(){
            wx.navigateTo({
                    url: '',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
            })
    },

    signOut: function(){
            wx.navigateTo({
                    url: '',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
            })
    }

})
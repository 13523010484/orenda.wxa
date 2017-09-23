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

        /* 新建任务*/
    btnCreate: function(){
    },

    // 点击列表跳转到详情
    jumpDetail: function (e) {
            wx.navigateTo({
                    url: '',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
            })
    }
})
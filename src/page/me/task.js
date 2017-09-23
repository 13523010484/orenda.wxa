Page({

    /**
     * 页面的初始数据
     */
    data: {
        open1: true,
        open2: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {


    },

    // 折叠面板
    change_status: function (e) {
        this.data[e.currentTarget.id] = !this.data[e.currentTarget.id]
        this.setData(this.data)
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        // e.currentTarget.id 仅用来模拟，为了动态显示任务详情页情况
        wx.navigateTo({
            url: '/page/taskDetail/index?id=' + e.currentTarget.id,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    }
})
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab_status: 0,
        open1: true,
        open2: false,
        open3: true,
        open4: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        //模拟登录跳转
        // wx.navigateTo({
        //     url: '/page/login/index',
        //     success: function (res) { },
        //     fail: function (res) { },
        //     complete: function (res) { },
        // })

    },
    // 切换类型
    switch_tab: function (e) {
        this.setData({
            tab_status: e.target.id
        })
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
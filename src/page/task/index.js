Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab_status: 0
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
        //来不及写了
        console.log(e)

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
var app = getApp()
const weekDemandUrl = app.api.weekDemandUrl

Page({
    data: {
        open1: true,
        open2: false
    },
    /* 数据请求 */
    getData: function () {
        var $this = this
        app.request(weekDemandUrl, {}, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                $this.setData({
                    arr: res.data
                })
            }
        })
    },

    /* 监听页面加载 */
    onLoad: function () {
        this.getData()
    },
    // 折叠面板
    change_status: function (e) {
        this.data[e.currentTarget.id] = !this.data[e.currentTarget.id]
        this.setData(this.data)
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        console.log(e.currentTarget.dataset.requirementId);
        wx.navigateTo({
            url: '/page/weekDemandDetail/index?requirementid=' + e.currentTarget.dataset.requirementId,
        })
    }
})
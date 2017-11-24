var app = getApp()
const weekDemandUrl = app.api.weekDemandUrl

Page({
    data: {
        size: 50,
        showloading: false,
        arr: false
    },
    onLoad: function () {
        this.getData()
    },
    onShow: function () {
    },
    /* 数据请求 */
    getData: function () {
        var $this = this;
        app.request(weekDemandUrl, { size: $this.data.size }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                $this.setData({
                    arr: res.data,
                    showloading: true
                })
            }
        })
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: '/page/weekDemandDetail/index?requirementid=' + e.currentTarget.dataset.requirementId,
        })
    },
    onUnload: function () {
        if (this.data.arr.length > 0) {
            wx.setStorageSync('weekDemandData', this.data)
        }
    }
})
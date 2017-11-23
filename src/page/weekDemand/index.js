var app = getApp()
const weekDemandUrl = app.api.weekDemandUrl

Page({
    data: {
        page: 1,
        size: 6,
        reqAble: true,
        loadMore: false,
        hasLoading: false,
        showloading: false,
        arr: []
    },
    /* 数据请求 */
    getData: function () {
        var $this = this;
        app.request(weekDemandUrl, { page: $this.data.page, size: $this.data.size }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                if (!(JSON.stringify(res.data) == '{}')) {
                    $this.data.reqAble = false;
                    let page = $this.data.page + 1
                    $this.setData({
                        page: page,
                        reqAble: $this.data.reqAble,
                        showloading: true
                    })
                }
                for (var i in res.data) {
                    console.log(i);
                    $this.data.arr.push({
                        date: i,
                        content: res.data[i]
                    });
                }
                $this.setData({
                    arr: $this.data.arr,
                    loadMore: false,
                    hasLoading: true,
                    showloading: true
                })
            }
        })
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        console.log(e.currentTarget.dataset.requirementId);
        wx.navigateTo({
            url: '/page/weekDemandDetail/index?requirementid=' + e.currentTarget.dataset.requirementId,
        })
    },
    onShow: function () {
        let storageData = wx.getStorageSync('weekDemandData')
        if (storageData) {
            this.setData({
                page: storageData.page,
                size: storageData.size,
                arr: storageData.arr,
                hasLoading: storageData.hasLoading,
                loadMore: storageData.loadMore,
                showloading: true
            })
            return false
        }
        this.getData()
    },
    // 上拉加载
    onReachBottom: function () {
        let page = this.data.page
        this.setData({
            page: page,
            loadMore: this.data.arr.length > 0 ? true : false
        })
        if (this.data.reqAble == false) this.getData()
    },
    onUnload: function () {
        if (this.data.arr.length > 0) {
            wx.setStorageSync('weekDemandData', this.data)
        }
    }
})
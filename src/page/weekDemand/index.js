var app = getApp()
const weekDemandUrl = app.api.weekDemandUrl
const util = require('../../util/util.js')

Page({
    data: {
        page: 1,
        size: 6,
        loadMore: false,
        hasLoading: false,
        arr: []
    },
    /* 数据请求 */
    getData: function () {
        var $this = this;
        app.request(weekDemandUrl, { page: $this.data.page, size: $this.data.size }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
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
                    hasLoading: true
                })
            }
            setTimeout(function () {
                wx.hideLoading()
            }, 500)
        })
    },

    /* 监听页面加载 */
    onLoad: function () {
        //获取本地日期
        var time = util.formatTime(new Date())
        this.setData({
            time: time
        })
        // 显示加载提示
        wx.showLoading({
            title: '加载中...',
        })
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
    },
    onShow: function () {
        let storangeData = wx.getStorageSync('weekDemandData')
        if (storangeData) {
            this.setData({
                page: storangeData.page,
                size: storangeData.size,
                arr: storangeData.arr,
                hasLoading: storangeData.hasLoading,
                loadMore: storangeData.loadMore
            })
            wx.hideLoading()
            return false
        }
        if (this.data.arr.length == 0) this.getData()
    },
    // 下拉刷新
    onPullDownRefresh: function () {
        this.getData()
        console.log(this.data.page);
        wx.stopPullDownRefresh()
    },
    // 上拉加载
    onReachBottom: function () {
        let page = this.data.page + 1
        this.setData({
            page: page,
            loadMore: this.data.arr.length > 0 ? true : false
        })
        this.getData()
    },
    onUnload: function () {
        if (this.data.arr.length > 0) {
            wx.setStorageSync('weekDemandData', this.data)
        }
    }
})
var app = getApp()
const manageUrl = app.api.manageUrl
const taskListsUrl = app.api.taskListsUrl

Page({
    data: {
        tab_status: 0,
        showloading: false,
        lodermode: true,
        size: 10,
        page: 1,
        canLoadMore: true
    },
    //"动态" 接口请求
    getData_loginstatus: function () {
        var $this = this
        app.request(manageUrl, { size: 30 }, function (res) {
            if (res.code == 1) {
                $this.setData({
                    arr: res.data,
                    showloading: true
                })
            }
        })
    },
    //"进行中" 接口请求
    getData_processing: function () {
        var self = this
        app.request(taskListsUrl, { size: this.data.size, page: this.data.page }, function (res) {
            if (res.code == 1) {
                if (self.data.arrP && self.data.arrP.length > 0) {
                    var reqDataAble = res.data
                    if(reqDataAble.length == 0){
                        self.data.canLoadMore = false
                    }
                    res.data = self.data.arrP.concat(res.data);
                }
                self.setData({
                    arrP: res.data,
                    lodermode: true
                })
            }
        })
    },
    //监听页面加载
    onLoad: function () {
        this.getData_processing()
        this.getData_loginstatus()
    },

    // 切换类型
    switch_tab: function (e) {
        this.setData({
            tab_status: e.target.id
        })
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.dataset.taskId,
        })
    },
    /**
    * 页面上拉触底事件的处理函数
    */
    onReachBottom(e) {
        let body = this.data.arrP
        if (body && this.data.tab_status == 0 && Number.isInteger(body.length / this.data.size) && this.data.canLoadMore == true) {
            this.setData({
                page: this.data.page + 1,
                lodermode: false
            })
            this.getData_processing();
        }
    }
})
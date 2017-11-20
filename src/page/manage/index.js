var app = getApp()
const manageUrl = app.api.manageUrl
const taskListsUrl = app.api.taskListsUrl

Page({
    data: {
        tab_status: 0
    },
    //"动态" 接口请求
    getData_loginstatus: function () {
        var $this = this
        app.request(manageUrl, {}, function (res) {
            /* 请求成功时 */
            if (res.code == 1) {
                var data = res.data, arr = []
                data.forEach(function (item) {
                    arr.push(item)
                })
                $this.setData({
                    data: data,
                    arr: arr
                })
            }
        })
    },
    //"进行中" 接口请求
    getData_processing: function () {
        var $this = this
        app.request(taskListsUrl, {}, function (res) {
            if (res.code == 1) {
                var dataP = res.data, arrP = [];
                dataP.forEach(function (item) {
                    arrP.push(item)
                })
                $this.setData({
                    dataP: dataP,
                    arrP: arrP
                })
            }
        })
    },
    //监听页面加载
    onLoad: function () {
        this.getData_loginstatus()
        this.getData_processing()
    },

    // 切换类型
    switch_tab: function (e) {
        this.setData({
            tab_status: e.target.id
        })
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        console.log(e.currentTarget.dataset.taskId)
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.dataset.taskId,
        })
    },
    /* 监听页面显示 */
    onShow: function () {
    },
    /* 监听页面隐藏 */
    onHide: function () {

    },
    /* 监听页面卸载 */
    onUnload: function () {

    },
    /* 监听页面下拉动作 */
    onPullDownRefresh: function () {

    },
    /* 上拉触底事件 */
    onReachBottom: function () {

    },
    /* 用户点击右上角分享 */
    onShareAppMessage: function () {

    }
})
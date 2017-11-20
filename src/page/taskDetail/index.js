var app = getApp()
const taskListsDetailUrl = app.api.taskListsDetailUrl
const taskListEditHistoryUrl = app.api.taskListEditHistoryUrl

Page({
    data: {
        // 仅用来模拟流程，非真实要用 1:未完成，2:已完成 3:待审核
        // status: 1,
        // percent1: 60,
        // percent2: 10,
        // percent3: 20,
        showReport: true
    },
    //请求数据
    getData: function (taskId) {
        var $this = this
        app.request(taskListsDetailUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                //更新数据
                $this.setData({
                    data: data
                })
            }
        })
    },
    //请求编辑历史接口
    getEditData: function (taskId) {
        var $this = this
        app.request(taskListEditHistoryUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var dataEdit = res.data, arr = []
                dataEdit.forEach(function (item) {
                    arr.push(item)
                })
                $this.setData({
                    dataEdit: dataEdit,
                    arr: arr
                })
            }
        })
    },
    /* 页面加载 */
    onLoad: function (options) {
        //判断页面来源
        var parentsPagesUrl = getCurrentPages()[0].route
        if (parentsPagesUrl == 'page/task/index') {
            this.setData({
                showReport: false
            })
        }
        //请求数据函数
        this.getData(options.taskid)
        this.getEditData(options.taskid)
        // if (options.id == 2) {
        //     this.setData({
        //         percent1: 80,
        //         percent2: 100,
        //         percent3: 100
        //     })
        // }
        // this.setData({
        //     status: options.id
        // })
    },
    /* 监听页面显示 */
    onShow: function () {
    },
    /* 点击完成 */
    handle_complate: function () {
        this.setData({
            status: 2,
            percent1: 70,
            percent2: 100,
            percent3: 100
        })
    },
    /* 点击通过审核 */
    handle_check: function () {
        this.setData({
            status: 2,
            percent2: 100
        })
    },
    /* 监听页面隐藏 */
    onHide: function () {

    },
    /* 监听页面卸载 */
    onUnload: function () {

    },
    /* 监听用户下拉动作 */
    onPullDownRefresh: function () {
        console.log('下拉刷新')
    },
    /* 监听页面上拉触底事件 */
    onReachBottom: function () {
    },
    /* 用户点击右上角分享 */
    onShareAppMessage: function () {
    }
})
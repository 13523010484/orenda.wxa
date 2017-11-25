var app = getApp()
const taskListsDetailUrl = app.api.taskListsDetailUrl
const taskListEditHistoryUrl = app.api.taskListEditHistoryUrl

Page({
    data: {
        showReport: false
    },
    /* 页面加载 */
    onLoad: function (options) {
        //请求数据函数
        this.getData(options.taskid)
        this.getEditData(options.taskid)
    },
    //获取任务详情
    getData: function (taskId) {
        var $this = this
        var userinfo = app.globalData.userInfo || wx.getStorageSync('userInfo')
        app.request(taskListsDetailUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                var assign_person = data.executor //获取任务执行人id
                //更新数据
                $this.setData({
                    data: data,
                    showReport: userinfo.userId == assign_person && data.work_report_progress < 100
                })

            }
        })
    },
    //请求编辑历史接口
    getEditData: function (taskId) {
        var $this = this
        app.request(taskListEditHistoryUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                $this.setData({
                    arr: res.data,
                    showloading: true
                })
            }
        })
    }
})
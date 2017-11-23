var app = getApp()
const taskListsDetailUrl = app.api.taskListsDetailUrl
const taskListEditHistoryUrl = app.api.taskListEditHistoryUrl

Page({
    data: {
        showReport: true,
        workReportProgress: ''
    },
    //请求数据
    getData: function (taskId) {
        var $this = this
        app.request(taskListsDetailUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var data = res.data, workReportProgress = ''
                //更新数据
                $this.setData({
                    data: data,
                    workReportProgress: data.work_report_progress
                })
                //workReportProgress = data.work_report_progress
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
                    arr: arr,
                    showloading: true
                })
            }
        })
    },
    /* 页面加载 */
    onLoad: function (options) {
        //判断页面来源
        // var parentsPagesUrl = getCurrentPages()[0].route
        // if (parentsPagesUrl == 'page/task/index') {
        //     this.setData({
        //         showReport: false
        //     })
        // }
        //请求数据函数
        this.getData(options.taskid)
        this.getEditData(options.taskid)
        console.log(this)
    },
    /* 监听页面显示 */
    onShow: function () {
    },
    
    /* 点击通过审核 */
    handle_check: function () {
        this.setData({
            status: 2,
            percent2: 100
        })
    }
})
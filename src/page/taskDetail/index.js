var app = getApp()
const taskListsDetailUrl = app.api.taskListsDetailUrl
const taskListEditHistoryUrl = app.api.taskListEditHistoryUrl

Page({
    data: {
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
                    arr: arr,
                    showloading: true
                })
            }
        })
    },
    /* 页面加载 */
    onLoad: function (options) {
        var userName = wx.getStorageSync('userInfo').userName
        this.setData({
            userName: userName
        })
        //请求数据函数
        this.getData(options.taskid)
        this.getEditData(options.taskid)
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
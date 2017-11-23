var app = getApp()
var taskId = '', new_progress = ''
const myTaskReportUrl = app.api.myTaskReportUrl
const myTaskReportSaveUrl = app.api.myTaskReportSaveUrl

Page({
    data: {
        new_progress: '',
        work_hours: '',
        note: '',
        is_submit: false //1:是 2:否
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        taskId = options.taskId
        this.setData({
            taskId: taskId
        })
        this.getReportData(taskId)
    },
    //数据请求
    getReportData: function (taskId) {
        var $this = this
        app.request(myTaskReportUrl, { task_id: taskId }, function (res) {
            var data = res.data
            if (res.code == 1) {
                $this.setData({
                    new_progress: data.work_progress,
                    data: data,
                    showloading: true
                })
            }
        })
    },
    // 获取更新工作进度的值
    sliderchange: function (e) {
        console.log(e.detail.value)
        if (e.detail.value < this.data.data.work_progress) {
            wx.showModal({
                title: '提示',
                content: '不能小于当前工作进度',
                showCancel: false
            })
            this.setData({
                new_progress: this.data.data.work_progress,
                is_submit: false
            })
        } else {
            this.setData({
                new_progress: e.detail.value,
                is_submit: e.detail.value == 100 ? 1 : false
            })
        }
    },
    //工作进度100%时，选择审核通过是否自动提交
    checkboxChange: function (e) {
        this.setData({
            is_submit: this.data.is_submit == 1 ? 2 : 1
        })
    },
    // 获取input输入框的值
    bindinput: function (e) {
        this.setData({
            work_hours: e.detail.value
        })
    },
    // 获取textarea输入框的值
    bindTextarea: function (e) {
        this.setData({
            note: e.detail.value
        })
    },
    //保存数据
    saveData: function (taskId) {
        wx.showLoading({
            title: '提交中',
        })
        var paras = {
            task_id: this.data.taskId,
            work_hours: this.data.work_hours,
            note: this.data.note,
            new_progress: this.data.new_progress,
            is_submit: this.data.is_submit
        }
        app.request(myTaskReportSaveUrl, paras, function (res) {
            if (res.hasErrors == false) {
                wx.hideLoading()
                wx.showModal({
                    title: '提示',
                    content: '汇报成功',
                    showCancel: false,
                    success: function (res) {
                        wx.navigateBack({
                            delta: 1,
                        })
                    }
                })
            }
        }, 'POST')
    },
    // 保存
    save: function () {
        this.saveData()
    },
    // 取消
    cancle: function () {
        wx.navigateBack({
            delta: 1,
        })
    }
})
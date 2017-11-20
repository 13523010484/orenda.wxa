var app = getApp()
var taskId = '', new_progress = ''
const myTaskReportUrl = app.api.myTaskReportUrl
const myTaskReportSaveUrl = app.api.myTaskReportSaveUrl

Page({
    data: {
        new_progress: '',
        work_hours: '',
        note: '',
        is_submit: ''
    },
    //数据请求
    getReportData: function (taskId) {
        var $this = this
        app.request(myTaskReportUrl, { task_id: taskId }, function (res) {
            var data = res.data
            if (res.code == 1) {
                $this.setData({
                    data: data
                })
            }
        })
    },
    // 获取更新工作进度的值
    sliderchange: function (e) {
        new_progress = e.detail.value
        this.setData({
            new_progress: e.detail.value
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
        var $this = this, paras = {
            task_id: $this.data.taskId,
            work_hours: $this.data.work_hours,
            note: $this.data.note,
            new_progress: $this.data.new_progress,
            is_submit: $this.data.is_submit
        }
        app.request(myTaskReportSaveUrl, paras, function (res) {
            if (res.code == 1) {
                console.log('保存成功！')
            }
        }, 'POST')
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        taskId = options.taskId
        this.setData({
            taskId: taskId
        })
        this.getReportData(taskId)
    },
    // 保存
    save: function () {
        var self = this;
        if (new_progress == 0) {
            var is_submit = 0
            this.setData({
                is_submit: is_submit
            })
            this.saveData()
        } else if (new_progress < 100 && new_progress > 0) {
            var is_submit = 0
            this.setData({
                is_submit: is_submit
            })
            this.saveData()
            upload_tips()
        } else {
            wx.showModal({
                title: '提示',
                content: '审核通过，是否自动提交',
                success: function (res) {
                    if (res.confirm) {
                        console.log('点击了确认按钮')
                        var is_submit = 1
                        getCurrentPages()[getCurrentPages().length - 1].setData({
                            is_submit: is_submit
                        })
                        getCurrentPages()[getCurrentPages().length - 1].saveData()
                        upload_tips()
                    } else if (res.cancel) {
                        console.log('点击了取消按钮')
                    }
                }
            })
        }
        function upload_tips() {
            wx.showLoading({
                title: '上传中',
            })
            setTimeout(function () {
                wx.hideLoading()
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 1000
                })
                setTimeout(function () {
                    self.cancle()
                }, 500)
            }, 500)
        }
    },
    // 取消
    cancle: function () {
        wx.navigateBack({
            delta: 1,
        })
    },
    /* 声明周期，监听页面显示 */
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
    /* 页面上拉触底事件处理函数 */
    onReachBottom: function () {

    },
    /* 用户点击右上角分享 */
    onShareAppMessage: function () {

    }
})
var app = getApp();
const myTaskAuditDetailUrl = app.api.myTaskAuditDetailUrl
const myTaskAuditPassUrl = app.api.myTaskAuditPassUrl

Page({
    data: {
        showloading: false
    },
    // 可审任务详情 数据请求
    auditDetailData: function (taskWorkProgressId) {
        var $this = this
        app.request(myTaskAuditDetailUrl, { task_work_progress_id: taskWorkProgressId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                //更新数据
                $this.setData({
                    data: data,
                    audit_status: data.audit_status,
                    showloading: true
                })
            }
        })
    },
    // 可审任务点击通过 数据请求
    auditPassData: function (taskWorkProgressId) {
        var $this = this
        app.request(myTaskAuditPassUrl, { task_work_progress_id: taskWorkProgressId }, function (res) {
            console.log(res);
            if (!res.hasErrors) {
                $this.data.data.audit_status=2;
                $this.data.data.audit_status_name = '通过';
                $this.setData({
                    data: $this.data.data
                })
            }
        }, 'POST')
    },
    /* 页面加载 */
    onLoad: function (options) {
        this.auditDetailData(options.taskworkprogressid)
    },
    /* 点击完成 */
    handleCheck: function (options) {
        this.auditPassData(this.options.taskworkprogressid)
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
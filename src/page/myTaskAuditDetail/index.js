var app = getApp();
const myTaskAuditDetailUrl = app.api.myTaskAuditDetailUrl
const myTaskAuditPassUrl = app.api.myTaskAuditPassUrl

Page({
    data: {
        showloading: false
    },
    /* 页面加载 */
    onLoad: function (options) {
        this.auditDetailData(options.report_id)

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
                    // audit_status: data.audit_status, //不要做没意义的赋值，删掉！
                    showloading: true
                })
            }
        })
    },
    // 可审任务点击通过 数据请求
    handleCheck: function () {
        var $this = this
        app.request(myTaskAuditPassUrl, { task_work_progress_id: this.data.data.task_work_progress_id }, function (res) {
            if (!res.hasErrors) {
                $this.data.data.audit_status = 2;
                $this.data.data.audit_status_name = '已通过';
                $this.setData({
                    data: $this.data.data
                })
                // 通过后刷新上一页数据
                let pages = getCurrentPages()
                let prePage = pages[pages.length - 2];
                prePage.get_task_list()
            }
        }, 'POST')
    }
})
// page/task/report.js
var app = getApp();
const myTaskListUrl = app.api.myTaskListUrl
const myTaskCanAuditUrl = app.api.myTaskCanAuditUrl
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.get_task_list()

    },
    //获取我的任务列表，包括我负责的、我发起的任务
    get_task_list: function () {
        var $this = this
        this.setData({
            task_list: []
        })
        app.request(myTaskListUrl, { about: 2, size: 20 }, function (res) {
            if (res.code == 1) {
                // 基础判空
                if (res.data.A && res.data.A.length > 0) {
                    // 遍历任务，找出有待审汇报的任务id,并请求这条任务下的汇报列表
                    res.data.A.forEach(function (item, index) {
                        if (item.report_num > 0) {
                            $this.get_report_list(item)
                        }
                    })
                } else {
                    $this.setData({
                        showloading: true
                    })
                }
            }
        })
    },
    // 获取任务下汇报列表
    get_report_list: function (item) {
        var $this = this
        app.request(myTaskCanAuditUrl, { task_id: item.task_id }, function (res) {
            if (res.code == 1) {
                var task_list = $this.data.task_list || []
                item.child = res.data;
                task_list = task_list.concat([item])
                $this.setData({
                    task_list: task_list,
                    showloading: true
                })
            }
        })
    },
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    }
})
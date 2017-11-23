var app = getApp()
const taskListsUrl = app.api.taskListsUrl

Page({
    data: {
        showloading: false
    },
    /* 数据请求函数*/
    getData: function (projectId) {
        var $this = this
        app.request(taskListsUrl, { project_id: projectId }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data, arr = []
                data.forEach(function (item) {
                    arr.push(item)
                })
                //更新数据
                $this.setData({
                    arr: arr,
                    showloading: true
                })
            }
        })
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        this.getData(options.projectid);
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        console.log(e.currentTarget.dataset.taskId)
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.dataset.taskId
        })
    },
    // 仅用于演示
    alert() {
        wx.showToast({
            title: '敬请期待',
            icon: 'loading',
            duration: 1000
        })
    }
})
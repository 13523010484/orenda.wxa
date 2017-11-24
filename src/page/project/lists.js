var app = getApp()
const taskListsUrl = app.api.taskListsUrl

Page({
    data: {
        showloading: false
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        // 动态改变任务列表的title
        wx.setNavigationBarTitle({
            title: options.projectname,
        })
        this.getData(options.projectid);
    },
    /* 数据请求函数*/
    getData: function (projectId) {
        var $this = this
        // 每页请求20条
        app.request(taskListsUrl, { project_id: projectId, size: 20 }, function (res) {
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
    // 点击列表跳转到详情
    jumpDetail: function (e) {
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
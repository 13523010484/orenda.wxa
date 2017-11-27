var app = getApp()
const taskListsUrl = app.api.taskListsUrl

Page({
    data: {
        showloading: false,
        lodermode: true,
        canLoadMore: true,
        size: 10,
        page: 1
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
        app.request(taskListsUrl, { project_id: projectId, size: $this.data.size, page: $this.data.page }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data, arr = []
                data.forEach(function (item) {
                    arr.push(item)
                })
                if ($this.data.arr && $this.data.arr.length > 0) {
                    var reqDataAble = res.data
                    if (reqDataAble.length == 0) {
                        $this.data.canLoadMore = false
                    }
                    res.data = $this.data.arr.concat(reqDataAble);
                }
                //更新数据
                $this.setData({
                    arr: res.data,
                    showloading: true,
                    lodermode: true
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
    /**
   * 页面上拉触底事件的处理函数
   */
    onReachBottom(e) {
        let body = this.data.arr
        if (body && Number.isInteger(body.length / this.data.size) && this.data.canLoadMore == true) {
            this.setData({
                lodermode: false,
                page: this.data.page + 1
            })
            this.getData(this.options.projectid);
        }
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
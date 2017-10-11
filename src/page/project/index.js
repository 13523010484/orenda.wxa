var app = getApp()
const projectUrl = app.api.projectUrl
Page({
        data: {
        },
        getData: function () {
                var $this = this
                app.request(projectUrl, {}, function (res) {
                        //接口请求成功时
                        if (res.code == 1) {
                                var tree = res.data, root = []
                                tree[0].children.forEach(function (item) {
                                        root.push(item)
                                })
                                this.setData({
                                        data: tree,
                                        root: root
                                })
                        }
                })
        },
        onLoad: function (options) {
                this.getData()
        },

        // 点击列表跳转到详情
        jumpDetail: function (e) {
                wx.navigateTo({
                        url: 'lists?pid=' + e.target.id
                })
        }
})
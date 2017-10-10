var app = getApp()
const projectUrl = app.api.projectUrl
Page({
        data: {
                data: []
        },
        getData: function () {
                var $this = this
                app.request(projectUrl, {}, function (res) {
                        //接口请求成功时
                        if (res.code == 1) {
                                console.log('ok!')
                                data: projectUrl.data
                        }
                })
        },
        onLoad: function (options) {
                this.getData()
                var tree = app.api.projectUrl.data, root = []
                tree[0].children.forEach(function (item) {
                        root.push(item)
                })
                this.setData({
                        data: tree,
                        root: root
                })
        },

        // 点击列表跳转到详情
        jumpDetail: function (e) {
                wx.navigateTo({
                        url: 'lists?pid=' + e.target.id
                })
        }
})
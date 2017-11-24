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
                $this.setData({
                    data: tree,
                    root: root,
                    showloading: true
                })
            }
        })
    },
    onShow:function(){
        var project = wx.getStorageSync('project')
        if (project){
            this.setData({
                root: project,
                showloading: true
            }) 
        }else{
            this.getData()  
        }
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: 'lists?projectid=' + e.currentTarget.dataset.projectId + '&projectname=' + e.currentTarget.dataset.projectName
        })
    },
    onHide: function () {
        if (this.data.root.length > 0) {
            wx.setStorageSync('project', this.data.root)
        }
    }
})
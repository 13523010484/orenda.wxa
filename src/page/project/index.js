var app = getApp()
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
        // 我完全模拟了真是数据，存储在本地文件
        var tree = app.api.demoTree, root = []
        tree[0].children.forEach(function (item) {
            root.push(item)
        })
        this.setData({
            demoTree: tree,
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
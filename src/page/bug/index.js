//获取app.js
var app = getApp()
const bugUrl = app.api.bugUrl

Page({
    data: {
        arr: [],
        showloading: false
    },
    /* 数据请求函数*/
    getData: function () {
        var $this = this
        app.request(bugUrl, {}, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                // 删掉！！！
                // var data = res.data, arr = []
                // data.forEach(function (item) {
                //     arr.push(item)
                // })
                $this.setData({
                    arr: res.data,
                    showloading: true
                })
            }
        })
    },
    /* 跳转至bug详情页面 */
    jumpDetail: function (e) {
        var urlWithBugId = '/page/bugDetail/index?bugid=' + e.currentTarget.dataset.bugId;
        wx.navigateTo({
            url: urlWithBugId,
        })
    },

    /* 生命周期函数--监听页面显示 */
    onLoad: function () {
        this.getData()
    },
})
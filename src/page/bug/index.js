//获取app.js
var app = getApp()
const bugUrl = app.api.bugUrl
Page({
    data: {
    },

    /* 数据请求函数*/
    getData: function () {
        var $this = this
        app.request(bugUrl, {}, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data, arr = []
                data.forEach(function (item) {
                    arr.push(item)
                })
                $this.setData({
                    data: data,
                    arr: arr
                })
            }
        })
    },

    /* 页面加载 */
    onLoad: function (options) {
        this.getData()
    },

    /* 跳转至bug详情页面 */
    jumpDetail: function (e) {
        console.log(e.currentTarget.dataset.bugId);
        var urlWithBugId = '/page/bugDetail/index?bugid=' + e.currentTarget.dataset.bugId;
        console.log(urlWithBugId);
        wx.navigateTo({
            url: urlWithBugId,
        })
    },

    /* 页面初次渲染完成 */
    onReady: function () {

    },

    /* 生命周期函数--监听页面显示 */
    onShow: function () {

    },

    /* 生命周期函数--监听页面隐藏 */
    onHide: function () {

    },

    /* 生命周期函数--监听页面卸载 */
    onUnload: function () {

    },

    /* 监听用户下拉动作 */
    onPullDownRefresh: function () {
        console.log('pullDownRefresh')
    },

    /* 页面上拉触底事件的处理函数 */
    onReachBottom: function () {

    },

    /* 用户点击右上角分享 */
    onShareAppMessage: function () {

    }
})
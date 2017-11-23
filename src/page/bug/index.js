//获取app.js
var app = getApp()
const bugUrl = app.api.bugUrl

Page({
    data: {
        arr: [],
        showloading: true
    },

    /* 数据请求函数*/
    get_bug_list: function () {
        var $this = this
        console.log(this)
        app.request(bugUrl, {}, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data, arr = []
                data.forEach(function (item) {
                    arr.push(item)
                })
                $this.setData({
                    arr: arr,
                    showloading: true
                })
            }
        })
    },

    /* 页面加载 */
    onLoad: function () {
    },

    /* 跳转至bug详情页面 */
    jumpDetail: function (e) {
        var urlWithBugId = '/page/bugDetail/index?bugid=' + e.currentTarget.dataset.bugId;
        wx.navigateTo({
            url: urlWithBugId,
        })
    },

    /* 生命周期函数--监听页面显示 */
    onShow: function () {
        let storageData = wx.getStorageSync('bugListData')
        if (storageData) {
            this.setData({
                arr: storageData.arr
            })
            return false
        }
        if(this.data.arr.length == 0) this.get_bug_list()
    },
    /* 监听用户下拉动作 */
    onPullDownRefresh: function () {
        this.get_bug_list();
        wx.stopPullDownRefresh()
    },
    /* 生命周期函数--监听页面卸载 */
    onUnload: function () {
        if (this.data.arr.length > 0) {
            wx.setStorageSync('bugListData', this.data)
        }
    },
})
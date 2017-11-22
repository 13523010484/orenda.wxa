//获取app.js
var app = getApp()
const bugDetailUrl = app.api.bugDetailUrl

Page({
    data: {
    },
    //请求数据
    getData: function (bugId) {
        var $this = this;
        app.request(bugDetailUrl, { bug_id: bugId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                data.dsc_rich_text_name = data.dsc_rich_text_name.replace(/<img src=/g, '<img width="100%" src=');
                $this.setData({
                    data: data
                })
            }
        })
    },

    /* 监听页面加载 */
    onLoad: function (options) {
        this.getData(options.bugid);
        // 页面加载时，如果bugDetailData有数据，获取存储在它中的数据
        let storangeData = wx.getStorageInfoSync('bugDetailData')
        console.log('storangeData')
        console.log(storangeData)
        if(storangeData) {
            this.setData({
                data: data
            })
        }
    },
    // 下拉刷新
    onPullDownRefresh: function(){
        this.getData(this.options.bugid)
        wx.stopPullDownRefresh()
    },
    // 页面上拉触底事件
    onReachBottom: function() {

    },
    /* 监听页面显示 */
    onShow: function () {
        console.log('onShow')
        console.log('进入这个页面时触发')
    },
    // 页面离开时，同步缓存数据，存储在bugDetailData中
    onUnload: function(){
        wx.setStorageSync('bugDetailData', this.data)
    }
})
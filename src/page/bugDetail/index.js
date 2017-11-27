//获取app.js
var app = getApp()
const bugDetailUrl = app.api.bugDetailUrl

Page({
    data: {
        showloading: false
    },
    //请求数据
    getData: function (bugId) {
        var $this = this;
        app.request(bugDetailUrl, { bug_id: bugId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                data.dsc_rich_text_name = data.dsc_rich_text_name.replace(/<img src=/g, '<img width="100%" src=');
                $this.setData({
                    data: data,
                    showloading: true
                })
            }
        })
    },
    /* 监听页面显示 */
    onLoad: function (options) {
        this.getData(this.options.bugid)
    }
})
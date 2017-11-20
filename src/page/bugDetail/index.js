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
                console.log(data.dsc_rich_text_name);
                $this.setData({
                    data: data
                })
            }
        })
    },

    /* 监听页面加载 */
    onLoad: function (options) {
        console.log('bugdetail onload');
        console.log(options);
        this.getData(options.bugid);
    },
    /* 页面初次渲染完成 */
    onReady: function () {
    },

    /* 监听页面显示 */
    onShow: function () {
    }
})
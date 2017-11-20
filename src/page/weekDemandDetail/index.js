var app = getApp()
const weekDemandDetailUrl = app.api.weekDemandDetailUrl

Page({
    data: {
    },
    //数据请求
    getData: function (requirementId) {
        var $this = this
        app.request(weekDemandDetailUrl, { requirement_id: requirementId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                data.dsc_rich_text_name = data.dsc_rich_text_name.replace(/<img src=/g, '<img width="100%" src=');
                data.init_rich_text_name = data.init_rich_text_name.replace(/<img src=/g, '<img width="100%" src=');
                $this.setData({
                    data: data
                })
            }
        })
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        console.log(options.requirementid)
        this.getData(options.requirementid)
    },
    /* 页面初次渲染成功 */
    onReady: function () {

    },
    /* 监听用户下拉动作 */
    onPullDownRefresh: function () {

    },
    /* 页面上拉触底事件的处理函数 */
    onReachBottom: function () {

    },
    /* 用户点击右上角分享 */
    onShareAppMessage: function () {

    }
})
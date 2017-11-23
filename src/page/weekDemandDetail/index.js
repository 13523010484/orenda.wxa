var app = getApp()
const weekDemandDetailUrl = app.api.weekDemandDetailUrl

Page({
    data: {
        showloading: false
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
                    data: data,
                    showloading:true
                })
            }
        })
    },
    /* onShow 页面进入 */
    onShow: function() {
        this.getData(this.options.requirementid)
    },
    /* onUnload 页面卸载 */
    onUnload: function() {
    }
})
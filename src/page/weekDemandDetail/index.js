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

                data.dsc_rich_text_name = $this.init_content(data.dsc_rich_text_name)
                data.init_rich_text_name = $this.init_content(data.init_rich_text_name)

                $this.setData({
                    data: data,
                    showloading: true
                })
            }
        })
    },
    /* onShow 页面进入 */
    onLoad: function (options) {
        this.getData(options.requirementid)
    },
    /* 正则去除img属性 */
    init_content: function (str) {

        return str ? str.replace(/<img([^>]+?)src=['"](https|http):\/\/(.+?)(\/.+?)['"]([^>]*?)>/g, function (match, tag1, protocol, host, url, tag2) {
            return '<img' + tag1 + 'src="' + protocol + '://' + host + url + '"' + ' width="100%" style="display:inline-block"' + '>'
        }) : str

    }
})
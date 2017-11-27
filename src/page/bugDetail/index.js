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
                data.dsc_rich_text_name = $this.init_content(data.dsc_rich_text_name)
                data.init_rich_text_name = $this.init_content(data.init_rich_text_name)
                $this.setData({
                    data: data,
                    showloading: true
                })
            }
        })
    },
    /* 监听页面显示 */
    onLoad: function (options) {
        this.getData(options.bugid)
    },
    /* 正则去除img属性 */
    init_content: function (str) {

        return str ? str.replace(/<img([^>]+?)src=['"](https|http):\/\/(.+?)(\/.+?)['"]([^>]*?)>/g, function (match, tag1, protocol, host, url, tag2) {
            var newImg = '<img' + tag1 + 'src="' + protocol + '://' + host + url + '"' + ' width="100%"' + '>'
            //
            if (url == '/ueditor/dialogs/attachment/fileTypeImages/icon_txt.gif') {
                newImg = '<img' + tag1 + 'src="' + protocol + '://' + host + url + '"' + ' style="display:inline-block"' + '>'
            }
            return newImg
        }) : str

    }
})
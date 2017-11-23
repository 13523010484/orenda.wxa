var app = getApp();
const myTaskListUrl = app.api.myTaskListUrl

Page({
    data: {
        open1: true,
        open2: false,
        showloading: false
    },
    /* 数据请求 */
    getData: function () {
        var $this = this
        app.request(myTaskListUrl, { about: 1 }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data
                $this.setData({
                    data: data,
                    showloading: true
                })
            }
        })
    },
    /* 监听页面加载 */
    onLoad: function () {
        this.getUserInfo()
    },
    /* 获取微信公共信息 */
    getUserInfo() {
        var that = this
        if (app.globalData.haswxLogin === false) {
            wx.login({
                success: _getUserInfo
            })
        } else {
            _getUserInfo()
        }
        function _getUserInfo() {
            wx.getUserInfo({
                success(res) {
                    app.globalData.haswxLogin = res.userInfo
                    that.setData({
                        userInfo: res.userInfo
                    })
                },
                //用户拒绝微信授权的情况，显示一个默认头像
                fail(res) {
                    that.setData({
                        userInfo: {
                            avatarUrl: '/image/task_user.png'
                        }
                    })
                }
            })
        }
    },
    // 折叠面板
    change_status: function (e) {
        this.data[e.currentTarget.id] = !this.data[e.currentTarget.id]
        this.setData(this.data)
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.dataset.taskId
        })
    },
    /* 下拉刷新 */
    onPullDownRefresh: function() {
        this.getData()
        wx.stopPullDownRefresh()
    },
    /* onShow 页面显示 */
    onShow: function() {
        let storageData = wx.getStorageSync('myRespTaskData')
        if (storageData){
            this.setData({
                data: storageData,
                showloading: true
            })
            return false
        }
        this.getData()
    },
    /* 页面卸载时，缓存数据 */
    onUnload: function() {
        if (!(JSON.stringify(this.data.data) == '{}')) wx.setStorageSync('myRespTaskData', this.data.data)
    }
})
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab_status: 0,
        open1: true,
        open2: false,
        open3: true,
        open4: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getUserInfo();
        //模拟登录跳转
        // wx.navigateTo({
        //     url: '/page/login/index',
        //     success: function (res) { },
        //     fail: function (res) { },
        //     complete: function (res) { },
        // })
        var self = this

        //!!!!假设请求接口结束，2秒后模拟关闭loading
        setTimeout(function () {
            self.setData({
                showloading: true
            })
        }, 2000)

    },
    /**
     * 获取微信公共信息
    */
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
    // 切换类型
    switch_tab: function (e) {
        this.setData({
            tab_status: e.target.id
        })
    },
    // 折叠面板
    change_status: function (e) {
        this.data[e.currentTarget.id] = !this.data[e.currentTarget.id]
        this.setData(this.data)
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        // e.currentTarget.id 仅用来模拟，为了动态显示任务详情页情况
        wx.navigateTo({
            url: '/page/taskDetail/index?id=' + e.currentTarget.id,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    }
})
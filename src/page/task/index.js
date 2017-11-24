var app = getApp();
const myTaskListUrl = app.api.myTaskListUrl
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tab_status: 1,
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
        //未登录跳转
        var self = this, logininfo = wx.getStorageSync('userInfo')

        if (!(logininfo && logininfo.userId)) {
            wx.redirectTo({
                url: '/page/login/index',
            })
            return false
        }
        this.get_task_list();
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
        //点击切换时要判断当前切换情况，避免多次数据请求
        if (e.target.id != this.data.tab_status) {
            this.setData({
                tab_status: e.target.id
            })
            if ((this.data.tab_status == 1 && !this.data.my_charge_task) || (this.data.tab_status == 2 && !this.data.my_launched_task)) {
                this.get_task_list()
            }
        }
    },
    //获取我的任务列表，包括我负责的、我发起的任务
    get_task_list: function () {
        var $this = this
        this.setData({
            showloading: false
        })
        app.request(myTaskListUrl, { about: this.data.tab_status }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                // 我负责的任务
                if ($this.data.tab_status == 1) {
                    $this.setData({
                        my_charge_task: res.data,
                        showloading: true
                    })
                }
                // 我发起的任务赋值
                if ($this.data.tab_status == 2) {
                    $this.setData({
                        my_launched_task: res.data,
                        showloading: true
                    })
                }
            }
        })
    },
    // 折叠面板
    change_status: function (e) {
        this.data[e.currentTarget.id] = !this.data[e.currentTarget.id]
        this.setData(this.data)
    },
    // 点击列表跳转到详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.id,
        })
    }
})
var app = getApp();
const myTaskListUrl = app.api.myTaskListUrl
const myTaskCanAuditUrl = app.api.myTaskCanAuditUrl

Page({
    data: {
        about: 1,
        taskReqArray: []
    },
    /* 我的任务 数据请求 */
    getList: function () {
        var $this = this
        app.request(myTaskListUrl, { about: $this.data.about }, function (res) {
            /* 请求接口成功时 */
            if (res.code == 1) {
                var data = res.data
                if ($this.data.about == 2) {
                    $this.taskReqArray = [];
                    data.A.forEach(function (item, index) {
                        $this.taskReqArray.push({
                            ishidden: true
                        });
                    })
                }
                $this.setData({
                    data: data,
                    taskReqArray: $this.taskReqArray
                })
            }
        })
    },
    //可审列表 数据请求
    getAuditList: function (taskId) {
        var $this = this
        app.request(myTaskCanAuditUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var auditData = res.data
                $this.setData({
                    auditData: auditData
                })
            }
        })
    },
    /* 监听页面加载 */
    onLoad: function (options) {
        this.getUserInfo()
        // this.getList()
        //未登录跳转
        var self = this, logininfo = wx.getStorageSync('loginInfo')
        if (!(logininfo && logininfo.userId)) {
            wx.redirectTo({
                url: '/page/login/index',
            })
        }
        //假设请求接口结束，1秒后模拟关闭loading
        setTimeout(function () {
            self.setData({
                showloading: true
            })
        }, 1000)
    },
    /* 获取公共信息 */
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
            about: e.target.id
        })
        this.getList(this)
    },
    // 折叠面板
    change_status: function (e) {
        var that = this
        this.taskReqArray[e.currentTarget.dataset.taskIndex].ishidden = !this.taskReqArray[e.currentTarget.dataset.taskIndex].ishidden;
        this.taskReqArray.forEach(function (item, index) {
            if (index !== e.currentTarget.dataset.taskIndex && item.ishidden == false) {
                item.ishidden = true;
            }
            if (item.ishidden == false) {
                that.getAuditList(e.currentTarget.dataset.taskId)
            }
        })
        that.setData({
            taskReqArray: this.taskReqArray
        });
    },
    // 我负责的 任务详情
    jumpDetail: function (e) {
        wx.navigateTo({
            url: '/page/taskDetail/index?taskid=' + e.currentTarget.dataset.taskId,
        })
    },
    // 我发起的 任务详情
    jumpAduitDetail: function (e) {
        console.log(e.currentTarget.dataset.taskWorkProgressId)
        wx.navigateTo({
            url: '/page/myTaskAuditDetail/index?taskworkprogressid=' + e.currentTarget.dataset.taskWorkProgressId,
        })
    },
    onShow: function() {
        this.getList()
    }
})
var app = getApp()
const taskListsDetailUrl = app.api.taskListsDetailUrl
const taskListEditHistoryUrl = app.api.taskListEditHistoryUrl

Page({
    data: {
        showReport: false, //默认隐藏我要汇报按钮
        workReportProgress: '' //请删掉！！不要声明没有意义的变量
    },
    /* 页面加载 */
    onLoad: function (options) {
        //请求数据函数
        this.getData(options.taskid)
        this.getEditData(options.taskid)
    },
    //获取任务详情
    getData: function (taskId) {
        var $this = this
        // 获取用户登录信息，通过判断任务执行人id（assign_person）和登录人的userId是否相同，判定是否是登录人的任务
        var userinfo = app.globalData.userInfo

        console.log(app.globalData.userInfo)

        app.request(taskListsDetailUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                var data = res.data
                //  workReportProgress = '' 删掉！这完全没有意义！

                var assign_person = data.assign_person //获取任务执行人id

                //以下逻辑仅为讲解，不用与使用，理解后请删掉
                //此处判断是否显示汇报按钮，同时满足一下两个条件，即显示汇报按钮。
                // 《------讲解开始-------》

                //条件1:判断任务执行人id（assign_person）和登录人的userId是否相同
                if (userinfo.userId == assign_person) {
                    //是登录者本人的任务
                    console.log('这是我的任务')
                }
                //条件2:任务当前工作进度是否是100%
                if (data.work_progress < 100) {
                    //是未完成的任务
                    console.log('这个任务还没有完成，可以点击汇报')
                }
                // 《------讲解结束，理解请删除-------》

                //更新数据
                $this.setData({
                    data: data,
                    // 以上讲解的判断逻辑，一句话就可以搞定，同时满足以下两个条件返回true，否则返回false ，如下。
                    showReport: userinfo.userId == assign_person && data.work_progress < 100
                    // workReportProgress: data.work_report_progress 删掉！不要作无意义的变量赋值！ 
                })

            }
        })
    },
    //请求编辑历史接口
    getEditData: function (taskId) {
        var $this = this
        app.request(taskListEditHistoryUrl, { task_id: taskId }, function (res) {
            if (res.code == 1) {
                // 太傻逼了吧！接口返回的数据就是一个数组！！你没有必要声明一个arr数组再push进去！
                // 我注释掉的删掉！
                // var dataEdit = res.data, arr = []
                // dataEdit.forEach(function (item) {
                //     arr.push(item)
                // })
                $this.setData({
                    arr: res.data,
                    showloading: true
                })
            }
        })
    }
})
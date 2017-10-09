// page/project/lists.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                lists: {
                        "total": 8,
                        "rows": [
                                {
                                        "actual_hours": "174",
                                        "ask_begin_time": "2017-06-01 17:06:01",
                                        "ask_end_date": "2017-09-29",
                                        "children": [
                                                {
                                                        "actual_hours": "143",
                                                        "ask_begin_time": "2017-06-01 17:11:59",
                                                        "ask_end_date": "2017-09-29",
                                                        "children": [],
                                                        "difficulty_level": "一般",
                                                        "executor": "毕璟君",
                                                        "expect_hours": "200",
                                                        "id": "TASK2017031300000013",
                                                        "must_begin_date": "2017-06-01",
                                                        "name": "模型落地之建模代码准备",
                                                        "nearest_progress_audit_time": "2017-09-08 18:05:47",
                                                        "nearest_progress_submit_time": "2017-09-08 18:05:18",
                                                        "task_id": "TASK2017031300000013",
                                                        "task_status": "进行中",
                                                        "time_progress": "94.8",
                                                        "work_cout": "14",
                                                        "work_progress": "75.0",
                                                        "work_report_progress": "75.0"
                                                },
                                                {
                                                        "actual_hours": "31",
                                                        "ask_begin_time": "2017-06-01 17:10:33",
                                                        "ask_end_date": "2017-12-29",
                                                        "children": [],
                                                        "difficulty_level": "一般",
                                                        "executor": "武专红",
                                                        "expect_hours": "300",
                                                        "id": "TASK2017031300000012",
                                                        "must_begin_date": "2017-06-01",
                                                        "name": "数据挖掘模型落地的数据准备（构建数据仓库，存储各类挖掘中间表和结果表）",
                                                        "nearest_progress_audit_time": "2017-08-04 19:02:57",
                                                        "nearest_progress_submit_time": "2017-08-04 19:01:34",
                                                        "opt": " <a href='javascript:void(0);' onclick=\"executeOpt('split','TASK2017031300000012');\">分解</a> <a href='javascript:void(0);' onclick=\"executeOpt('taskDetail','TASK2017031300000012');\">详情</a> <a href='javascript:void(0);' onclick=\"executeOpt('run','TASK2017031300000012');\">定点</a>",
                                                        "reportNum": "<a href='javascript:void(0);' onclick=\"executeOpt('reportList','TASK2017031300000012');\">0</a>",
                                                        "task_id": "TASK2017031300000012",
                                                        "task_status": "进行中",
                                                        "time_progress": "54.0",
                                                        "work_cout": "14",
                                                        "work_progress": "30.3",
                                                        "work_report_progress": "30.3"
                                                }
                                        ],
                                        "difficulty_level": "一般",
                                        "executor": "武专红",
                                        "expect_hours": "300",
                                        "id": "TASK2017031300000010",
                                        "must_begin_date": "",
                                        "name": "数据挖掘模型实施",
                                        "nearest_progress_audit_time": "2017-09-08 18:05:47",
                                        "nearest_progress_submit_time": "2017-09-08 18:05:18",
                                        "opt": " <a href='javascript:void(0);' onclick=\"executeOpt('split','TASK2017031300000010');\">分解</a> <a href='javascript:void(0);' onclick=\"executeOpt('taskDetail','TASK2017031300000010');\">详情</a> <a href='javascript:void(0);' onclick=\"executeOpt('run','TASK2017031300000010');\">定点</a>",
                                        "reportNum": "<a href='javascript:void(0);' onclick=\"executeOpt('reportList','TASK2017031300000010');\">0</a>",
                                        "state": "closed",
                                        "task_id": "TASK2017031300000010",
                                        "task_status": "进行中",
                                        "time_progress": "94.8",
                                        "work_cout": "14",
                                        "work_progress": "52.6",
                                        "work_report_progress": "52.7"
                                },
                                {
                                        "actual_hours": "null",
                                        "ask_begin_time": "2017-09-14 08:30:00",
                                        "ask_end_date": "2017-09-29",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "程伟",
                                        "expect_hours": "20",
                                        "id": "TASK2017091400000002",
                                        "must_begin_date": "2017-09-14",
                                        "name": "五云山道闸系统对接",
                                        "nearest_progress_audit_time": "2017-09-20 18:16:03",
                                        "nearest_progress_submit_time": "2017-09-20 18:14:46",
                                        "task_id": "TASK2017091400000002",
                                        "task_status": "进行中",
                                        "time_progress": "57.2",
                                        "work_cout": "14",
                                        "work_progress": "80.0",
                                        "work_report_progress": "80.0"
                                },
                                {
                                        "actual_hours": "null",
                                        "ask_begin_time": "2017-09-21 08:30:00",
                                        "ask_end_date": "2017-09-30",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "程伟",
                                        "expect_hours": "30",
                                        "id": "TASK2017092100000001",
                                        "must_begin_date": "2017-09-21",
                                        "name": "app二期数据库设计 后台功能和接口",
                                        "nearest_progress_audit_time": "",
                                        "nearest_progress_submit_time": "2017-09-22 18:07:25",
                                        "task_id": "TASK2017092100000001",
                                        "task_status": "进行中",
                                        "time_progress": "22.9",
                                        "work_cout": "14",
                                        "work_progress": "0.0",
                                        "work_report_progress": "25.0"
                                },
                                {
                                        "actual_hours": "null",
                                        "ask_begin_time": "2017-09-05 08:30:00",
                                        "ask_end_date": "2017-10-31",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "申振杰",
                                        "expect_hours": "240",
                                        "id": "TASK2017090500000010",
                                        "must_begin_date": "2017-09-05",
                                        "name": "学习CMS系统运维",
                                        "nearest_progress_audit_time": "2017-09-20 18:07:35",
                                        "nearest_progress_submit_time": "2017-09-20 18:07:08",
                                        "task_id": "TASK2017090500000010",
                                        "task_status": "进行中",
                                        "time_progress": "32.4",
                                        "work_cout": "14",
                                        "work_progress": "12.0",
                                        "work_report_progress": "12.0"
                                },
                                {
                                        "actual_hours": "161",
                                        "ask_begin_time": "2017-03-01 17:39:54",
                                        "ask_end_date": "2017-12-31",
                                        "children": [
                                                {
                                                        "actual_hours": "null",
                                                        "ask_begin_time": "2017-04-04 08:30:00",
                                                        "ask_end_date": "2017-12-31",
                                                        "children": [],
                                                        "difficulty_level": "一般",
                                                        "executor": "武专红",
                                                        "expect_hours": "10",
                                                        "id": "TASK2017033100000002",
                                                        "must_begin_date": "2017-04-04",
                                                        "name": "20170401-20171231 周学习与工作总结",
                                                        "nearest_progress_audit_time": "2017-07-28 14:21:12",
                                                        "nearest_progress_submit_time": "2017-07-28 14:20:48",
                                                        "task_id": "TASK2017033100000002",
                                                        "task_status": "进行中",
                                                        "time_progress": "63.5",
                                                        "work_cout": "14",
                                                        "work_progress": "42.4",
                                                        "work_report_progress": "42.4"
                                                }
                                        ],
                                        "difficulty_level": "一般",
                                        "executor": "武专红",
                                        "expect_hours": "100",
                                        "id": "TASK2017031700000007",
                                        "must_begin_date": "",
                                        "name": "每周业务与技术学习",
                                        "nearest_progress_audit_time": "2017-07-28 14:21:12",
                                        "nearest_progress_submit_time": "2017-07-28 14:20:48",
                                        "state": "closed",
                                        "task_id": "TASK2017031700000007",
                                        "task_status": "进行中",
                                        "time_progress": "67.5",
                                        "work_cout": "14",
                                        "work_progress": "80.8",
                                        "work_report_progress": "80.8"
                                },
                                {
                                        "actual_hours": "764",
                                        "ask_begin_time": "2017-01-01 09:23:29",
                                        "ask_end_date": "2017-12-31",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "张静杰",
                                        "expect_hours": "1000",
                                        "id": "TASK2017022800000004",
                                        "must_begin_date": "2017-01-01",
                                        "name": "CMS日常运维",
                                        "nearest_progress_audit_time": "2017-08-15 08:43:57",
                                        "nearest_progress_submit_time": "2017-08-18 18:03:35",
                                        "task_id": "TASK2017022800000004",
                                        "task_status": "进行中",
                                        "time_progress": "72.8",
                                        "work_cout": "14",
                                        "work_progress": "61.5",
                                        "work_report_progress": "63.0"
                                },
                                {
                                        "actual_hours": "null",
                                        "ask_begin_time": "2017-06-23 08:30:00",
                                        "ask_end_date": "2017-12-31",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "张静杰",
                                        "expect_hours": "20",
                                        "id": "TASK2017062300000010",
                                        "must_begin_date": "2017-06-23",
                                        "name": "CMS业务学习考核",
                                        "nearest_progress_audit_time": "2017-07-18 10:35:50",
                                        "nearest_progress_submit_time": "2017-07-18 10:35:16",
                                        "task_id": "TASK2017062300000010",
                                        "task_status": "进行中",
                                        "time_progress": "48.0",
                                        "work_cout": "14",
                                        "work_progress": "15.0",
                                        "work_report_progress": "15.0"
                                },
                                {
                                        "actual_hours": "null",
                                        "ask_begin_time": "2017-06-22 08:30:00",
                                        "ask_end_date": "2017-12-31",
                                        "children": [],
                                        "difficulty_level": "一般",
                                        "executor": "吕秀锦",
                                        "expect_hours": "300",
                                        "id": "TASK2017062200000006",
                                        "must_begin_date": "2017-06-26",
                                        "name": "CMS系统操作手册编写",
                                        "nearest_progress_audit_time": "2017-08-02 09:13:44",
                                        "nearest_progress_submit_time": "2017-08-01 18:38:22",
                                        "task_id": "TASK2017062200000006",
                                        "task_status": "进行中",
                                        "time_progress": "48.3",
                                        "work_cout": "14",
                                        "work_progress": "25.0",
                                        "work_report_progress": "25.0"
                                }
                        ]
                }

        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                console.log(options.pid)
                var pid = options.pid
                var pages = getCurrentPages()
                if (pages.length > 1) {
                        var prePage = pages[pages.length - 2]
                        var root = prePage.data.demoTree[0].children
                        var activeTree
                        root.forEach(function (item) {
                                if (item.id == pid) activeTree = item
                        })
                        this.setData({
                                tree: prePage.data.demoTree[0].children,
                                pid: pid,
                                activeTree: activeTree
                        })
                        wx.setNavigationBarTitle({
                                title: activeTree.text,
                        })
                }
        },
        // 点击列表跳转到详情
        jumpDetail: function (e) {
                // e.currentTarget.id 仅用来模拟，为了动态显示任务详情页情况
                wx.navigateTo({
                        url: '/page/taskDetail/index?id=' + e.currentTarget.id
                })
        },
        // 仅用于演示
        alert() {
                wx.showToast({
                        title: '敬请期待',
                        icon: 'loading',
                        duration: 1000
                })

        },
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function () {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function () {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {

        }
})
// page/taskDetail/index.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                // 仅用来模拟流程，非真实要用 1:未完成，2:已完成 3:待审核
                status: 1,
                percent1: 60,
                percent2: 10,
                percent3: 20
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                console.log(options)
                if (options.id == 2) {
                        this.setData({
                                percent1: 80,
                                percent2: 100,
                                percent3: 100
                        })
                }
                this.setData({
                        status: options.id
                })
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {

        },

        /**
         * 点击完成
         */
        handle_complate: function () {
                this.setData({
                        status: 2,
                        percent1: 70,
                        percent2: 100,
                        percent3: 100
                })
        },
        /**
       * 点击通过审核
       */
        handle_check: function () {
                this.setData({
                        status: 2,
                        percent2: 100
                })
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
                console.log('下拉刷新')
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
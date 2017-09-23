// page/task/report.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 更新工作进度
     */
    sliderchange: function (e) {
        console.log(e.detail.value)
        console.log(e)

    },
    /**
    * 保存
    */
    save: function () {
        var self = this;
        wx.showLoading({
            title: '上传中',
        })

        setTimeout(function () {
            wx.hideLoading()
            wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 1000
            })
            setTimeout(function () {
                self.cancle()
            }, 500)
        }, 500)

    },
    /**
     * 取消
     */
    cancle: function () {
        wx.navigateBack({
            delta: 1,
        })
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
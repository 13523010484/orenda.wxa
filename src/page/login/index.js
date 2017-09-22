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
    go_login: function () {
        //此处默认登录成功，模拟流程，实际情况则需要另外的操作
        wx.navigateBack({
            delta: 1
        })
    }

})
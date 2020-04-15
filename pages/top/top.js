// pages/top/top.js
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
    var that = this;
    wx.showNavigationBarLoading();
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?key=903fec10365270fa225e390179fceabd',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
        if(!res.data.result.resultCode && res.data.result.stat){
          that.setData({
            newsList: res.data.result.data
          })
        }
      }
    });
    wx.hideNavigationBarLoading()
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
    console.log('当前页面监听到用户执行了下拉动作');
    this.onLoad()
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 3200);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '向你推荐：今日最新头条新闻'
    }
  }
})
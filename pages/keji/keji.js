// pages/keji/keji.js
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
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?key=903fec10365270fa225e390179fceabd&type=keji',
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
  },

  checkNew: function(envent){
    var newsUrl = envent.currentTarget.dataset.newsUrl;
    wx.navigateTo({
      url: '../detail/detail?newsUrl='+ newsUrl,
    });
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
    return {
      title: '向你推荐：今日最新科技新闻'
    }
  }
})
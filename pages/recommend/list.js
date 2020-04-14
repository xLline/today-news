// pages/recommend/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 800,
    previousMargin: '0rpx',
    nextMargin: '0rpx',
    imageList: [
      {
        id: 0,
        imagePath: '/images/kmdx.jpg',
        title: '柯莫德熊',
        desc: '美洲黑熊的一个亚种，在当地的印第安神话中有重要的地位，是世界濒危物种。“柯莫德熊”之名是为纪念第一次研究此物种起源的动物学家，弗朗西斯克·柯莫德。',
        isHot: false,
        time: '2020-04-10',
        count: 0
      },
      {
        id: 1,
        imagePath: '/images/djj.jpg',
        title: '独角鲸',
        desc: '角鲸可能是世界上最神秘的动物之一，它们只生活在北极水域，速度极快，神出鬼没，又叫海洋独角兽。',
        isHot: false,
        time: '2020-04-09',
        count: 0
      },
      {
        id: 2,
        imagePath: '/images/jxmh.jpg',
        title: '基西米湖',
        desc: '爱琴海中璀璨的明珠，柏拉图笔下的自由之地。这里有美丽的日落，壮阔的海景，蓝白相间的色彩，是艺术家的聚集地，是摄影家的天堂。',
        isHot: false,
        time: '2020-04-08',
        count: 0
      },
      {
        id: 3,
        imagePath: '/images/smxes.jpg',
        title: '圣米歇尔山',
        desc: '法国诺曼底附近，距海岸约1公里的岩石小岛，为法国旅游胜地，也是天主教徒的朝圣地，山顶建有著名的圣弥额尔山隐修院。',
        isHot: false,
        time: '2020-04-07',
        count: 0
      },
      {
        id: 4,
        imagePath: '/images/jlc.jpg',
        title: '姬路城',
        desc: '位于日本兵库县姬路市姬山的古城堡，因其白色的外墙和蜿蜒屋檐造型犹如展翅欲飞的白鹭，也被称为白鹭城，是世界文化遗产。',
        isHot: false,
        time: '2020-04-06',
        count: 0
      }
    ],
    count: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      currentIndex :  this.data.imageList.length - 1 ,
      'imageList[4].isHot' : true
    }),
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?key=903fec10365270fa225e390179fceabd'+'001',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
        if(res.data.result.stat){
          that.setData({
            newsList: res.data.result.data
          })
        }
      }
    })


  },

  //事件处理函数
  f0: function(e) {
    var item = parseInt(e.currentTarget.dataset.id);
    this.data.imageList[item].count ++;
    this.setData({
        imageList: this.data.imageList
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
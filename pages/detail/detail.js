Page({
  data:{},
  onLoad: function (options) {
    console.log(options)
    var newsUrl = options.newsUrl;
    console.log(newsUrl)
    this.setData({
      newsUrl: newsUrl
    })
  }
})
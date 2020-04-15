// components/news/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsList: {            // 属性名
      type: Object,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {}     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkNews: function(envent){
      var newsUrl = envent.currentTarget.dataset.newsUrl;
      wx.navigateTo({
        url: '../detail/detail?newsUrl='+ newsUrl,
      });
    },
  }
})

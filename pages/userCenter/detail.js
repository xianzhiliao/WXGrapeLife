//detail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: ''
  },
  onReady:function (options){
    wx.setNavigationBarTitle({
      title:this.data.title
    })
  },
  onLoad: function (options) {
    if(options != null && options.title != null){
      this.setData({
        title:options.title
      })
      // setTimeout(function () {
      //   wx.setNavigationBarTitle({
      //     // 有问题？？？？？
      //     title:options.title
      //   })
      // }, 2000)
    }
  }
})

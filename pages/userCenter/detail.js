//detail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title: 'Hello World'
  },
  onReady:function (options){
    
  },
  onLoad: function (options) {
    if(options){

    }
    this.setData({
      title:options.title
    })
  setTimeout(function () {
    wx.setNavigationBarTitle({
    // 有问题？？？？？
    title:options.title
    })
  }, 2000)
  }
})

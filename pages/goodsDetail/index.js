//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    title:'',
    goodsInfo:{}
  },
  onLoad: function (e) {
    var that = this
    var goodsId = e.goodsId
    var title = e.title
    this.data.title = title
    requsetGoodsDetail(that,goodsId)
  },
  onReady(){
    wx.setNavigationBarTitle({
        title:this.data.title
    })
  }
});

function requsetGoodsDetail(that,goodsId){
   wx.request({
        url: urlConfig.URL_GOODSDETAIL_BASEINFO,
        data:{
            gid:goodsId
        },
        header: {
            // "Content-Type": "application/json"
        },
        success: function (res) {
            if (res.data.code != 0 ||
                res == null ||
                res.data == null) {
                console.error("request error is"+res.msg)
                return
            }
            var goodsInfo = res.data.data
            that.setData({
                goodsInfo: goodsInfo
            });
        }
    });
}
var urlConfig = require('../../utils/urlConfig.js');

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    itemList: [
            {
                id: 'order',
                iconPath:"/image/icon_order.png",
                title: '我的订单',
                navUrl:'detail'
            }, {
                id: 'cart',
                iconPath:"/image/icon_cart.png",
                title: '购物车',
                navUrl:'detail'
            }, {
                id: 'coupon',
                iconPath:"/image/icon_coupon.png",
                title: '我的优惠',
                navUrl:'detail'
            }, {
                id: 'feedback',
                iconPath:"/image/icon_cus.png",
                title: '客服与反馈',
                navUrl:'detail'
            }, {
                id: 'card',
                iconPath:"/image/icon_ptcard.png",
                title: '葡萄卡',
                navUrl:'detail'
            }, {
                id: 'more',
                iconPath:"/image/icon_more.png",
                title: '更多',
                navUrl:'detail'
            }, {
                id: 'dev',
                iconPath:"/image/icon_dev.png",
                title: '开发者中心',
                navUrl:'detail'
            }
        ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //事件处理函数
  avatarTap: function() {
    wx.navigateTo({
      url: 'detail'
    })
  },
  itemTap:function(e){
      var id = e.currentTarget.id, list = this.data.itemList;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                wx.navigateTo({
                    url:list[i].navUrl
                })
            } else {
            }
        }
  }
})

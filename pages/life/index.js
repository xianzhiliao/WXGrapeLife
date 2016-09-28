//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    contentList:[]
  },
  onLoad: function () {
    var that = this
    requsetCMSContent(that)
  }
});

function requsetCMSContent(that){
   wx.request({
        url: 'http://api.copy.putao.so/scmsface/newview/card_streams?app_id=30&app_version=4.6.0&channel_no=app_store&city=%E6%B7%B1%E5%9C%B3&device=iPhone7%2C2&device_no=D5043A24-9BB2-4F1C-AD63-48608A18FC20&district=%E5%8D%97%E5%B1%B1%E5%8C%BA&location=22.548229%2C113.939840&scene=0&sign=3436b49bd50779181fe039dd7ae142c1&sys_version=10.0.1&timestamp=1475055032237',
        header: {
            "Content-Type": "application/json"
        },
        success: function (res) {
            if (res == null ||
                res.data == null ||
                res.data.data == null ||
                res.data.data.length <= 0) {

                console.error(urlConfig.ERROR_DATA_IS_NULL);
                return;
            }
            //将获得的各种数据写入itemList，用于setData
            var itemList = res.data.data
            that.setData({
                contentList: itemList
            });
        }
    });
}
var urlConfig = require('../../utils/urlConfig.js');

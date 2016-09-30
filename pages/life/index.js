//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    ads:[],
    contentList:[]
  },
  onLoad: function () {
    var that = this
    requsetAds(that)
    requsetCMSContent(that)
  },
  cellClick:function(e){
    var currentSection = e.currentTarget.dataset.section
    var currentRow = e.currentTarget.dataset.row
    let contentList = this.data.contentList;
    if (contentList.length > 0){
        contentList.forEach(function(sectionItem,section){
            if(section == currentSection){
                sectionItem.goods_list.forEach(function(rowItem,row){
                    if(row == currentRow){
                        var goods = rowItem;
                        var clickAction = goods.server.click_action;
                        var key = clickAction.key;
                        var params = clickAction.params;
                        var goodsId = goods.server.id
                        wx.navigateTo({
                            url: '/pages/goodsDetail/index?title='+goods.server.name+'&goodsId='+goodsId
                        })
                        return
                    }
                })
            }
        })
    }
  }
});

// 请求广告
function requsetAds(that){
   wx.request({
        url: urlConfig.URL_LIFE_ADS,
        data:{
            channel_no:envConfig.ENV_CHANNEL_NO,
            app_version:envConfig.ENV_APP_VERSION
        },
        header: {
            // "Content-Type": "application/json"
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
            var ads = res.data.data[0].ad_beans
            that.setData({
                ads: ads
            });
        }
    });
}

// 请求内容流
function requsetCMSContent(that){
   wx.request({
        url: urlConfig.URL_LIFE_CONTENT,
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
var envConfig = require('../../utils/envConfig.js');

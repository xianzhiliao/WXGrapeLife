
// 渠道
//url环境相关
var BASE_URL_DEV = "http://api.test.putao.so";
var BASE_URL_TEST = "http://api.copy.putao.so";
var BASE_URL_OFFICE_HTTP = "http://api.putao.so";
var BASE_URL_OFFICE_HTTPS = "https://ssl-api.putao.cn";
var BASE_URL = BASE_URL_TEST;
// 接口地址
//0.首页广告
var URL_LIFE_ADS = BASE_URL.concat("/scmsface/newview/ads")
//1.首页内容流
var URL_LIFE_CONTENT = BASE_URL.concat("/scmsface/newview/card_streams?app_id=30&app_version=4.6.0&channel_no=app_store&city=%E6%B7%B1%E5%9C%B3&device=iPhone7%2C2&device_no=D5043A24-9BB2-4F1C-AD63-48608A18FC20&district=%E5%8D%97%E5%B1%B1%E5%8C%BA&location=22.548229%2C113.939840&scene=0&sign=3436b49bd50779181fe039dd7ae142c1&sys_version=10.0.1&timestamp=1475055032237");
//2.商品详情基本信息
var URL_GOODSDETAIL_BASEINFO = BASE_URL.concat("/sopen/openGoods/queryGoodsBaseInfo?app_id=30&channel=app_store&version=4.6.0")
//error相关
var ERROR_DATA_IS_NULL = "获取数据为空，请重试";


module.exports = {
    URL_LIFE_ADS:URL_LIFE_ADS,
    URL_LIFE_CONTENT: URL_LIFE_CONTENT,
    URL_GOODSDETAIL_BASEINFO:URL_GOODSDETAIL_BASEINFO,
    ERROR_DATA_IS_NULL: ERROR_DATA_IS_NULL
}
//url环境相关
var BASE_URL_DEV = "http://api.test.putao.so";
var BASE_URL_TEST = "http://api.copy.putao.so";
var BASE_URL_OFFICE_HTTP = "http://api.putao.so";
var BASE_URL_OFFICE_HTTPS = "https://ssl-api.putao.cn";
var BASE_URL = BASE_URL_TEST;
// 接口地址
var URL_LIFE_CONTENT = BASE_URL.concat("/scmsface/newview/card_streams");//首页内容流

//error相关
var ERROR_DATA_IS_NULL = "获取数据为空，请重试";


module.exports = {
    URL_LIFE_CONTENT: URL_LIFE_CONTENT,
    ERROR_DATA_IS_NULL: ERROR_DATA_IS_NULL
}
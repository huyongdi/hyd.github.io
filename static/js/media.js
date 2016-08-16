/**
 * Created by C0075 on 2016-4-26.
 */
// encoding=utf-8
define(function (require, exports, module) {
  var $ = require("jquery");
  require("bootstrap");
  require("less");
  var Common = require("common");
  var common = new Common;
  require("messenger");

  
  function init() {
    setInit(); //初始化一些设置
    navSearch();//导航上面的搜索按钮
  }

  function setInit() {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-top',
      theme: 'future'
    };
  }

  function navSearch() {
    $("#nav_search").off("click").on("click", function () {
      var name = $("#nav_input").val();
      var flag = false;
      var person = ["苍井空", "小泽玛利亚", "波多野结衣"];
      $.each(person, function (i, item) {
        if (name == item) {
          flag = true;
        }
      });
      if (flag) {
        common.confirm("未满十八岁禁止观看", function () {
          common.alertInfo("正在加载，请等待~")
        })
      }
    });
  }
  

  module.exports = {
    "init": init
  };
});
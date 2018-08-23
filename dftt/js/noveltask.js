// 获取App native注入函数
var getcParams = {}
// getcParams.os = 'iOS11.1'
getcParams.appqid = 'null'
// getcParams.token = 'B8645169F8EB9F3B076F99659A5886DC'
// getcParams.softtype = 'ios'
try {
  // iOS注入在全局方法，Android注入在全局native对象
  var obj
  obj = window.native ? window.native.getPublicParam() : window.getPublicParam()
  if (typeof obj === 'string') {
    getcParams = JSON.parse(obj)
  } else {
    getcParams = obj
  }
} catch (e) {
  console.error(e)
}

// 获取App native注入函数
var userInfo  = {}
try {
  // iOS注入在全局方法，Android注入在全局native对象
  var obj
  obj = window.native ? window.native.getUserInfo() : window.getUserInfo()
  if (typeof obj === 'string') {
    userInfo = JSON.parse(obj)
  } else {
    userInfo = obj
  }
} catch (e) {
  console.error(e)
}

//错误处理：确保app始终能正常的安装
var timer = setTimeout(
    function() {
        var button = document.getElementById("wrap");
        // var button = document.querySelectorAll(".down-link");
        button.style.visibility = "visible";
        button.onclick = function() {
            var ua = navigator.userAgent;
            if (ua.indexOf(" MicroMessenger/") > -1) {
                //微信中显示遮罩提示在浏览器中打开或进入应用宝
                var div = document.createElement("div");
                div.innerHTML = "<div style='font-size:2rem;color:#fff;text-align:center;"
                    +"position:fixed;left:0;top:0;background:rgba(0,0,0,0.5);filter:alpha(opacity=50);"
                    +"width:100%;height:100%;z-index:10000;'>点击右上角在浏览器中打开</div>";
                document.body.appendChild(div);
            } else {
                if (ua.indexOf("Android") > -1) {
                    //直接下载apk
                    window.location="http://www.shareinstall.com/demo.html?appkey=AKBKB62BF2F7RF&channel=1001";
                } else if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1
                    || ua.indexOf("iPod") > -1) {
                    //直接进入appstore
                    window.location="http://www.shareinstall.com/demo.html?appkey=2FBKAFF6FFRKBA&channel=1002";
                }
            }
        }
    }, 6000);

//shareinstall初始化，初始化时将与shareinstall服务器交互，应尽可能早的调用
/*web页面向app传递的json数据(json string/js Object)，应用被拉起或是首次安装时，通过相应的
  android/ios api可以获取此数据*/
var data = ShareInstall.parseUrlParams();//shareinstall.js中提供的工具函数，解析url中的所有查询参数
var _key = 'AKBKB62BF2F7RF'
// var _key = '7RBKAFAB6KR6AH' // 安卓生产测试
data.channel = 1001
data.qqid = 'hcxxz_cpa08'
data.fictionUid = getcParams.uid || userInfo.id || ''

// TODO: 1.2.2才能完成隐藏任务

if (getcParams.os && getcParams.os.indexOf('iOS') > -1) {
  _key = '2FBKAFF6FFRKBA'
  data.channel = 1002
}
new ShareInstall({
    appKey : _key,
    onready : function() {
        //shareinstall已成功回调，清除定时器
        clearTimeout(timer);
        timer = null;

        var m = this, button = document.getElementById("down-link");
        button.style.visibility = "visible";

        /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
        button.onclick = function() {
            m.wakeupOrInstall();
        }

        var button2 = document.getElementById("downloadButton");
        button2.style.visibility = "visible";

        /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
        button2.onclick = function() {
            m.wakeupOrInstall();
        }
    }
}, data);

// // openinstall
// // 错误处理，openinstall调用失败时：确保app始终能正常的安装
// var timer = setTimeout(
//   function() {
//     var button = document.getElementById("wrap");
//     button.style.visibility = "visible";
//     button.onclick = function() {
//       var ua = navigator.userAgent;
//       if (ua.indexOf(" MicroMessenger/") > -1) {
//         //微信中显示遮罩提示在浏览器中打开或进入应用宝
//         var div = document.createElement("div");
//         div.innerHTML = "<div style='font-size:2rem;color:#fff;text-align:center;" +
//           "position:fixed;left:0;top:0;background:rgba(0,0,0,0.5);filter:alpha(opacity=50);" +
//           "width:100%;height:100%;z-index:10000;'>点击右上角在浏览器中打开</div>";
//         document.body.appendChild(div);
//       } else {
//         if (ua.indexOf("Android") > -1) {
//           //直接下载apk
//           window.location = "http://t.6p95lp.cn/down/index?qid=hcxxz_cpa08";
//         } else if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1 ||
//           ua.indexOf("iPod") > -1) {
//           //直接进入appstore
//           window.location = "http://t.6p95lp.cn/down/index?qid=hcxxz_cpa08";
//         }
//       }
//     }
//   }, 8000);

// //openinstall初始化，初始化时将与openinstall服务器交互，应尽可能早的调用
// /*web页面向app传递的json数据(json string/js Object)，应用被拉起或是首次安装时，通过相应的
//   android/ios api可以获取此数据*/
// var data = OpenInstall.parseUrlParams(); //openinstall.js中提供的工具函数，解析url中的所有查询参数
// data.qqid = 'hcxxz_cpa08'
// data.fictionUid = getcParams.uid || userInfo.id || ''
// // data.accid = getcParams.uid

// new OpenInstall({
//   /*appKey必选参数，openinstall平台为每个应用分配的ID*/
//   appKey: "qpua5b", // 测试
//   // appKey: "fft561",
//   /*可选参数，自定义android平台的apk下载文件名，只有apk在openinstall托管时才有效；个别andriod
//     浏览器下载时，中文文件名显示乱码，请慎用中文文件名！*/
//   // apkFileName: "OpenInstallDemo-v1.1.0.apk",
//   /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
//   preferWakeup: true,
//   /*openinstall初始化完成的回调函数，可选*/
//   onready: function() {
//     //openinstall已成功回调，清除定时器
//     clearTimeout(timer);
//     timer = null;

//     var m = this,
//       button = document.getElementById("downloadButton"),
//       btns = document.querySelector(".btns");
//     button.style.visibility = "visible";
//     btns.style.visibility = "visible";

//     /*在app已安装的情况尝试拉起app*/
//     // m.schemeWakeup();
//     /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
//     button.onclick = function() {
//       m.wakeupOrInstall()
//     }
//     btns.onclick = function() {
//       m.wakeupOrInstall()
//     }
//   }
// }, data)

// document.getElementById('copyright').innerText = 'for test: ' + JSON.stringify(data)

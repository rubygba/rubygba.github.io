// window.JSToNative = function () {};
// window.webkit.messageHandlers.JSToNative_iOS = function () {}
(function () {
  function Page () {
    this.host = '//http://test-api.dftoutiao.com/'
  }
  Page.prototype = {
    init: function () {
      // this.changeBtn()
      this.changeBottom()
      this.jumpDownLoad()
      this.bindClick()
      this.clickLog()
    },
    changeBtn: function () {
      var timeNow = new Date()
      var time_range = function (beginTime, endTime, nowTime) {
        var strb = beginTime.split (":");
        if (strb.length != 2) {
            return false;
        }

        var stre = endTime.split (":");
        if (stre.length != 2) {
            return false;
        }

        var strn = nowTime.split (":");
        if (strn.length != 2) {
            return false;
        }
        var b = new Date ();
        var e = new Date ();
        var n = new Date ();

        b.setHours (strb[0]);
        b.setMinutes (strb[1]);
        e.setHours (stre[0]);
        e.setMinutes (stre[1]);
        n.setHours (strn[0]);
        n.setMinutes (strn[1]);

        if (n.getTime () - b.getTime () > 0 && n.getTime () - e.getTime () < 0) {
            return true;
        } else {
            return false;
        }
      }
      if (!time_range ("18:59", "20:11", new Date().getHours() + ":" + new Date().getMinutes())) {
        var $btn = $('#shareNews').remove()
        $('.btns').prepend($btn)
      }
    },
    openNewPageInApp: function (url) {
      var obj = {
        'method': 'ToNewWebPage',
        'type': '4',
        'url': url
      };
      try {
        if (GLOBAL.Os.android) { // 安卓
          window.JSToNative.postMessage(JSON.stringify(obj));
        } else { // ios
          window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
        }
      } catch (e) {
        console.error(e);
      }
    },
    changeBottom : function () {
      if (window.JSToNative || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.JSToNative_iOS)) {
        $('#bottom').addClass('app')
        $('head title').text('活动主会场')
      }else{
        // $('#share').remove()
        $('#bottom').addClass('not-app')
      }
      if (!(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.JSToNative_iOS)) {
        $('#copyright').height(0)
        $('#copyright').css('margin-top', '.25rem')
        // $('#copyright').css('margin-bottom', '0')
      }
    },
    jumpDownLoad: function () {
      if (!window.JSToNative && !(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.JSToNative_iOS)) {
        var isiOS = GLOBAL.Os.ios
        var data = {
          // qqid: isiOS ? "IOSbsbdqj_wxxz1" : "bsbdqj_wxxz1"
          qqid: '9973tf_hb'
        };
        var m = new OpenInstall({
            appKey : "fft561",  //formal
            // appKey : "qpua5b",     //test
            buttonId: "makeMoney hero redBag openRedBag getFriend openApp shareNews answer"
        },data);
      }
    },
    bindClick: function () {
      var scope = this
      if (window.JSToNative || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.JSToNative_iOS)) {
        $('.btns>.btn').click(function (e) {
          var $btn = $(e.currentTarget)
          var urlid = $btn.data('url')
          switch (urlid) {
            case 1:
              window.location.href='//resources.dftoutiao.com/songheng/DFTT/zqgl/index.html?actentryid=1&m_action=newWebViewWithUrl'
              // scope.openNewPageInApp(window.location.protocol + '//mini.eastday.com/mobile/180131154636068.html?m_action=newWebViewWithUrl&preload=3&apptypeid=DFTT')
              break;
            case 2:
              window.location.href='//mini.eastday.com/toutiaoh5/herolist/index.html?actcenter=1&m_action=newWebViewWithUrl'
              break;
            case 3:
              window.location.href='//resources.dftoutiao.com/hongbaov2/spreadstar.html?actcenter=1&m_action=newWebViewWithUrl';
              break;
            case 4:
              // window.location.href='//kp.dftoutiao.com/shb_in3/?actcenter=1&m_action=newWebViewWithUrl';
              // 跳转邀请收徒页
              $.ttapp.invitation()
              break;
            case 5:
              window.location.href='//resources.dftoutiao.com/hongbao/goodNewbie/goodNewbie.html?actcenter=1&m_action=newWebViewWithUrl';
              break;
            case 6:
              scope.openNewPageInApp(window.location.protocol + '//mini.eastday.com/toutiaoh5/activity/share/index.html?listpg=1&actid=shareacttask&materialid=shareact&actentryid=1340001&m_action=newWebViewWithUrl')
              break;
            case 7:
              var obj = {
                'method': 'ToNewWebPage',
                'type': '0',
                'url': window.location.protocol + '//resources.dftoutiao.com/answer/index.html?touming=1&actcenter=1&m_action=newWebViewWithUrl&isfullscreen=1'
              };
              try {
                if (GLOBAL.Os.android) { // 安卓
                  window.JSToNative.postMessage(JSON.stringify(obj));
                } else { // ios
                  window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
                }
              } catch (e) {
                console.error(e);
              }
              break;
            default:
              break;
          }
        })
        $('#makeMoney').click(function () {
          window.location.href='//resources.dftoutiao.com/songheng/DFTT/zqgl/index.html?actentryid=1&m_action=newWebViewWithUrl'
        })
        // $('#share').click(function () {
        //   if (ACT_RANDOM_HOST.length > 0 ) {
        //     var obj = {
        //       "method": "CallNativeShare",
        //       url: 'http://' + ACT_RANDOM_HOST[parseInt(Math.random() * ACT_RANDOM_HOST.length)] + '/cleam/appact/chunjie2018_v2/chunjie_2018.html',   // 正式
        //       // shareUrl: window.location.protocol + '//test-kp.dftoutiao.com/cleam/appact/chunjie2018test/chunjie_2018.html', // test
        //       title: '2018旺旺年，上东方头条，10亿奖金等你来分~',               //分享标题
        //       des: '东方头条隆重推出“2018旺旺年”活动，十亿红包等你分！',            //分享描述
        //       image: window.location.protocol + '//resources.dftoutiao.com/cleam/appact/chunjie2018_v2/static/img/thumble.png',  //分享图片
        //       acttype: 'hdzhc_share',
        //       isSystemShare: 1,
        //       sharetype:'wechatTimeLine'
        //     }
        //     if (GLOBAL.Os.android) {
        //       obj.urltype = 1
        //     }
        //     GLOBAL.App.postMessage(obj)
        //   }
        // })
      }
    },
    clickLog: function () {
      if (window.JSToNative || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.JSToNative_iOS)) {
        var R = new AppReport({
          from: 'app',
          actid: 'actcenterin',
          materialid: 'actcenterin180320'
        }, {
          share: 'click1',
          makeMoney: 'click2'
        });
        var client = false
        var user = false
        GLOBAL.App.getClientInfo(function (version, oem, qid, imei, machine, plantform, qidwithtime) {
          R.setClientInfo({
            Version: version,
            OEM: oem,
            Qid: qid,
            IMEI: imei,
            Machine: machine,
            Plantform: plantform,
            QidWithTime: qidwithtime
          })
          client = true
          if (client && user) {
            R.post('show');
          }
        })
        $.ttapp.userinfo(function (userinfo) {
          R.setUserInfo(userinfo)
          user = true
          if (client && user) {
            R.post('show');
          }
        })
      }else{
        var R = new AppReport({
          actid: 'actcenterout',
          materialid: 'actcenterout180320'
        }, {
        });
        R.post('show')
      }
    }
  }
  var en = new Page()
  en.init()
})()
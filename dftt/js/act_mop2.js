var $tabs = $('.tabs-nav-item')
var requestList = {
  'taba': [],
  'tabb': []
}

var params = parseQuery(location.search.substring(1))
console.log(params)
var giaccid = ''

var preUrl = '//sdkfiction.mop.com'
var preUrl2 = '//novelapi.mop.com'
var preUrl3 = '//wapwxlog.mop.com/mopletterh5/active'
var preUrl4 = true
var preUrl5 = 'https://mission-data.dftoutiao.com/taskinfo/get_iaccid'
if (location.href.indexOf('testing.eastday.com') > -1) {
  preUrl = '//sandbox.mop.com/domain-sdkfiction'
  preUrl2 = '//sandbox.mop.com/domain-wxapi'
  preUrl3 = '//123.59.60.170/mopletterh5/active'
  preUrl4 = false
  preUrl5 = 'https://test-mission-data.dftoutiao.com/taskinfo/get_iaccid'
}

var iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.style.visibility = 'hidden';
iframe.src = 'js-m-action://setUserInfo';
document.body.appendChild(iframe);

window.setUserInfo = function(accid, mobile, nick, image, bonus, money) {
  var obj = {}
  obj.accid = accid || ''
  obj.mobile = mobile || ''
  obj.nick = nick || ''
  obj.image = image || ''
  obj.bonus = bonus || ''
  obj.money = money || ''
	getIaccid(obj)
};

$tabs.on('click', function () {
  $tabs.removeClass('active')
  $(this).addClass('active')

  var d = $(this).data('tab')
  $('.tabs-content ul').hide()
  $($('#' + d)).show()

  var l = $(this).offset().left + $(this).offset().width / 2

  // $('.tabs-nav .icon-navbr').css('left', l)
})

$('.tabs-nav-item.active').click()

$('.banner-rule').on('click', function(e) {
  $('.tips').removeClass('hide');
})
$('.tips').on('click', function(e) {
  // console.log($(this)[0])
  if (e.target == $(this)[0] || e.target == $('.icon-close')[0]) {
    $(this).addClass('hide');
  }
})

function getIaccid(userInfo) {
  $.ajax({
    url: preUrl5,
    type: 'GET',
    data: {
      accid: userInfo.accid,
      // accid: '12312312',
      // task_id: 64
    },
    dataType: 'jsonp',
    jsonp: 'jsonpcallback',
    success: function(d) {
      console.log(d)
      giaccid = d.data.iaccid
      getSum(giaccid)
      shareInstall(giaccid)
    }
  })
}

function getSum(iaccid) {
  var _params = params
  _params.connectId = iaccid || 'null'
  _params.connectType = 'dftt'

  $.ajax({
    url: preUrl + '/user/connectStatus',
    type: 'GET',
    data: _params,
    timeout: 5000,
    success: function(d) {
      console.log(d)
      if (d.code == 0) {
        // 未绑定
        $('.wrap-link').append('<div class="link"><p>头条ID：'+ _params.connectId +'</p><p>您还未关联猫扑小说账号，点击开始任务建立关联，关联成功即可获得海量金币奖励!</p></div>')

        params.uid = 'null'
        getList('null')
      } else if (d.code == 1) {
        // 已绑定
        $('.wrap-link').append('<div class="linked"><p>头条ID：'+ _params.connectId +'</p><p>已关联猫扑账号：'+ d.fiction_uid +'</p><p>昵称：'+ d.fiction_name +'</p><p>收益：<span class="t-coin">'+ d.awardCount +'</span></p></div>')

        params.uid = d.fiction_uid
        getList(params.uid)
      }
    }
  })
}

var isGetCoin = false

function getCoin(_id, _code) {
  if (isGetCoin) {
    return
  }
  isGetCoin = true

  var _params = params
  _params.taskRecordId = _id
  _params.code = _code
  _params.userId = params.uid

  $.ajax({
    url: preUrl2 + '/eastday/task/v1/getTaskAward',
    type: 'POST',
    data: _params,
    timeout: 5000,
    success: function(msg) {
      isGetCoin = false
      if (msg.code === 200) {
        try {
          document.querySelector('[data-codeid="'+ _code +'"]').classList.add('active')
          document.querySelector('[data-codeid="'+ _code +'"]').innerText = '已领取'
        } catch(e) {
          console.error(e)
        }
        toast(msg.msg)

        location.reload()
      } else {
        toast(msg.msg)
      }
    },
    error: function(e) {
      toast('领取失败，请稍候重试')
      isGetCoin = false
    }
  })
}

function toast(text) {
  var obj = {
    'method': 'alert',
    'msg': text
  }
  try {
    if (window.JSToNative) { // 安卓
        window.JSToNative.postMessage(JSON.stringify(obj))
    } else { // ios
        window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj)
    }
  } catch (e) {
    console.error(e)
  }
}

function getList(uid) {
  var _params = params
  _params.userId = uid

  $.ajax({
    url: preUrl2 + '/eastday/task/v1/list',
    type: 'GET',
    data: _params,
    timeout: 5000,
    success: function(msg) {
      console.log(msg)
      var arr = msg.data
      var arrH = []
      var arrS = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].type === 1) {
          arrH.push(arr[i])
        } else if (arr[i].type === 2) {
          arrS.push(arr[i])
        }
      }

      console.log(arrH)
      console.log(arrS)

      $('#taba').empty()
      $('#tabb').empty()
      for (var a = 0; a < arr.length; a++) {
        var _desc = '<em>任务未完成</em>'
        if (arr[a].type === 2 && arr[a].rechargeAmount) {
          _desc = '<em>已累计充值'+ arr[a].rechargeAmount +'元，再充值'+ arr[a].rechargeMinusAmount +'元即可完成任务</em>'
        } else if (arr[a].keepReadDays) {
          _desc = '<em>已累计阅读'+ arr[a].keepReadDays +'天，今日阅读'+ arr[a].todayReadTime +'分钟</em>'
        } else if (arr[a].todayReadTime) {
          _desc = '<em>今日阅读'+ arr[a].todayReadTime +'分钟</em>'
        }

        var liel = [
          '<li>',
            '<div class="fl">',
              '<p>'+ arr[a].name +'</p>',
              _desc,
            '</div>',
            '<div class="fr">',
              '<span class="s-coin">+'+ arr[a].amount +'</span>',
            '</div>',
          '</li>'
        ].join('')

        if (arr[a].completeState === '1') {
          liel = [
            '<li>',
              '<div class="fl">',
                '<p>'+ arr[a].name +'</p>',
                '<em>任务已完成</em>',
              '</div>',
              '<div class="fr">',
                '<span class="s-coin">+'+ arr[a].amount +'</span>',
                '<a class="s-btn" data-codeid="'+ arr[a].code +'" href="javascript:getCoin('+ arr[a].taskRecordId +', '+ arr[a].code +');">领奖励</a>',
              '</div>',
            '</li>'
          ].join('')
        } else if (arr[a].completeState === '2') {
          liel = [
            '<li>',
              '<div class="fl">',
                '<p>'+ arr[a].name +'</p>',
                '<em>任务已完成</em>',
              '</div>',
              '<div class="fr">',
                // '<span class="s-coin">+'+ arr[a].amount +'</span>',
                '<a class="s-btn active">已领取</a>',
              '</div>',
            '</li>'
          ].join('')
        }

        if (arr[a].type === 2) {
          $('#tabb').append(liel)
        } else {
          $('#taba').append(liel)
        }
      }
    }
  })
}


function parseQuery(query) {
  var args = {}
  var items = query.split('&')

  var item = null, name = null, value = null
  for (var i=0; i < items.length; i++) {
    item = items[i].split('=')
    if(item[0]) {
      name = item[0]
      value = item[1] ? item[1] : ''
      args[name] = value
    }
  }
  return args
}

// DC日志上报
function logActive() {
  // 项目渠道id
  var qid = params.qid || window.localStorage.act_mopqid // 先读取url中qid

  // 用户id
  var userId = window.localStorage.act_mopuid

  // qid cookies存储
  if (qid && qid !== 'null') {
    window.localStorage.act_mopqid = qid
  } else {
    qid = 'null'
    // 无qid的情况，删除cookie中qid
    window.localStorage.act_mopqid = ''
  }

  // uid cookies存储
  if (!userId || userId === 'null') {
    userId = (+new Date()) + Math.random().toString(10).substring(2, 6)
    window.localStorage.act_mopuid = userId
  }

  var _params = {
    actidentryid: '1340004',
    actid: 'maopunovel',
    // qid: qid,
    qid: 'toutiaoqdy',
    uid: userId,
    softtype: 'mop',
    softname: 'mop_wx',
    urlfrom: 'null',
    urlto: location.origin + location.pathname,
    pgnum: 'null',
    pgsize: 'null',
    bookid: 'null',
    sectionid: 'null',
    pgsize: 'null',
    os: getOsType(),
    browser: getBrowserType(),
  }
  if (preUrl4) {
    $.ajax({
      url: '//stinvi.dftoutiao.com/appstatistics/appact',
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsonpcallback',
      data: _params,
      timeout: 5000,
      success: function(msg) {
      },
      error: function(e) {
      }
    })
  }

  $.ajax({
    url: preUrl3,
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsonpcallback',
    data: _params,
    timeout: 5000,
    success: function(msg) {
    },
    error: function(e) {
    }
  })
}
logActive()

// shareinstall
// 错误处理，shareinstall调用失败时：确保app始终能正常的安装
var timer = setTimeout(
  function() {
    var button = document.getElementById("downloadButton");
    button.style.visibility = "visible";
    button.onclick = function() {
      var ua = navigator.userAgent;
      if (ua.indexOf(" MicroMessenger/") > -1) {
        //微信中显示遮罩提示在浏览器中打开或进入应用宝
        var div = document.createElement("div");
        div.innerHTML = "<div style='font-size:2rem;color:#fff;text-align:center;" +
          "position:fixed;left:0;top:0;background:rgba(0,0,0,0.5);filter:alpha(opacity=50);" +
          "width:100%;height:100%;z-index:10000;'>点击右上角在浏览器中打开</div>";
        document.body.appendChild(div);
      } else {
        if (ua.indexOf("Android") > -1) {
          //直接下载apk
          window.location = "http://www.shareinstall.com/demo.html?appkey=7FBKAE6B22FK6E&channel=toutiaoqdy";
        } else if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1 ||
          ua.indexOf("iPod") > -1) {
          //直接进入appstore
          window.location = "http://www.shareinstall.com/demo.html?appkey=7FBKAE6B22FK6E&channel=toutiaoqdy";
        }
      }
    }
  }, 8000);

function shareInstall(iaccid) {
  //shareinstall初始化，初始化时将与shareinstall服务器交互，应尽可能早的调用
  /*web页面向app传递的json数据(json string/js Object)，应用被拉起或是首次安装时，通过相应的 android/ios api可以获取此数据*/
  var data = ShareInstall.parseUrlParams(); //shareinstall.js中提供的工具函数，解析url中的所有查询参数
  data.channelCode = 'toutiaoqdy'
  data.channel = 'toutiaoqdy'
  data.qid = 'toutiaoqdy'
  data.type = 3
  data.connectType = 'dftt'
  data.connectId = iaccid

  new ShareInstall({
    /*appKey必选参数，shareinstall平台为每个应用分配的ID*/
    appKey: "7FBKAE6B22FK6E",
    /*可选参数，自定义android平台的apk下载文件名，只有apk在shareinstall托管时才有效；个别andriod
      浏览器下载时，中文文件名显示乱码，请慎用中文文件名！*/
    // apkFileName: "OpenInstallDemo-v1.1.0.apk",
    /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
    preferWakeup: true,
    /*shareinstall初始化完成的回调函数，可选*/
    onready: function() {
      //shareinstall已成功回调，清除定时器
      clearTimeout(timer);
      timer = null;

      var m = this,
        button = document.getElementById("downloadButton");
      button.style.visibility = "visible";

      /*在app已安装的情况尝试拉起app*/
      // m.schemeWakeup();
      /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
      button.onclick = function() {
        m.wakeupOrInstall()
      }
    }
  }, data)
}



// lib
//
function getBrowserType() {
  var agent = navigator.userAgent.toLowerCase()
  var browserType = ''
  if (agent.indexOf('msie') > 0) {
    browserType = 'IE'
  }
  if (agent.indexOf('firefox') > 0) {
    browserType = 'firefox'
  }
  if (agent.indexOf('chrome') > 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('360 aphone browser') < 0) {
    browserType = 'chrome'
  }
  if (agent.indexOf('360 aphone browser') > 0 || agent.indexOf('qhbrowser') > 0) {
    browserType = '360'
  }
  if (agent.indexOf('ucbrowser') > 0) {
    browserType = 'UC'
  }
  if (agent.indexOf('micromessenger') > 0) {
    browserType = 'WeChat'
  }
  if ((agent.indexOf('mqqbrowser') > 0 || agent.indexOf('qq') > 0) && agent.indexOf('micromessenger') < 0) {
    browserType = 'QQ'
  }
  if (agent.indexOf('miuibrowser') > 0) {
    browserType = 'MIUI'
  }
  if (agent.indexOf('mb2345browser') > 0) {
    browserType = '2345'
  }
  if (agent.indexOf('sogoumobilebrowser') > 0) {
    browserType = 'sogou'
  }
  if (agent.indexOf('liebaofast') > 0) {
    browserType = 'liebao'
  }
  if (agent.indexOf('weibo') > 0) {
    browserType = 'weibo'
  }
  if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0 && agent.indexOf('ucbrowser') < 0 && agent.indexOf('micromessenger') < 0 && agent.indexOf('mqqbrowser') < 0 && agent.indexOf('miuibrowser') < 0 && agent.indexOf('mb2345browser') < 0 && agent.indexOf('sogoumobilebrowser') < 0 && agent.indexOf('liebaofast') < 0 && agent.indexOf('qhbrowser') < 0 && agent.indexOf('weibo') < 0) {
    browserType = 'safari'
  }
  return browserType
}

function getOsType() {
  var agent = navigator.userAgent.toLowerCase(),
    osType = '',
    index = '',
    version = ''
  if (/android/i.test(navigator.userAgent)) {
    index = agent.indexOf('android')
    version = agent.substr(index + 8, 3)
    osType = 'Android ' + version
  }
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    index = agent.indexOf('os')
    version = agent.substr(index + 3, 4)
    osType = "iOS " + version
  }
  if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    osType = 'Linux'
  }
  if (/windows|win32/i.test(navigator.userAgent)) {
    osType = 'windows32'
  }
  if (/windows|win64/i.test(navigator.userAgent)) {
    osType = 'windows64'
  }
  return osType
}
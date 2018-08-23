( function() {
  var $tabs = $('.tabs-nav-item');
  // 测试
  // var envObj = {
  //     taskHost: 'http://zhangyu3.zhihuizhangyu.cn',
  //     getIaccidHost: 'https://test-mission-data.dftoutiao.com',
  //     appkey: '2HBK7F7AKK6H62',
  //     packageName: 'com.komoxo.chocolateimekmx'
  // }
  var loadAppStatus = 1;
  var $downloadButton = $('#downloadButton'),
      $tipBox = $('#tipBox');
  // 正式
  var envObj = {
      taskHost: 'https://octopusimetask.dftoutiao.com',
      getIaccidHost: 'https://mission-data.dftoutiao.com',
      appkey: "A7BK7B6EHBHBK6",
      packageName: 'com.komoxo.octopusime'
  }
  var token = '';
  var userInfo = {};
  var packageName = '';
  var downloadUrl = '';
  var isStartLoad = true;
  var shareInstall = null;
  var isShowNew = true;
  var isUpdateBtn = true; // 每隔0.5秒更新下载进度
  var isPauseLoad = false; // 是否暂停下载，暂停下载立即显示暂停
  var getOsInfo = ( function() {
      var ua = navigator.userAgent;
      return {
          wechat: ua.indexOf(" MicroMessenger/") > -1,
          android: ua.indexOf("Android") > -1,
          ios: ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1 || ua.indexOf("iPod") > -1
      }
  }());
  var params = {};
  var APP = function() {};
  APP.prototype = {
      init: function() {
          var scope = this;
          scope.getClientInfo();
      },
      getClientInfo: function() {
          var scope = this;
          SLAPP.Dftt.PostMessage.m4({
              method: 'getClientInfo',
              params: {},
              callbackName: 'setClientInfo',
              callback: function(version, oem, qid, imei, machine, plantform, qidWithTime) {
                  if (scope.compareVersion(version, '2.2.1')) { // 大于等于2.2.1
                      isShowNew = true;
                      scope.sendFilterURL();
                      scope.getLoginToken();
                      scope.showLoadStyle();
                  } else {
                      isShowNew = false;
                      scope.getLoginToken();
                  }

              }
          });
      },
      compareVersion: function(curV, reqV) {
          if (curV && reqV) {
              //将两个版本号拆成数字
              var arr1 = curV.split('.'),
                  arr2 = reqV.split('.');
              var minLength = Math.min(arr1.length, arr2.length),
                  position = 0,
                  diff = 0;
              //依次比较版本号每一位大小，当对比得出结果后跳出循环（后文有简单介绍）
              while (
                  position < minLength &&
                  (diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0
              ) {
                  position++;
              }
              diff = diff != 0 ? diff : arr1.length - arr2.length;
              //若curV大于reqV，则返回true
              return diff >= 0;
          } else {
              //输入为空
              // console.log('版本号不能为空');
              return false;
          }
      },
      showLoadStyle: function() {
          var scope = this;
          window.downZYStatusCb = function(res) {
              var data = JSON.parse(res);
              // console.log('downZYStatusCb', res);
              scope.setCookie('loadStatus', res);
              if (data.status === '8') { // 之前已安装，要是未被删除显示打开，已删除显示开始任务
                  scope.judgeInstalled(data);
              } else if (data.status === '3') {
                  // scope.downloadApp(3);
                  window.downZYCb = function(data) {
                      var data = JSON.parse(data);
                      scope.downloadBtnStatus(data, true);
                  }
                  window.downZYFail = function(res) {
                      // console.log('downZYFail', res);
                  }
              } else {
                  scope.downloadBtnStatus(data, false);
              }
          }
          window.downZYStatusFail = function(res) {
              // console.log('downZYStatusFail', res);
              scope.setCookie('loadStatus', JSON.stringify({
                  'status': '1'
              }));
          }
          var obj = {
              method: "gamecenter/queryStatus",
              params: {
                  packageName: envObj.packageName
              },
              callback: 'downZYStatusCb',
              failCallback: 'downZYStatusFail'
          };
          if (getOsInfo.android) {
              // Android
              window.JSToNative.postMessage(JSON.stringify(obj));
          } else {
              // IOS
              window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
          }
      },
      downloadApp: function(status, confirm) {
          var scope = this;
          isStartLoad = true;
          var statusByCookie = scope.getCookie('loadStatus') ? JSON.parse(scope.getCookie('loadStatus')).status : 1;
          var loadStatus = status || statusByCookie || loadAppStatus;
          downloadUrl = downloadUrl || scope.getCookie('zydownurl');
          packageName = packageName || envObj.packageName;
          // console.log('downloadApp-2', loadStatus, packageName, downloadUrl);
          var obj = {
              packageName: packageName,
              contentLength: "30.18",
              status: loadStatus,
              downloadUrl: downloadUrl,
              gameKey: "A7BK7B6EHBHBK6",
              appName: "章鱼输入法",
              pageUrl: scope.getUrlNoParams(), // H5页面地址
              pageType: '0', // H5页面
              confirm: confirm || 0 // 1 确定，0取消
          };
          // 成功回调方法名
          var callbackName = 'downZYCb';
          // 失败回调方法名
          var failCallbackName = 'downZYFail';

          window[callbackName] = function(data) {
              var data = JSON.parse(data);
              // console.log('downloadGameCb-res', data);
              // console.log('downloadGameCb-scope', scope);
              scope.downloadBtnStatus(data, true);
          }
          window[failCallbackName] = function(res) {
              var data = JSON.parse(res);
          // console.log('downloadGameFail', res);
          }
          // 参数对象
          var obj = {
              method: "gamecenter/downloadGame",
              // 参数
              params: obj,
              callback: callbackName,
              failCallback: failCallbackName
          };
          if (getOsInfo.android) {
              // Android
              window.JSToNative.postMessage(JSON.stringify(obj));
          } else {
              // IOS
              window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
          }
      },
      downloadBtnStatus: function(data, isToast) {
          var scope = this;
          var status = parseInt(data.status);
          // var statusData = scope.getCookie('loadStatus'); // 测试
          // console.log('downloadBtnStatus', data);
          // var statusDataStr = data;
          var statusDataStr = JSON.stringify(data);
          switch (status) {
          case 1:
              if (isToast && isStartLoad) {
                  scope.toast('开始下载');
                  isStartLoad = false;
              }
              break;
          case 2: // 队列等待中
              if (isToast) {
                  scope.setCookie('loadStatus', statusDataStr);
              }
              $downloadButton.addClass('border-blue').removeClass('border-gray').children('.btn-await').addClass('show').siblings().removeClass('show');
              break;
          case 3: // 开始下载
              if (isToast) {
                  scope.setCookie('loadStatus', statusDataStr);
                  scope.setCookie('loadZYProgress', data.progress);
              }
              if (isUpdateBtn && !isPauseLoad) {
                  setTimeout(function() {
                      isUpdateBtn = true
                  }, 500);
                  $downloadButton.addClass('border-blue').removeClass('border-gray').children('.btn-loading').addClass('show').siblings().removeClass('show').end().children('.box-progress').css('width', data.progress + '%').children('span').text(data.progress + '%');
              }
              isUpdateBtn = false;
              break;
          case 4: // 移动网络异常导致的暂停
              if (isToast) {
                  scope.toast('网络异常，请重试');
                  scope.setCookie('loadStatus', statusDataStr);
              }
              var progress = scope.getCookie('loadZYProgress') || 0;
              $downloadButton.addClass('border-gray').removeClass('border-blue').children('.btn-pause').addClass('show').siblings().removeClass('show').end().children('.box-progress').css('width', progress + '%').children('span').text('重试');
              break;
          case 5: // wifi切换移动网络/网络异常导致的暂停
              if (isToast) {
                  scope.toast('网络异常，请重试');
                  scope.setCookie('loadStatus', statusDataStr);
              }
              var progress = scope.getCookie('loadZYProgress') || 0;
              $downloadButton.addClass('border-gray').removeClass('border-blue').children('.btn-pause').addClass('show').siblings().removeClass('show').end().children('.box-progress').css('width', progress + '%').children('span').text('继续');
              break;
          case 6: // 手动点暂停
              if (isToast) {
                  scope.setCookie('loadStatus', statusDataStr);
              }
              if (!isPauseLoad) {
                  var progress = scope.getCookie('loadZYProgress') || 0;
                  $downloadButton.addClass('border-gray').removeClass('border-blue').children('.btn-pause').addClass('show').siblings().removeClass('show').end().children('.box-progress').css('width', progress + '%').children('span').text('继续');
              }
              isPauseLoad = true;
              break;
          case 7: // 下载成功
              if (isToast) {
                  scope.setCookie('loadStatus', statusDataStr);
              }
              $downloadButton.addClass('border-blue').removeClass('border-gray').children('.btn-active').addClass('show').text('安装').siblings().removeClass('show');
              break;
          case 8: // 安装完成
              if (isToast) {
                  scope.setCookie('loadStatus', statusDataStr);
              }
              $downloadButton.addClass('border-blue').removeClass('border-gray').children('.btn-active').addClass('show').text('打开').siblings().removeClass('show');
              break;
          case 11: // 网络不可用
              if (isToast) {
                  scope.toast('网络不可用');
              }
              break;
          case 12: // 当前网络是移动网络
              $tipBox.show();
              break;
          default:
              return;
          }
      },
      getIaccid: function() {
          var scope = this;
          $.ajax({
              url: envObj.getIaccidHost + '/taskinfo/get_iaccid?accid=' + params.accid,
              type: 'GET',
              dataType: 'jsonp',
              jsonp: 'jsonpcallback',
              timeout: 5000,
              success: function(data) {
                  if (data.code === 0) { // 成功
                      params.iaccid = data.data.iaccid;
                  } else { // 失败 data.status === 0
                      scope.toast('获取数据失败,请稍后再试');
                  }
              }
          })
      },
      getSum: function() {
          var scope = this;
          $.ajax({
              url: envObj.taskHost + '/toutiao_octopus_coin_task/taskStatus',
              type: 'GET',
              data: params,
              dataType: 'jsonp',
              jsonp: 'jsonpcallback',
              timeout: 5000,
              success: function(data) {
                  if (data.status == 1) { // 成功
                      if (data.accid) { // 已绑定
                          $('.wrap-link').append('<div class="linked"><p>东方头条用户昵称：' + params.nickname + '</p><p>已关联章鱼输入法昵称：' + data.accountname + '</p><p>收益：<span class="s-coin">' + data.gold + '</span></p></div>');
                      } else { // 未绑定
                          $('.wrap-link').append('<div class="link"><p>您还未关联章鱼输入法账号，点击开始任务建立关联，关联成功即可获得海量金币奖励!</p></div>');
                      }

                  } else { // 失败 data.status === 0
                      scope.toast(data.msg);
                  }
                  scope.getList(data.data);
              }
          })
      },
      getTaskStatus: function(taskData, taskStatusData) {
          var liel = [];
          for (var i = 0, len = taskData.length; i < len; i++) {
              var status = '',
                  statusInfo = '',
                  statusClass = '';
              if (taskStatusData[taskData[i].taskcode] == '-1') {
                  statusInfo = '任务未完成';
                  status = '未完成';
                  statusClass = 'btn-disable';
              } else if (taskStatusData[taskData[i].taskcode] == '0') {
                  statusInfo = '任务已完成';
                  status = '领取奖励';
                  statusClass = 'btn-active';
              } else if (taskStatusData[taskData[i].taskcode] == '1') {
                  statusInfo = '任务已完成';
                  status = '已完成';
                  statusClass = 'btn-finish';
              }
              liel.push([
                  '<li>',
                  '  <div class="fl">',
                  '    <p>' + taskData[i].detail + '</p>',
                  '    <em>' + statusInfo + '</em>',
                  '  </div>',
                  '  <div class="fr">',
                  '    <div class="s-coin">+' + taskData[i].coinNum + '金币</div>',
                  '    <div data-taskid="' + taskData[i].taskcode + '" class="s-btn ' + statusClass + '">' + status + '</div>',
                  '  </div>',
                  '</li>'].join(""));
          }
          $('#taba').html(liel.join(""));
      },
      getList: function(taskStatusData) {
          var scope = this;
          $.ajax({
              // url: envObj.taskHost + '/eastday/task/v1/list',
              url: './data/task.json',
              type: 'GET',
              timeout: 5000,
              success: function(msg) {
                  scope.getTaskStatus(msg, taskStatusData);
              }
          })
      },
      getCoin: function(taskid) {
          var scope = this;
          var _params = $.extend({}, params);
          _params.taskCode = taskid;
          _params.lt = token;
          // console.log('userInfo', JSON.stringify(userInfo));
          var $curBtn = $('[data-taskid="' + taskid + '"]');
          $.ajax({
              url: envObj.taskHost + '/toutiao_octopus_coin_task/addCoin',
              type: 'GET',
              data: _params,
              dataType: 'jsonp',
              jsonp: 'jsonpcallback',
              timeout: 5000,
              success: function(msg) {
                  if (msg.status === '1') {
                      try {
                          $curBtn.removeClass('btn-active').addClass('btn-finish').text('已完成');
                          $curBtn.parent().prev().children('em').text('任务已完成');
                      } catch ( e ) {
                          console.error(e)
                      }
                      scope.toast('领取成功')
                  // location.reload()
                  } else {
                      scope.toast('领取失败');
                      $curBtn.removeClass('btn-finish').addClass('btn-active').text('领取奖励');
                  }
              },
              error: function(e) {
                  scope.toast('领取失败，请稍候重试');
                  $curBtn.removeClass('btn-finish').addClass('btn-active').text('待领取');
              }
          })
      },
      getLoginToken: function() {
          var scope = this;
          SLAPP.Dftt.PostMessage.m4({
              method: 'getLogParameter',
              params: {},
              callbackName: 'getLogParameter', // 口头约定的回调方法名
              // 回调方法
              callback: function(res) {
                  if (getOsInfo.android) {
                      res = JSON.parse(res);
                  }
                  token = res.login_token;
                  // console.log('res', JSON.stringify(res));
                  params = $.extend({}, res);
                  params.accid = params.ttaccid;
                  params.qid = params.appqid;
                  delete params.login_token;
                  scope.getUserInfo();

              // console.log('token', token);
              // console.log('params', JSON.stringify(params));
              }
          });
      },
      initEvent: function() {
          var scope = this;
          var $tipBox = $('#tipBox');
          // 获取金币
          $('#taba').on('click', '.btn-active', function() {
              var $this = $(this);
              $this.removeClass('btn-active').addClass('btn-finish').text('请求中');
              scope.getCoin($this.data('taskid'));
          });
          // $downloadButton.on('click', function() {
          //     scope.downloadApp();
          // });
          $('#tipCancel').click(function() {
              $tipBox.hide();
          });
          $('#tipOk').click(function() {
              $tipBox.hide();
              var status = JSON.parse(scope.getCookie('loadStatus')).status;
              scope.downloadApp(status, 1);
          });
          var isExc = true;
          if (isShowNew) {
              $downloadButton.on('click', '.btn-status', function() {
                  if (!isExc) {
                      return false;
                  }
                  isExc = false;
                  var clickTimer = setTimeout(function() {
                      isExc = true;
                  }, 500);
                  var $target = $(this);
                  // console.log('btn-status', $target.text());
                  var loadStatus = JSON.parse(scope.getCookie('loadStatus')).status;
                  // console.log('click-status', loadStatus);
                  if ($target.text() === '开始任务') {
                      scope.toast('下载任务已创建');
                      shareInstall.wakeupOrInstall();
                  } else if ($target.text().indexOf('重试') > -1) {
                      scope.downloadApp(loadStatus); // 3
                  // shareInstall.wakeupOrInstall();
                  } else if ($target.text().indexOf('继续') > -1) {
                      // scope.downloadApp(1); // 6
                      // scope.downloadApp(loadStatus);
                      isPauseLoad = false;
                      isUpdateBtn = true;
                      shareInstall.wakeupOrInstall();
                  // loadStatus.status = 1;
                  // scope.setCookie('loadStatus', JSON.stringify(loadStatus));
                  // shareInstall.wakeupOrInstall(); // 避免暂停时刷新页面
                  } else if ($target.text() === '安装') {
                      scope.downloadApp(7); // 7 会出现提示创建下载任务
                  } else if ($target.text() === '打开') {
                      scope.downloadApp(8); // 8
                  } else if ($target.text().indexOf('%') > -1) { // 下载中20%，30%的情形
                      // scope.downloadApp(3); // 下载中删除进程，再进入不能暂停，原因获取不到下载地址
                      var progress = scope.getCookie('loadZYProgress') || 0;
                      $downloadButton.addClass('border-gray').removeClass('border-blue').children('.btn-pause').addClass('show').siblings().removeClass('show').end().children('.box-progress').css('width', progress + '%').children('span').text('继续');
                      isPauseLoad = true;
                      shareInstall.wakeupOrInstall();
                  }
              });
          } else {
              $downloadButton.on('click', function() {
                  shareInstall.wakeupOrInstall();
              })
          }
      // 点击开始唤醒app
      // scope.openApp();
      },
      judgeInstalled: function(statusData) {
          var scope = this;
          // console.log('judgeInstalled', this.setCookie);
          // var cbName = 'h5Installcb_' + Math.random().toString().substring(2);
          var andPkArr = ['com.komoxo.octopusime'];
          // var iosPkArr = [];
          SLAPP.Dftt.PostMessage.m4({
              method: 'ToGetAppInstallStatus',
              params: {
                  "package_list_and": andPkArr,
              // "package_list_ios": iosPkArr
              // 'installStatusCb': window.cbName
              },
              callbackName: 'appStatusCallback', // 口头约定的回调方法名
              // 回调方法
              callback: function(res) {
                  var pkg = null;
                  // console.log('安装的包', res);
                  if (getOsInfo.android) {
                      pkg = res.and
                  } else {
                      pkg = res.ios
                  }
                  scope.showInstalledApp(pkg, statusData);
              }
          });
      },
      showInstalledApp: function(appArr, statusData) {
          var scope = this;
          // console.log('showInstalledApp', appArr);
          for (var i = 0, len = appArr.length; i < len; i++) {
              if (appArr[i].status) { // 已安装
                  statusData.status = 8;
                  scope.setCookie('loadStatus', JSON.stringify(statusData));
                  $downloadButton.children('.btn-active').text('打开');
              } else {
                  statusData.status = 1;
                  scope.setCookie('loadStatus', JSON.stringify(statusData));
              }
          }
      },
      parseQuery: function(query) {
          var args = {}
          var items = query.split('&')

          var item = null,
              name = null,
              value = null
          for (var i = 0; i < items.length; i++) {
              item = items[i].split('=')
              if (item[0]) {
                  name = item[0]
                  value = item[1] ? item[1] : ''
                  args[name] = value
              }
          }
          return args
      },
      toast: function(text) {
          SLAPP.Dftt.PostMessage.m2({
              method: 'alert',
              params: {
                  'msg': text
              }
          });
      },
      getUserInfo: function() {
          var scope = this;
          window.setUserInfo = function(accid, mobile, nick, image, bonus, money) {
              if (mobile) {
                  var tmp = mobile.split('-');
                  if (tmp.length >= 2) {
                      mobile = tmp[0];
                  }
              }

              var accountname = '';
              if (mobile) {
                  accountname = mobile;
              }

              userInfo = {
                  accid: accid,
                  nickname: nick,
                  headpic: image,
                  mobile: mobile + '',
                  phone: mobile,
                  accountname: accountname,
                  visitor: 0 // 是否是游客
              };
              var phoneProcessed = userInfo.mobile.substring(0, 3) + '****' + userInfo.mobile.substring(7, 11);
              params.nickname = userInfo.nickname || phoneProcessed;
              params.accid = userInfo.accid;
              var app = new APP();
              app.getSum();
              app.initShareInstall();
              app.initEvent();
              app.getIaccid();
          };
          SLAPP.Dftt.PostMessage.m1({
              method: 'getUserInfo',
              params: {},
              callback: window.setUserInfo
          });
      },
      sendFilterURL: function() {
          var scope = this;
          var loadPageUrlCb = function(res) {
              // {"packageName":"%s", "downloadUrl":"%s"}
              // console.log('loadPageUrlCb', res);
              var data = JSON.parse(res);
              packageName = data.packageName;
              downloadUrl = data.downloadUrl;
              scope.setCookie('zydownurl', downloadUrl);
              var loadStatus = JSON.parse(scope.getCookie('loadStatus'));
              scope.downloadApp(loadStatus.status);
          };
          var loadPageUrlFail = function(res) {
              // console.log('loadPageUrlFail', res);
          };
          SLAPP.Dftt.PostMessage.m1({
              method: "gamecenter/loadPage",
              params: {
                  pageUrl: window.location.href, //当前页URL
                  downloadFilter: 'shareinstall.com/download/', //过滤方法
                  packageName: envObj.packageName //apk包名
              },
              callback: loadPageUrlCb,
              failCallback: loadPageUrlFail
          });

      },
      initShareInstall: function() {
          var scope = this;
          // var osInfo = getOsInfo;
          // shareinstall
          // 错误处理，shareinstall调用失败时：确保app始终能正常的安装
          // var timer = setTimeout(function() {
          //     var button = document.getElementById("downloadButton");
          //     button.style.visibility = "visible";
          //     button.onclick = function() {
          //         if (osInfo.wechat) {
          //             //微信中显示遮罩提示在浏览器中打开或进入应用宝
          //             var div = document.createElement("div");
          //             div.innerHTML = "<div style='font-size:2rem;color:#fff;text-align:center;" +
          //                 "position:fixed;left:0;top:0;background:rgba(0,0,0,0.5);filter:alpha(opacity=50);" +
          //                 "width:100%;height:100%;z-index:10000;'>点击右上角在浏览器中打开</div>";
          //             document.body.appendChild(div);
          //         } else {
          //             if (osInfo.android) {
          //                 //直接下载apk
          //                 window.location = "http://www.shareinstall.com/demo.html?appkey=A7BK7B6EHBHBK6&channel=1000";
          //             } else if (osInfo.ios) {
          //                 //直接进入appstore
          //                 window.location = "http://www.shareinstall.com/demo.html?appkey=A7BK7B6EHBHBK6&channel=1000";
          //             }
          //         }
          //     }
          // }, 5000);
          //shareinstall初始化，初始化时将与shareinstall服务器交互，应尽可能早的调用
          /*web页面向app传递的json数据(json string/js Object)，应用被拉起或是首次安装时，通过相应的
            android/ios api可以获取此数据*/
          // var data = ShareInstall.parseUrlParams(); //shareinstall.js中提供的工具函数，解析url中的所有查询参数
          // 原来 'toutiaoTask'
          var data = {};
          data.channelCode = params.appqid;
          data.channel = params.appqid;
          data.qid = params.appqid;
          data.type = 3;
          data.connectType = 'dftt';
          data.packageName = envObj.packageName;
          data.connectId = params.accid;
          shareInstall = new ShareInstall({
              /*appKey必选参数，shareinstall平台为每个应用分配的ID*/
              appKey: envObj.appkey,
              /*可选参数，自定义android平台的apk下载文件名，只有apk在shareinstall托管时才有效；个别andriod
                浏览器下载时，中文文件名显示乱码，请慎用中文文件名！*/
              // apkFileName: "OpenInstallDemo-v1.1.0.apk",
              /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价*/
              preferWakeup: true,
              /*shareinstall初始化完成的回调函数，可选*/
              onready: function() {
                  //shareinstall已成功回调，清除定时器
                  // clearTimeout(timer);
                  // timer = null;
                  // this.wakeupOrInstall();
                  // scope.downloadApp(3);
                  // var m = this;
                  // $downloadButton.children('.btn-active').click(function() {
                  //     if ($(this).text() === '开始任务') {
                  //         alert('111')
                  //         m.wakeupOrInstall();
                  //         console.log('wakeupOrInstall');
                  //     }
                  // });
              }
          }, data);
      },
      getUrlNoParams: function() {
          var locaUrl = window.location.href,
              endIndex = 0;
          if (locaUrl.indexOf('?') > -1) {
              endIndex = locaUrl.indexOf('?');
              return locaUrl.substring(0, endIndex);
          }
          return locaUrl;
      },
      setCookie: function(name, value, expires) {
          var expTimes = expires
              ? Number(expires) * 60 * 60 * 1000
              : 24 * 60 * 60 * 1000; // 毫秒
          var expDate = new Date();
          expDate.setTime(expDate.getTime() + expTimes);
          var expString = '; expires=' + expDate.toUTCString();
          document.cookie = name + '=' + encodeURI(value) + expString;
      },
      /**
       * 读cookie
       * @param name
       */
      getCookie: function(name) {
          var cookieStr = '; ' + document.cookie + '; ';
          var index = cookieStr.indexOf('; ' + name + '=');
          if (index !== -1) {
              var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
              return decodeURI(s.substring(0, s.indexOf('; ')));
          } else {
              return null;
          }
      },
      /**
       * 删除cookie
       * @param name
       */
      delCookie: function(name) {
          var exp = new Date(new Date().getTime() - 1);
          var s = this.get(name);
          if (s !== null) {
              document.cookie = name + '=' + s + '; expires=' + exp.toUTCString();
          }
      }
  }
  $(function() {
      FastClick.attach(document.body);
      var app = new APP();
      app.init();
  })
}())
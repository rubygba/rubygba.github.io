! function () {
  function set(str, value) {
    for (var p, cur = VARS.source, ps = str.split("."), ks = [], fns = "", i = 0, len = ps.length; len > i; i++) p = ps[i], cur = cur[p], ks.push('["' + ps[i] + '"]');
    fns = "VARS.source" + ks.join("") + '="' + value + '"', eval("(" + fns + ")")
  }

  function get(a) {
    for (var t = VARS.source, e = a.split("."), i = 0, n = e.length; n > i; i++)
      if (t = t[e[i]], void 0 === t) return;
    return t
  }
  for (var VARS = {
      prefix: "$",
      keys: ["SYS", "ROOM", "PAGE", "COLLIGATE"],
      source: {},
      scope: window
    }, i = 0; i < VARS.keys.length; i++) {
    var key = VARS.keys[i],
      fkey = VARS.prefix + key,
      obj = VARS.scope[fkey];
    obj && (VARS.source[key.toLowerCase()] = obj)
  }
  define("douyu/context", ["shark/util/cookie/1.0"], function (a) {
    location.host;
    a.config("keypre", get("sys.cookie_pre") || "");
    var t = {
      set: set,
      get: get
    };
    return t
  })
}(), shark.config({
    resolve: function (a) {
      if (shark.helper.file.isAbsolute(a)) return !1;
      var t = a.split("/"),
        e = t[0],
        i = shark.helper.file.isCss(a) ? "css/" : "js/";
      switch (e) {
        case "douyu":
          a = "app/douyu/" + i + t.slice(1).join("/");
          break;
        case "douyu-activity":
          a = "app/douyu/activity/" + i + t.slice(1).join("/")
      }
      return a
    },
    baseUrl: $SYS.web_url ? $SYS.web_url : ""
  }), shark.on("createNode", function (a, t) {
    var e, i = shark.helper.file,
      n = "2.0.194";
    e = t.url, i.isCss(e) ? e.indexOf("?") > 0 ? a.href = e + "&" + n : a.href = e + "?" + n : e.indexOf("?") > 0 ? a.src = e + "&" + n : a.src = e + "?" + n
  }), shark.on("saved", function (a) {
    var t = new RegExp("^douyu//*");
    t.test(a.id) && shark.helper.domReady(function () {
      define([a.id], function (a) {
        a && "function" == typeof a.application && a.application.call(a)
      })
    })
  }),
  function (a) {
    "function" == typeof define && define.fmd ? define("douyu/com/mcustomscrollbar", ["jquery", "douyu/com/mousewheel"], a) : "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
  }(function (a, t) {
    ! function () {
      var t, e = "mCustomScrollbar",
        i = "mCS",
        n = ".mCustomScrollbar",
        s = {
          setTop: 0,
          setLeft: 0,
          axis: "y",
          scrollbarPosition: "inside",
          scrollInertia: 950,
          autoDraggerLength: !0,
          alwaysShowScrollbar: 0,
          snapOffset: 0,
          mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
          },
          scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
          },
          keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
          },
          contentTouchScroll: 25,
          documentTouchScroll: !0,
          advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 600
          },
          theme: "light",
          callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
          }
        },
        o = 0,
        r = {},
        l = window.attachEvent && !window.addEventListener ? 1 : 0,
        d = !1,
        c = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
        u = {
          init: function (t) {
            var t = a.extend(!0, {}, s, t),
              e = p.call(this);
            if (t.live) {
              var l = t.liveSelector || this.selector || n,
                d = a(l);
              if ("off" === t.live) return void m(l);
              r[l] = setTimeout(function () {
                d.mCustomScrollbar(t), "once" === t.live && d.length && m(l)
              }, 500)
            } else m(l);
            return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : v(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
              enable: !0,
              scrollAmount: "auto",
              axis: "y",
              preventDefault: !1,
              deltaFactor: "auto",
              normalizeDelta: !1,
              invert: !1
            }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = f(t.scrollButtons.scrollType), h(t), a(e).each(function () {
              var e = a(this);
              if (!e.data(i)) {
                e.data(i, {
                  idx: ++o,
                  opt: t,
                  scrollRatio: {
                    y: null,
                    x: null
                  },
                  overflowed: null,
                  contentReset: {
                    y: null,
                    x: null
                  },
                  bindEvents: !1,
                  tweenRunning: !1,
                  sequential: {},
                  langDir: e.css("direction"),
                  cbOffsets: null,
                  trigger: null,
                  poll: {
                    size: {
                      o: 0,
                      n: 0
                    },
                    img: {
                      o: 0,
                      n: 0
                    },
                    change: {
                      o: 0,
                      n: 0
                    }
                  }
                });
                var n = e.data(i),
                  s = n.opt,
                  r = e.data("mcs-axis"),
                  l = e.data("mcs-scrollbar-position"),
                  d = e.data("mcs-theme");
                r && (s.axis = r), l && (s.scrollbarPosition = l), d && (s.theme = d, h(s)), g.call(this), n && s.callbacks.onCreate && "function" == typeof s.callbacks.onCreate && s.callbacks.onCreate.call(this), a("#mCSB_" + n.idx + "_container img:not(." + c[2] + ")").addClass(c[2]), u.update.call(null, e)
              }
            })
          },
          update: function (t, e) {
            var n = t || p.call(this);
            return a(n).each(function () {
              var t = a(this);
              if (t.data(i)) {
                var n = t.data(i),
                  s = n.opt,
                  o = a("#mCSB_" + n.idx + "_container"),
                  r = a("#mCSB_" + n.idx),
                  l = [a("#mCSB_" + n.idx + "_dragger_vertical"), a("#mCSB_" + n.idx + "_dragger_horizontal")];
                if (!o.length) return;
                n.tweenRunning && G(t), e && n && s.callbacks.onBeforeUpdate && "function" == typeof s.callbacks.onBeforeUpdate && s.callbacks.onBeforeUpdate.call(this), t.hasClass(c[3]) && t.removeClass(c[3]), t.hasClass(c[4]) && t.removeClass(c[4]), r.css("max-height", "none"), r.height() !== t.height() && r.css("max-height", t.height()), w.call(this), "y" === s.axis || s.advanced.autoExpandHorizontalScroll || o.css("width", b(o)), n.overflowed = y.call(this), B.call(this), s.autoDraggerLength && _.call(this), k.call(this), T.call(this);
                var d = [Math.abs(o[0].offsetTop), Math.abs(o[0].offsetLeft)];
                "x" !== s.axis && (n.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (N(t, d[0].toString(), {
                  dir: "y",
                  dur: 0,
                  overwrite: "none"
                }), n.contentReset.y = null) : (S.call(this), "y" === s.axis ? D.call(this) : "yx" === s.axis && n.overflowed[1] && N(t, d[1].toString(), {
                  dir: "x",
                  dur: 0,
                  overwrite: "none"
                }))), "y" !== s.axis && (n.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (N(t, d[1].toString(), {
                  dir: "x",
                  dur: 0,
                  overwrite: "none"
                }), n.contentReset.x = null) : (S.call(this), "x" === s.axis ? D.call(this) : "yx" === s.axis && n.overflowed[0] && N(t, d[0].toString(), {
                  dir: "y",
                  dur: 0,
                  overwrite: "none"
                }))), e && n && (2 === e && s.callbacks.onImageLoad && "function" == typeof s.callbacks.onImageLoad ? s.callbacks.onImageLoad.call(this) : 3 === e && s.callbacks.onSelectorChange && "function" == typeof s.callbacks.onSelectorChange ? s.callbacks.onSelectorChange.call(this) : s.callbacks.onUpdate && "function" == typeof s.callbacks.onUpdate && s.callbacks.onUpdate.call(this)), J.call(this)
              }
            })
          },
          scrollTo: function (t, e) {
            if ("undefined" != typeof t && null != t) {
              var n = p.call(this);
              return a(n).each(function () {
                var n = a(this);
                if (n.data(i)) {
                  var s = n.data(i),
                    o = s.opt,
                    r = {
                      trigger: "external",
                      scrollInertia: o.scrollInertia,
                      scrollEasing: "mcsEaseInOut",
                      moveDragger: !1,
                      timeout: 60,
                      callbacks: !0,
                      onStart: !0,
                      onUpdate: !0,
                      onComplete: !0
                    },
                    l = a.extend(!0, {}, r, e),
                    d = q.call(this, t),
                    c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                  d[0] = Z.call(this, d[0], "y"), d[1] = Z.call(this, d[1], "x"), l.moveDragger && (d[0] *= s.scrollRatio.y, d[1] *= s.scrollRatio.x), l.dur = na() ? 0 : c, setTimeout(function () {
                    null !== d[0] && "undefined" != typeof d[0] && "x" !== o.axis && s.overflowed[0] && (l.dir = "y", l.overwrite = "all", N(n, d[0].toString(), l)), null !== d[1] && "undefined" != typeof d[1] && "y" !== o.axis && s.overflowed[1] && (l.dir = "x", l.overwrite = "none", N(n, d[1].toString(), l))
                  }, l.timeout)
                }
              })
            }
          },
          stop: function () {
            var t = p.call(this);
            return a(t).each(function () {
              var t = a(this);
              t.data(i) && G(t)
            })
          },
          disable: function (t) {
            var e = p.call(this);
            return a(e).each(function () {
              var e = a(this);
              if (e.data(i)) {
                e.data(i);
                J.call(this, "remove"), D.call(this), t && S.call(this), B.call(this, !0), e.addClass(c[3])
              }
            })
          },
          destroy: function () {
            var t = p.call(this);
            return a(t).each(function () {
              var n = a(this);
              if (n.data(i)) {
                var s = n.data(i),
                  o = s.opt,
                  r = a("#mCSB_" + s.idx),
                  l = a("#mCSB_" + s.idx + "_container"),
                  d = a(".mCSB_" + s.idx + "_scrollbar");
                o.live && m(o.liveSelector || a(t).selector), J.call(this, "remove"), D.call(this), S.call(this), n.removeData(i), Q(this, "mcs"), d.remove(), l.find("img." + c[2]).removeClass(c[2]), r.replaceWith(l.contents()), n.removeClass(e + " _" + i + "_" + s.idx + " " + c[6] + " " + c[7] + " " + c[5] + " " + c[3]).addClass(c[4])
              }
            })
          }
        },
        p = function () {
          return "object" != typeof a(this) || a(this).length < 1 ? n : this
        },
        h = function (t) {
          var e = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
            i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
            n = ["minimal", "minimal-dark"],
            s = ["minimal", "minimal-dark"],
            o = ["minimal", "minimal-dark"];
          t.autoDraggerLength = a.inArray(t.theme, e) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = a.inArray(t.theme, i) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = a.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = a.inArray(t.theme, s) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = a.inArray(t.theme, o) > -1 ? "outside" : t.scrollbarPosition
        },
        m = function (a) {
          r[a] && (clearTimeout(r[a]), Q(r, a))
        },
        v = function (a) {
          return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
        },
        f = function (a) {
          return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
        },
        g = function () {
          var t = a(this),
            n = t.data(i),
            s = n.opt,
            o = s.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
            r = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_vertical" + o + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + s.theme + " mCSB_scrollTools_horizontal" + o + "'><div class='" + c[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
            l = "yx" === s.axis ? "mCSB_vertical_horizontal" : "x" === s.axis ? "mCSB_horizontal" : "mCSB_vertical",
            d = "yx" === s.axis ? r[0] + r[1] : "x" === s.axis ? r[1] : r[0],
            u = "yx" === s.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
            p = s.autoHideScrollbar ? " " + c[6] : "",
            h = "x" !== s.axis && "rtl" === n.langDir ? " " + c[7] : "";
          s.setWidth && t.css("width", s.setWidth), s.setHeight && t.css("height", s.setHeight), s.setLeft = "y" !== s.axis && "rtl" === n.langDir ? "989999px" : s.setLeft, t.addClass(e + " _" + i + "_" + n.idx + p + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + s.theme + " " + l + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + s.setTop + "; left:" + s.setLeft + ";' dir='" + n.langDir + "' /></div>");
          var m = a("#mCSB_" + n.idx),
            v = a("#mCSB_" + n.idx + "_container");
          "y" === s.axis || s.advanced.autoExpandHorizontalScroll || v.css("width", b(v)), "outside" === s.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(d)) : (m.addClass("mCSB_inside").append(d), v.wrap(u)), x.call(this);
          var f = [a("#mCSB_" + n.idx + "_dragger_vertical"), a("#mCSB_" + n.idx + "_dragger_horizontal")];
          f[0].css("min-height", f[0].height()), f[1].css("min-width", f[1].width())
        },
        b = function (t) {
          var e = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
              return a(this).outerWidth(!0)
            }).get())],
            i = t.parent().width();
          return e[0] > i ? e[0] : e[1] > i ? e[1] : "100%"
        },
        w = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = a("#mCSB_" + e.idx + "_container");
          if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
            s.css({
              width: "auto",
              "min-width": 0,
              "overflow-x": "scroll"
            });
            var o = Math.ceil(s[0].scrollWidth);
            3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && o > s.parent().width() ? s.css({
              width: o,
              "min-width": "100%",
              "overflow-x": "inherit"
            }) : s.css({
              "overflow-x": "inherit",
              position: "absolute"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
              width: Math.ceil(s[0].getBoundingClientRect().right + .4) - Math.floor(s[0].getBoundingClientRect().left),
              "min-width": "100%",
              position: "relative"
            }).unwrap()
          }
        },
        x = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = a(".mCSB_" + e.idx + "_scrollbar:first"),
            o = ea(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
            r = ["<a href='#' class='" + c[13] + "' " + o + " />", "<a href='#' class='" + c[14] + "' " + o + " />", "<a href='#' class='" + c[15] + "' " + o + " />", "<a href='#' class='" + c[16] + "' " + o + " />"],
            l = ["x" === n.axis ? r[2] : r[0], "x" === n.axis ? r[3] : r[1], r[2], r[3]];
          n.scrollButtons.enable && s.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
        },
        _ = function () {
          var t = a(this),
            e = t.data(i),
            n = a("#mCSB_" + e.idx),
            s = a("#mCSB_" + e.idx + "_container"),
            o = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")],
            r = [n.height() / s.outerHeight(!1), n.width() / s.outerWidth(!1)],
            d = [parseInt(o[0].css("min-height")), Math.round(r[0] * o[0].parent().height()), parseInt(o[1].css("min-width")), Math.round(r[1] * o[1].parent().width())],
            c = l && d[1] < d[0] ? d[0] : d[1],
            u = l && d[3] < d[2] ? d[2] : d[3];
          o[0].css({
            height: c,
            "max-height": o[0].parent().height() - 10
          }).find(".mCSB_dragger_bar").css({
            "line-height": d[0] + "px"
          }), o[1].css({
            width: u,
            "max-width": o[1].parent().width() - 10
          })
        },
        k = function () {
          var t = a(this),
            e = t.data(i),
            n = a("#mCSB_" + e.idx),
            s = a("#mCSB_" + e.idx + "_container"),
            o = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")],
            r = [s.outerHeight(!1) - n.height(), s.outerWidth(!1) - n.width()],
            l = [r[0] / (o[0].parent().height() - o[0].height()), r[1] / (o[1].parent().width() - o[1].width())];
          e.scrollRatio = {
            y: l[0],
            x: l[1]
          }
        },
        C = function (a, t, e) {
          var i = e ? c[0] + "_expanded" : "",
            n = a.closest(".mCSB_scrollTools");
          "active" === t ? (a.toggleClass(c[0] + " " + i), n.toggleClass(c[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === t ? (a.removeClass(c[0]), n.removeClass(c[1])) : (a.addClass(c[0]), n.addClass(c[1])))
        },
        y = function () {
          var t = a(this),
            e = t.data(i),
            n = a("#mCSB_" + e.idx),
            s = a("#mCSB_" + e.idx + "_container"),
            o = null == e.overflowed ? s.height() : s.outerHeight(!1),
            r = null == e.overflowed ? s.width() : s.outerWidth(!1),
            l = s[0].scrollHeight,
            d = s[0].scrollWidth;
          return l > o && (o = l), d > r && (r = d), [o > n.height(), r > n.width()]
        },
        S = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = a("#mCSB_" + e.idx),
            o = a("#mCSB_" + e.idx + "_container"),
            r = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
          if (G(t), ("x" !== n.axis && !e.overflowed[0] || "y" === n.axis && e.overflowed[0]) && (r[0].add(o).css("top", 0), N(t, "_resetY")), "y" !== n.axis && !e.overflowed[1] || "x" === n.axis && e.overflowed[1]) {
            var l = dx = 0;
            "rtl" === e.langDir && (l = s.width() - o.outerWidth(!1), dx = Math.abs(l / e.scrollRatio.x)), o.css("left", l), r[1].css("left", dx), N(t, "_resetX")
          }
        },
        T = function () {
          function t() {
            o = setTimeout(function () {
              a.event.special.mousewheel ? (clearTimeout(o), I.call(e[0])) : t()
            }, 100)
          }
          var e = a(this),
            n = e.data(i),
            s = n.opt;
          if (!n.bindEvents) {
            if (M.call(this), s.contentTouchScroll && R.call(this), H.call(this), s.mouseWheel.enable) {
              var o;
              t()
            }
            E.call(this), U.call(this), s.advanced.autoScrollOnFocus && O.call(this), s.scrollButtons.enable && W.call(this), s.keyboard.enable && X.call(this), n.bindEvents = !0
          }
        },
        D = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = i + "_" + e.idx,
            o = ".mCSB_" + e.idx + "_scrollbar",
            r = a("#mCSB_" + e.idx + ",#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper," + o + " ." + c[12] + ",#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal," + o + ">a"),
            l = a("#mCSB_" + e.idx + "_container");
          n.advanced.releaseDraggableSelectors && r.add(a(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && r.add(a(n.advanced.extraDraggableSelectors)), e.bindEvents && (a(document).add(a(!L() || top.document)).unbind("." + s), r.each(function () {
            a(this).unbind("." + s)
          }), clearTimeout(t[0]._focusTimeout), Q(t[0], "_focusTimeout"), clearTimeout(e.sequential.step), Q(e.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Q(l[0], "onCompleteTimeout"), e.bindEvents = !1)
        },
        B = function (t) {
          var e = a(this),
            n = e.data(i),
            s = n.opt,
            o = a("#mCSB_" + n.idx + "_container_wrapper"),
            r = o.length ? o : a("#mCSB_" + n.idx + "_container"),
            l = [a("#mCSB_" + n.idx + "_scrollbar_vertical"), a("#mCSB_" + n.idx + "_scrollbar_horizontal")],
            d = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
          "x" !== s.axis && (n.overflowed[0] && !t ? (l[0].add(d[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(c[8] + " " + c[10])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && d[0].css("display", "none"), r.removeClass(c[10])) : (l[0].css("display", "none"), r.addClass(c[10])), r.addClass(c[8]))), "y" !== s.axis && (n.overflowed[1] && !t ? (l[1].add(d[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(c[9] + " " + c[11])) : (s.alwaysShowScrollbar ? (2 !== s.alwaysShowScrollbar && d[1].css("display", "none"), r.removeClass(c[11])) : (l[1].css("display", "none"), r.addClass(c[11])), r.addClass(c[9]))), n.overflowed[0] || n.overflowed[1] ? e.removeClass(c[5]) : e.addClass(c[5])
        },
        j = function (t) {
          var e = t.type,
            i = t.target.ownerDocument !== document && null !== frameElement ? [a(frameElement).offset().top, a(frameElement).offset().left] : null,
            n = L() && t.target.ownerDocument !== top.document && null !== frameElement ? [a(t.view.frameElement).offset().top, a(t.view.frameElement).offset().left] : [0, 0];
          switch (e) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
              return i ? [t.originalEvent.pageY - i[0] + n[0], t.originalEvent.pageX - i[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
              var s = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                o = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
              return t.target.ownerDocument !== document ? [s.screenY, s.screenX, o > 1] : [s.pageY, s.pageX, o > 1];
            default:
              return i ? [t.pageY - i[0] + n[0], t.pageX - i[1] + n[1], !1] : [t.pageY, t.pageX, !1]
          }
        },
        M = function () {
          function t(a, t, i, n) {
            if (h[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, e.attr("id") === p[1]) var s = "x",
              l = (e[0].offsetLeft - t + n) * r.scrollRatio.x;
            else var s = "y",
              l = (e[0].offsetTop - a + i) * r.scrollRatio.y;
            N(o, l.toString(), {
              dir: s,
              drag: !0
            })
          }
          var e, n, s, o = a(this),
            r = o.data(i),
            c = r.opt,
            u = i + "_" + r.idx,
            p = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"],
            h = a("#mCSB_" + r.idx + "_container"),
            m = a("#" + p[0] + ",#" + p[1]),
            v = c.advanced.releaseDraggableSelectors ? m.add(a(c.advanced.releaseDraggableSelectors)) : m,
            f = c.advanced.extraDraggableSelectors ? a(!L() || top.document).add(a(c.advanced.extraDraggableSelectors)) : a(!L() || top.document);
          m.bind("contextmenu." + u, function (a) {
            a.preventDefault()
          }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
            if (t.stopImmediatePropagation(), t.preventDefault(), aa(t)) {
              d = !0, l && (document.onselectstart = function () {
                return !1
              }), A.call(h, !1), G(o), e = a(this);
              var i = e.offset(),
                r = j(t)[0] - i.top,
                u = j(t)[1] - i.left,
                p = e.height() + i.top,
                m = e.width() + i.left;
              p > r && r > 0 && m > u && u > 0 && (n = r, s = u), C(e, "active", c.autoExpandScrollbar)
            }
          }).bind("touchmove." + u, function (a) {
            a.stopImmediatePropagation(), a.preventDefault();
            var i = e.offset(),
              o = j(a)[0] - i.top,
              r = j(a)[1] - i.left;
            t(n, s, o, r)
          }), a(document).add(f).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (a) {
            if (e) {
              var i = e.offset(),
                o = j(a)[0] - i.top,
                r = j(a)[1] - i.left;
              if (n === o && s === r) return;
              t(n, s, o, r)
            }
          }).add(v).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function (a) {
            e && (C(e, "active", c.autoExpandScrollbar), e = null), d = !1, l && (document.onselectstart = null), A.call(h, !0)
          })
        },
        R = function () {
          function e(a) {
            if (!ta(a) || d || j(a)[2]) return void(t = 0);
            t = 1, k = 0, C = 0, c = 1, y.removeClass("mCS_touch_action");
            var e = M.offset();
            u = j(a)[0] - e.top, p = j(a)[1] - e.left, z = [j(a)[0], j(a)[1]]
          }

          function n(a) {
            if (ta(a) && !d && !j(a)[2] && (T.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!C || k) && c)) {
              f = V();
              var t = B.offset(),
                e = j(a)[0] - t.top,
                i = j(a)[1] - t.left,
                n = "mcsLinearOut";
              if (H.push(e), I.push(i), z[2] = Math.abs(j(a)[0] - z[0]), z[3] = Math.abs(j(a)[1] - z[1]), S.overflowed[0]) var s = R[0].parent().height() - R[0].height(),
                o = u - e > 0 && e - u > -(s * S.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
              if (S.overflowed[1]) var r = R[1].parent().width() - R[1].width(),
                h = p - i > 0 && i - p > -(r * S.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
              o || h ? (U || a.preventDefault(), k = 1) : (C = 1, y.addClass("mCS_touch_action")), U && a.preventDefault(), x = "yx" === T.axis ? [u - e, p - i] : "x" === T.axis ? [null, p - i] : [u - e, null], M[0].idleTimer = 250, S.overflowed[0] && l(x[0], P, n, "y", "all", !0), S.overflowed[1] && l(x[1], P, n, "x", A, !0)
            }
          }

          function s(a) {
            if (!ta(a) || d || j(a)[2]) return void(t = 0);
            t = 1, a.stopImmediatePropagation(), G(y), v = V();
            var e = B.offset();
            h = j(a)[0] - e.top, m = j(a)[1] - e.left, H = [], I = []
          }

          function o(a) {
            if (ta(a) && !d && !j(a)[2]) {
              c = 0, a.stopImmediatePropagation(), k = 0, C = 0, g = V();
              var t = B.offset(),
                e = j(a)[0] - t.top,
                i = j(a)[1] - t.left;
              if (!(g - f > 30)) {
                w = 1e3 / (g - v);
                var n = "mcsEaseOut",
                  s = 2.5 > w,
                  o = s ? [H[H.length - 2], I[I.length - 2]] : [0, 0];
                b = s ? [e - o[0], i - o[1]] : [e - h, i - m];
                var u = [Math.abs(b[0]), Math.abs(b[1])];
                w = s ? [Math.abs(b[0] / 4), Math.abs(b[1] / 4)] : [w, w];
                var p = [Math.abs(M[0].offsetTop) - b[0] * r(u[0] / w[0], w[0]), Math.abs(M[0].offsetLeft) - b[1] * r(u[1] / w[1], w[1])];
                x = "yx" === T.axis ? [p[0], p[1]] : "x" === T.axis ? [null, p[1]] : [p[0], null], _ = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                var y = parseInt(T.contentTouchScroll) || 0;
                x[0] = u[0] > y ? x[0] : 0, x[1] = u[1] > y ? x[1] : 0, S.overflowed[0] && l(x[0], _[0], n, "y", A, !1), S.overflowed[1] && l(x[1], _[1], n, "x", A, !1)
              }
            }
          }

          function r(a, t) {
            var e = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return a > 90 ? t > 4 ? e[0] : e[3] : a > 60 ? t > 3 ? e[3] : e[2] : a > 30 ? t > 8 ? e[1] : t > 6 ? e[0] : t > 4 ? t : e[2] : t > 8 ? t : e[3]
          }

          function l(a, t, e, i, n, s) {
            a && N(y, a.toString(), {
              dur: t,
              scrollEasing: e,
              dir: i,
              overwrite: n,
              drag: s
            })
          }
          var c, u, p, h, m, v, f, g, b, w, x, _, k, C, y = a(this),
            S = y.data(i),
            T = S.opt,
            D = i + "_" + S.idx,
            B = a("#mCSB_" + S.idx),
            M = a("#mCSB_" + S.idx + "_container"),
            R = [a("#mCSB_" + S.idx + "_dragger_vertical"), a("#mCSB_" + S.idx + "_dragger_horizontal")],
            H = [],
            I = [],
            P = 0,
            A = "yx" === T.axis ? "none" : "all",
            z = [],
            E = M.find("iframe"),
            O = ["touchstart." + D + " pointerdown." + D + " MSPointerDown." + D, "touchmove." + D + " pointermove." + D + " MSPointerMove." + D, "touchend." + D + " pointerup." + D + " MSPointerUp." + D],
            U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
          M.bind(O[0], function (a) {
            e(a)
          }).bind(O[1], function (a) {
            n(a)
          }), B.bind(O[0], function (a) {
            s(a)
          }).bind(O[2], function (a) {
            o(a)
          }), E.length && E.each(function () {
            a(this).bind("load", function () {
              L(this) && a(this.contentDocument || this.contentWindow.document).bind(O[0], function (a) {
                e(a), s(a)
              }).bind(O[1], function (a) {
                n(a)
              }).bind(O[2], function (a) {
                o(a)
              })
            })
          })
        },
        H = function () {
          function e() {
            return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
          }

          function n(a, t, e) {
            c.type = e && s ? "stepped" : "stepless", c.scrollAmount = 10, $(o, a, t, "mcsLinearOut", e ? 60 : null)
          }
          var s, o = a(this),
            r = o.data(i),
            l = r.opt,
            c = r.sequential,
            u = i + "_" + r.idx,
            p = a("#mCSB_" + r.idx + "_container"),
            h = p.parent();
          p.bind("mousedown." + u, function (a) {
            t || s || (s = 1, d = !0)
          }).add(document).bind("mousemove." + u, function (a) {
            if (!t && s && e()) {
              var i = p.offset(),
                o = j(a)[0] - i.top + p[0].offsetTop,
                d = j(a)[1] - i.left + p[0].offsetLeft;
              o > 0 && o < h.height() && d > 0 && d < h.width() ? c.step && n("off", null, "stepped") : ("x" !== l.axis && r.overflowed[0] && (0 > o ? n("on", 38) : o > h.height() && n("on", 40)), "y" !== l.axis && r.overflowed[1] && (0 > d ? n("on", 37) : d > h.width() && n("on", 39)))
            }
          }).bind("mouseup." + u + " dragend." + u, function (a) {
            t || (s && (s = 0, n("off", null)), d = !1)
          })
        },
        I = function () {
          function t(t, i) {
            if (G(e), !z(e, t.target)) {
              var o = "auto" !== s.mouseWheel.deltaFactor ? parseInt(s.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                c = s.scrollInertia;
              if ("x" === s.axis || "x" === s.mouseWheel.axis) var u = "x",
                p = [Math.round(o * n.scrollRatio.x), parseInt(s.mouseWheel.scrollAmount)],
                h = "auto" !== s.mouseWheel.scrollAmount ? p[1] : p[0] >= r.width() ? .9 * r.width() : p[0],
                m = Math.abs(a("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                v = d[1][0].offsetLeft,
                f = d[1].parent().width() - d[1].width(),
                g = "y" === s.mouseWheel.axis ? t.deltaY || i : t.deltaX;
              else var u = "y",
                p = [Math.round(o * n.scrollRatio.y), parseInt(s.mouseWheel.scrollAmount)],
                h = "auto" !== s.mouseWheel.scrollAmount ? p[1] : p[0] >= r.height() ? .9 * r.height() : p[0],
                m = Math.abs(a("#mCSB_" + n.idx + "_container")[0].offsetTop),
                v = d[0][0].offsetTop,
                f = d[0].parent().height() - d[0].height(),
                g = t.deltaY || i;
              "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((s.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), s.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== v || 0 > g && v !== f || s.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !s.mouseWheel.normalizeDelta && (h = t.deltaFactor, c = 17), N(e, (m - g * h).toString(), {
                dir: u,
                dur: c
              }))
            }
          }
          if (a(this).data(i)) {
            var e = a(this),
              n = e.data(i),
              s = n.opt,
              o = i + "_" + n.idx,
              r = a("#mCSB_" + n.idx),
              d = [a("#mCSB_" + n.idx + "_dragger_vertical"), a("#mCSB_" + n.idx + "_dragger_horizontal")],
              c = a("#mCSB_" + n.idx + "_container").find("iframe");
            c.length && c.each(function () {
              a(this).bind("load", function () {
                L(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + o, function (a, e) {
                  t(a, e)
                })
              })
            }), r.bind("mousewheel." + o, function (a, e) {
              t(a, e)
            })
          }
        },
        P = new Object,
        L = function (t) {
          var e = !1,
            i = !1,
            n = null;
          if (void 0 === t ? i = "#empty" : void 0 !== a(t).attr("id") && (i = a(t).attr("id")), i !== !1 && void 0 !== P[i]) return P[i];
          if (t) {
            try {
              var s = t.contentDocument || t.contentWindow.document;
              n = s.body.innerHTML
            } catch (o) {}
            e = null !== n
          } else {
            try {
              var s = top.document;
              n = s.body.innerHTML
            } catch (o) {}
            e = null !== n
          }
          return i !== !1 && (P[i] = e), e
        },
        A = function (a) {
          var t = this.find("iframe");
          if (t.length) {
            var e = a ? "auto" : "none";
            t.css("pointer-events", e)
          }
        },
        z = function (t, e) {
          var n = e.nodeName.toLowerCase(),
            s = t.data(i).opt.mouseWheel.disableOver,
            o = ["select", "textarea"];
          return a.inArray(n, s) > -1 && !(a.inArray(n, o) > -1 && !a(e).is(":focus"))
        },
        E = function () {
          var t, e = a(this),
            n = e.data(i),
            s = i + "_" + n.idx,
            o = a("#mCSB_" + n.idx + "_container"),
            r = o.parent(),
            l = a(".mCSB_" + n.idx + "_scrollbar ." + c[12]);
          l.bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s, function (e) {
            d = !0, a(e.target).hasClass("mCSB_dragger") || (t = 1)
          }).bind("touchend." + s + " pointerup." + s + " MSPointerUp." + s, function (a) {
            d = !1
          }).bind("click." + s, function (i) {
            if (t && (t = 0, a(i.target).hasClass(c[12]) || a(i.target).hasClass("mCSB_draggerRail"))) {
              G(e);
              var s = a(this),
                l = s.find(".mCSB_dragger");
              if (s.parent(".mCSB_scrollTools_horizontal").length > 0) {
                if (!n.overflowed[1]) return;
                var d = "x",
                  u = i.pageX > l.offset().left ? -1 : 1,
                  p = Math.abs(o[0].offsetLeft) - u * (.9 * r.width())
              } else {
                if (!n.overflowed[0]) return;
                var d = "y",
                  u = i.pageY > l.offset().top ? -1 : 1,
                  p = Math.abs(o[0].offsetTop) - u * (.9 * r.height())
              }
              N(e, p.toString(), {
                dir: d,
                scrollEasing: "mcsEaseInOut"
              })
            }
          })
        },
        O = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = i + "_" + e.idx,
            o = a("#mCSB_" + e.idx + "_container"),
            r = o.parent();
          o.bind("focusin." + s, function (e) {
            var i = a(document.activeElement),
              s = o.find(".mCustomScrollBox").length,
              l = 0;
            i.is(n.advanced.autoScrollOnFocus) && (G(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = s ? (l + 17) * s : 0, t[0]._focusTimeout = setTimeout(function () {
              var a = [ia(i)[0], ia(i)[1]],
                e = [o[0].offsetTop, o[0].offsetLeft],
                s = [e[0] + a[0] >= 0 && e[0] + a[0] < r.height() - i.outerHeight(!1), e[1] + a[1] >= 0 && e[0] + a[1] < r.width() - i.outerWidth(!1)],
                d = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
              "x" === n.axis || s[0] || N(t, a[0].toString(), {
                dir: "y",
                scrollEasing: "mcsEaseInOut",
                overwrite: d,
                dur: l
              }), "y" === n.axis || s[1] || N(t, a[1].toString(), {
                dir: "x",
                scrollEasing: "mcsEaseInOut",
                overwrite: d,
                dur: l
              })
            }, t[0]._focusTimer))
          })
        },
        U = function () {
          var t = a(this),
            e = t.data(i),
            n = i + "_" + e.idx,
            s = a("#mCSB_" + e.idx + "_container").parent();
          s.bind("scroll." + n, function (t) {
            0 === s.scrollTop() && 0 === s.scrollLeft() || a(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
          })
        },
        W = function () {
          var t = a(this),
            e = t.data(i),
            n = e.opt,
            s = e.sequential,
            o = i + "_" + e.idx,
            r = ".mCSB_" + e.idx + "_scrollbar",
            l = a(r + ">a");
          l.bind("contextmenu." + o, function (a) {
            a.preventDefault()
          }).bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o + " mouseup." + o + " touchend." + o + " pointerup." + o + " MSPointerUp." + o + " mouseout." + o + " pointerout." + o + " MSPointerOut." + o + " click." + o, function (i) {
            function o(a, e) {
              s.scrollAmount = n.scrollButtons.scrollAmount, $(t, a, e)
            }
            if (i.preventDefault(), aa(i)) {
              var r = a(this).attr("class");
              switch (s.type = n.scrollButtons.scrollType, i.type) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                  if ("stepped" === s.type) return;
                  d = !0, e.tweenRunning = !1, o("on", r);
                  break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                  if ("stepped" === s.type) return;
                  d = !1, s.dir && o("off", r);
                  break;
                case "click":
                  if ("stepped" !== s.type || e.tweenRunning) return;
                  o("on", r)
              }
            }
          })
        },
        X = function () {
          function t(t) {
            function i(a, t) {
              o.type = s.keyboard.scrollType, o.scrollAmount = s.keyboard.scrollAmount, "stepped" === o.type && n.tweenRunning || $(e, a, t)
            }
            switch (t.type) {
              case "blur":
                n.tweenRunning && o.dir && i("off", null);
                break;
              case "keydown":
              case "keyup":
                var r = t.keyCode ? t.keyCode : t.which,
                  l = "on";
                if ("x" !== s.axis && (38 === r || 40 === r) || "y" !== s.axis && (37 === r || 39 === r)) {
                  if ((38 === r || 40 === r) && !n.overflowed[0] || (37 === r || 39 === r) && !n.overflowed[1]) return;
                  "keyup" === t.type && (l = "off"), a(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), i(l, r))
                } else if (33 === r || 34 === r) {
                  if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                    G(e);
                    var p = 34 === r ? -1 : 1;
                    if ("x" === s.axis || "yx" === s.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                      m = Math.abs(d[0].offsetLeft) - p * (.9 * c.width());
                    else var h = "y",
                      m = Math.abs(d[0].offsetTop) - p * (.9 * c.height());
                    N(e, m.toString(), {
                      dir: h,
                      scrollEasing: "mcsEaseInOut"
                    })
                  }
                } else if ((35 === r || 36 === r) && !a(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                  if ("x" === s.axis || "yx" === s.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                    m = 35 === r ? Math.abs(c.width() - d.outerWidth(!1)) : 0;
                  else var h = "y",
                    m = 35 === r ? Math.abs(c.height() - d.outerHeight(!1)) : 0;
                  N(e, m.toString(), {
                    dir: h,
                    scrollEasing: "mcsEaseInOut"
                  })
                }
            }
          }
          var e = a(this),
            n = e.data(i),
            s = n.opt,
            o = n.sequential,
            r = i + "_" + n.idx,
            l = a("#mCSB_" + n.idx),
            d = a("#mCSB_" + n.idx + "_container"),
            c = d.parent(),
            u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
            p = d.find("iframe"),
            h = ["blur." + r + " keydown." + r + " keyup." + r];
          p.length && p.each(function () {
            a(this).bind("load", function () {
              L(this) && a(this.contentDocument || this.contentWindow.document).bind(h[0], function (a) {
                t(a)
              })
            })
          }), l.attr("tabindex", "0").bind(h[0], function (a) {
            t(a)
          })
        },
        $ = function (t, e, n, s, o) {
          function r(a) {
            u.snapAmount && (p.scrollAmount = u.snapAmount instanceof Array ? "x" === p.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
            var e = "stepped" !== p.type,
              i = o ? o : a ? e ? v / 1.5 : f : 1e3 / 60,
              n = a ? e ? 7.5 : 40 : 2.5,
              l = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
              c = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
              m = "x" === p.dir[0] ? l[1] + p.dir[1] * (c[1] * n) : l[0] + p.dir[1] * (c[0] * n),
              g = "x" === p.dir[0] ? l[1] + p.dir[1] * parseInt(p.scrollAmount) : l[0] + p.dir[1] * parseInt(p.scrollAmount),
              b = "auto" !== p.scrollAmount ? g : m,
              w = s ? s : a ? e ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
              x = !!a;
            return a && 17 > i && (b = "x" === p.dir[0] ? l[1] : l[0]), N(t, b.toString(), {
              dir: p.dir[0],
              scrollEasing: w,
              dur: i,
              onComplete: x
            }), a ? void(p.dir = !1) : (clearTimeout(p.step), void(p.step = setTimeout(function () {
              r()
            }, i)))
          }

          function l() {
            clearTimeout(p.step), Q(p, "step"), G(t)
          }
          var d = t.data(i),
            u = d.opt,
            p = d.sequential,
            h = a("#mCSB_" + d.idx + "_container"),
            m = "stepped" === p.type,
            v = u.scrollInertia < 26 ? 26 : u.scrollInertia,
            f = u.scrollInertia < 1 ? 17 : u.scrollInertia;
          switch (e) {
            case "on":
              if (p.dir = [n === c[16] || n === c[15] || 39 === n || 37 === n ? "x" : "y", n === c[13] || n === c[15] || 38 === n || 37 === n ? -1 : 1], G(t), ea(n) && "stepped" === p.type) return;
              r(m);
              break;
            case "off":
              l(), (m || d.tweenRunning && p.dir) && r(!0)
          }
        },
        q = function (t) {
          var e = a(this).data(i).opt,
            n = [];
          return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === e.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === e.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === e.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n
        },
        Z = function (t, e) {
          if (null != t && "undefined" != typeof t) {
            var n = a(this),
              s = n.data(i),
              o = s.opt,
              r = a("#mCSB_" + s.idx + "_container"),
              l = r.parent(),
              d = typeof t;
            e || (e = "x" === o.axis ? "x" : "y");
            var c = "x" === e ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height(),
              p = "x" === e ? r[0].offsetLeft : r[0].offsetTop,
              h = "x" === e ? "left" : "top";
            switch (d) {
              case "function":
                return t();
              case "object":
                var m = t.jquery ? t : a(t);
                if (!m.length) return;
                return "x" === e ? ia(m)[1] : ia(m)[0];
              case "string":
              case "number":
                if (ea(t)) return Math.abs(t);
                if (-1 !== t.indexOf("%")) return Math.abs(c * parseInt(t) / 100);
                if (-1 !== t.indexOf("-=")) return Math.abs(p - parseInt(t.split("-=")[1]));
                if (-1 !== t.indexOf("+=")) {
                  var v = p + parseInt(t.split("+=")[1]);
                  return v >= 0 ? 0 : Math.abs(v)
                }
                if (-1 !== t.indexOf("px") && ea(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                if ("top" === t || "left" === t) return 0;
                if ("bottom" === t) return Math.abs(l.height() - r.outerHeight(!1));
                if ("right" === t) return Math.abs(l.width() - r.outerWidth(!1));
                if ("first" === t || "last" === t) {
                  var m = r.find(":" + t);
                  return "x" === e ? ia(m)[1] : ia(m)[0]
                }
                return a(t).length ? "x" === e ? ia(a(t))[1] : ia(a(t))[0] : (r.css(h, t), void u.update.call(null, n[0]))
            }
          }
        },
        J = function (t) {
          function e() {
            return clearTimeout(p[0].autoUpdate), 0 === r.parents("html").length ? void(r = null) : void(p[0].autoUpdate = setTimeout(function () {
              return d.advanced.updateOnSelectorChange && (l.poll.change.n = s(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void o(3)) : d.advanced.updateOnContentResize && (l.poll.size.n = r[0].scrollHeight + r[0].scrollWidth + p[0].offsetHeight + r[0].offsetHeight + r[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void o(1)) : !d.advanced.updateOnImageLoad || "auto" === d.advanced.updateOnImageLoad && "y" === d.axis || (l.poll.img.n = p.find("img").length, l.poll.img.n === l.poll.img.o) ? void((d.advanced.updateOnSelectorChange || d.advanced.updateOnContentResize || d.advanced.updateOnImageLoad) && e()) : (l.poll.img.o = l.poll.img.n, void p.find("img").each(function () {
                n(this)
              }))
            }, d.advanced.autoUpdateTimeout))
          }

          function n(t) {
            function e(a, t) {
              return function () {
                return t.apply(a, arguments)
              }
            }

            function i() {
              this.onload = null, a(t).addClass(c[2]), o(2)
            }
            if (a(t).hasClass(c[2])) return void o();
            var n = new Image;
            n.onload = e(n, i), n.src = t.src
          }

          function s() {
            d.advanced.updateOnSelectorChange === !0 && (d.advanced.updateOnSelectorChange = "*");
            var a = 0,
              t = p.find(d.advanced.updateOnSelectorChange);
            return d.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
              a += this.offsetHeight + this.offsetWidth
            }), a
          }

          function o(a) {
            clearTimeout(p[0].autoUpdate), u.update.call(null, r[0], a)
          }
          var r = a(this),
            l = r.data(i),
            d = l.opt,
            p = a("#mCSB_" + l.idx + "_container");
          return t ? (clearTimeout(p[0].autoUpdate), void Q(p[0], "autoUpdate")) : void e()
        },
        F = function (a, t, e) {
          return Math.round(a / t) * t - e
        },
        G = function (t) {
          var e = t.data(i),
            n = a("#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper,#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal");
          n.each(function () {
            K.call(this)
          })
        },
        N = function (t, e, n) {
          function s(a) {
            return l && d.callbacks[a] && "function" == typeof d.callbacks[a]
          }

          function o() {
            return [d.callbacks.alwaysTriggerOffsets || x >= _[0] + y, d.callbacks.alwaysTriggerOffsets || -S >= x]
          }

          function r() {
            var a = [h[0].offsetTop, h[0].offsetLeft],
              e = [b[0].offsetTop, b[0].offsetLeft],
              i = [h.outerHeight(!1), h.outerWidth(!1)],
              s = [p.height(), p.width()];
            t[0].mcs = {
              content: h,
              top: a[0],
              left: a[1],
              draggerTop: e[0],
              draggerLeft: e[1],
              topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(i[0]) - s[0])),
              leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(i[1]) - s[1])),
              direction: n.dir
            }
          }
          var l = t.data(i),
            d = l.opt,
            c = {
              trigger: "internal",
              dir: "y",
              scrollEasing: "mcsEaseOut",
              drag: !1,
              dur: d.scrollInertia,
              overwrite: "all",
              callbacks: !0,
              onStart: !0,
              onUpdate: !0,
              onComplete: !0
            },
            n = a.extend(c, n),
            u = [n.dur, n.drag ? 0 : n.dur],
            p = a("#mCSB_" + l.idx),
            h = a("#mCSB_" + l.idx + "_container"),
            m = h.parent(),
            v = d.callbacks.onTotalScrollOffset ? q.call(t, d.callbacks.onTotalScrollOffset) : [0, 0],
            f = d.callbacks.onTotalScrollBackOffset ? q.call(t, d.callbacks.onTotalScrollBackOffset) : [0, 0];
          if (l.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (a(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== e || l.contentReset.y || (s("onOverflowYNone") && d.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== e || l.contentReset.x || (s("onOverflowXNone") && d.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== e && "_resetX" !== e) {
            if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (s("onOverflowY") && d.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (s("onOverflowX") && d.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), d.snapAmount) {
              var g = d.snapAmount instanceof Array ? "x" === n.dir ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount;
              e = F(e, g, d.snapOffset)
            }
            switch (n.dir) {
              case "x":
                var b = a("#mCSB_" + l.idx + "_dragger_horizontal"),
                  w = "left",
                  x = h[0].offsetLeft,
                  _ = [p.width() - h.outerWidth(!1), b.parent().width() - b.width()],
                  k = [e, 0 === e ? 0 : e / l.scrollRatio.x],
                  y = v[1],
                  S = f[1],
                  T = y > 0 ? y / l.scrollRatio.x : 0,
                  D = S > 0 ? S / l.scrollRatio.x : 0;
                break;
              case "y":
                var b = a("#mCSB_" + l.idx + "_dragger_vertical"),
                  w = "top",
                  x = h[0].offsetTop,
                  _ = [p.height() - h.outerHeight(!1), b.parent().height() - b.height()],
                  k = [e, 0 === e ? 0 : e / l.scrollRatio.y],
                  y = v[0],
                  S = f[0],
                  T = y > 0 ? y / l.scrollRatio.y : 0,
                  D = S > 0 ? S / l.scrollRatio.y : 0
            }
            k[1] < 0 || 0 === k[0] && 0 === k[1] ? k = [0, 0] : k[1] >= _[1] ? k = [_[0], _[1]] : k[0] = -k[0], t[0].mcs || (r(), s("onInit") && d.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), Y(b[0], w, Math.round(k[1]), u[1], n.scrollEasing), !l.tweenRunning && (0 === x && k[0] >= 0 || x === _[0] && k[0] <= _[0]) || Y(h[0], w, Math.round(k[0]), u[0], n.scrollEasing, n.overwrite, {
              onStart: function () {
                n.callbacks && n.onStart && !l.tweenRunning && (s("onScrollStart") && (r(), d.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, C(b), l.cbOffsets = o())
              },
              onUpdate: function () {
                n.callbacks && n.onUpdate && s("whileScrolling") && (r(), d.callbacks.whileScrolling.call(t[0]))
              },
              onComplete: function () {
                if (n.callbacks && n.onComplete) {
                  "yx" === d.axis && clearTimeout(h[0].onCompleteTimeout);
                  var a = h[0].idleTimer || 0;
                  h[0].onCompleteTimeout = setTimeout(function () {
                    s("onScroll") && (r(), d.callbacks.onScroll.call(t[0])), s("onTotalScroll") && k[1] >= _[1] - T && l.cbOffsets[0] && (r(), d.callbacks.onTotalScroll.call(t[0])), s("onTotalScrollBack") && k[1] <= D && l.cbOffsets[1] && (r(), d.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, h[0].idleTimer = 0, C(b, "hide")
                  }, a)
                }
              }
            })
          }
        },
        Y = function (a, t, e, i, n, s, o) {
          function r() {
            _.stop || (b || m.call(), b = V() - g, l(), b >= _.time && (_.time = b > _.time ? b + p - (b - _.time) : b + p - 1, _.time < b + 1 && (_.time = b + 1)), _.time < i ? _.id = h(r) : f.call())
          }

          function l() {
            i > 0 ? (_.currVal = u(_.time, w, k, i, n), x[t] = Math.round(_.currVal) + "px") : x[t] = e + "px", v.call()
          }

          function d() {
            p = 1e3 / 60, _.time = b + p, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (a) {
              return l(), setTimeout(a, .01)
            }, _.id = h(r)
          }

          function c() {
            null != _.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(_.id) : clearTimeout(_.id), _.id = null)
          }

          function u(a, t, e, i, n) {
            switch (n) {
              case "linear":
              case "mcsLinear":
                return e * a / i + t;
              case "mcsLinearOut":
                return a /= i, a--, e * Math.sqrt(1 - a * a) + t;
              case "easeInOutSmooth":
                return a /= i / 2, 1 > a ? e / 2 * a * a + t : (a--, -e / 2 * (a * (a - 2) - 1) + t);
              case "easeInOutStrong":
                return a /= i / 2, 1 > a ? e / 2 * Math.pow(2, 10 * (a - 1)) + t : (a--, e / 2 * (-Math.pow(2, -10 * a) + 2) + t);
              case "easeInOut":
              case "mcsEaseInOut":
                return a /= i / 2, 1 > a ? e / 2 * a * a * a + t : (a -= 2, e / 2 * (a * a * a + 2) + t);
              case "easeOutSmooth":
                return a /= i, a--, -e * (a * a * a * a - 1) + t;
              case "easeOutStrong":
                return e * (-Math.pow(2, -10 * a / i) + 1) + t;
              case "easeOut":
              case "mcsEaseOut":
              default:
                var s = (a /= i) * a,
                  o = s * a;
                return t + e * (.499999999999997 * o * s + -2.5 * s * s + 5.5 * o + -6.5 * s + 4 * a)
            }
          }
          a._mTween || (a._mTween = {
            top: {},
            left: {}
          });
          var p, h, o = o || {},
            m = o.onStart || function () {},
            v = o.onUpdate || function () {},
            f = o.onComplete || function () {},
            g = V(),
            b = 0,
            w = a.offsetTop,
            x = a.style,
            _ = a._mTween[t];
          "left" === t && (w = a.offsetLeft);
          var k = e - w;
          _.stop = 0, "none" !== s && c(), d()
        },
        V = function () {
          return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        },
        K = function () {
          var a = this;
          a._mTween || (a._mTween = {
            top: {},
            left: {}
          });
          for (var t = ["top", "left"], e = 0; e < t.length; e++) {
            var i = t[e];
            a._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._mTween[i].id) : clearTimeout(a._mTween[i].id), a._mTween[i].id = null, a._mTween[i].stop = 1)
          }
        },
        Q = function (a, t) {
          try {
            delete a[t]
          } catch (e) {
            a[t] = null
          }
        },
        aa = function (a) {
          return !(a.which && 1 !== a.which)
        },
        ta = function (a) {
          var t = a.originalEvent.pointerType;
          return !(t && "touch" !== t && 2 !== t)
        },
        ea = function (a) {
          return !isNaN(parseFloat(a)) && isFinite(a)
        },
        ia = function (a) {
          var t = a.parents(".mCSB_container");
          return [a.offset().top - t.offset().top, a.offset().left - t.offset().left]
        },
        na = function () {
          function a() {
            var a = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < a.length; t++)
              if (a[t] + "Hidden" in document) return a[t] + "Hidden";
            return null
          }
          var t = a();
          return t ? document[t] : !1
        };
      a.fn[e] = function (t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void a.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
      }, a[e] = function (t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void a.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
      }, a[e].defaults = s, window[e] = !0, a(window).bind("load", function () {
        a(n)[e](), a.extend(a.expr[":"], {
          mcsInView: a.expr[":"].mcsInView || function (t) {
            var e, i, n = a(t),
              s = n.parents(".mCSB_container");
            if (s.length) return e = s.parent(), i = [s[0].offsetTop, s[0].offsetLeft], i[0] + ia(n)[0] >= 0 && i[0] + ia(n)[0] < e.height() - n.outerHeight(!1) && i[1] + ia(n)[1] >= 0 && i[1] + ia(n)[1] < e.width() - n.outerWidth(!1)
          },
          mcsInSight: a.expr[":"].mcsInSight || function (t, e, i) {
            var n, s, o, r, l = a(t),
              d = l.parents(".mCSB_container"),
              c = "exact" === i[3] ? [
                [1, 0],
                [1, 0]
              ] : [
                [.9, .1],
                [.6, .4]
              ];
            if (d.length) return n = [l.outerHeight(!1), l.outerWidth(!1)], o = [d[0].offsetTop + ia(l)[0], d[0].offsetLeft + ia(l)[1]], s = [d.parent()[0].offsetHeight, d.parent()[0].offsetWidth], r = [n[0] < s[0] ? c[0] : c[1], n[1] < s[1] ? c[0] : c[1]], o[0] - s[0] * r[0][0] < 0 && o[0] + n[0] - s[0] * r[0][1] >= 0 && o[1] - s[1] * r[1][0] < 0 && o[1] + n[1] - s[1] * r[1][1] >= 0
          },
          mcsOverflow: a.expr[":"].mcsOverflow || function (t) {
            var e = a(t).data(i);
            if (e) return e.overflowed[0] || e.overflowed[1]
          }
        })
      })
    }()
  }),
  function (a) {
    "function" == typeof define && define.fmd ? define("douyu/com/mousewheel", ["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
  }(function (a) {
    function t(t) {
      var o = t || window.event,
        r = l.call(arguments, 1),
        d = 0,
        u = 0,
        p = 0,
        h = 0,
        m = 0,
        v = 0;
      if (t = a.event.fix(o), t.type = "mousewheel", "detail" in o && (p = -1 * o.detail), "wheelDelta" in o && (p = o.wheelDelta), "wheelDeltaY" in o && (p = o.wheelDeltaY), "wheelDeltaX" in o && (u = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (u = -1 * p, p = 0), d = 0 === p ? u : p, "deltaY" in o && (p = -1 * o.deltaY, d = p), "deltaX" in o && (u = o.deltaX, 0 === p && (d = -1 * u)), 0 !== p || 0 !== u) {
        if (1 === o.deltaMode) {
          var f = a.data(this, "mousewheel-line-height");
          d *= f, p *= f, u *= f
        } else if (2 === o.deltaMode) {
          var g = a.data(this, "mousewheel-page-height");
          d *= g, p *= g, u *= g
        }
        if (h = Math.max(Math.abs(p), Math.abs(u)), (!s || s > h) && (s = h, i(o, h) && (s /= 40)), i(o, h) && (d /= 40, u /= 40, p /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), p = Math[p >= 1 ? "floor" : "ceil"](p / s), c.settings.normalizeOffset && this.getBoundingClientRect) {
          var b = this.getBoundingClientRect();
          m = t.clientX - b.left, v = t.clientY - b.top
        }
        return t.deltaX = u, t.deltaY = p, t.deltaFactor = s, t.offsetX = m, t.offsetY = v, t.deltaMode = 0, r.unshift(t, d, u, p), n && clearTimeout(n), n = setTimeout(e, 200), (a.event.dispatch || a.event.handle).apply(this, r)
      }
    }

    function e() {
      s = null
    }

    function i(a, t) {
      return c.settings.adjustOldDeltas && "mousewheel" === a.type && t % 120 === 0
    }
    var n, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      l = Array.prototype.slice;
    if (a.event.fixHooks)
      for (var d = o.length; d;) a.event.fixHooks[o[--d]] = a.event.mouseHooks;
    var c = a.event.special.mousewheel = {
      version: "3.1.12",
      setup: function () {
        if (this.addEventListener)
          for (var e = r.length; e;) this.addEventListener(r[--e], t, !1);
        else this.onmousewheel = t;
        a.data(this, "mousewheel-line-height", c.getLineHeight(this)), a.data(this, "mousewheel-page-height", c.getPageHeight(this))
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var e = r.length; e;) this.removeEventListener(r[--e], t, !1);
        else this.onmousewheel = null;
        a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
      },
      getLineHeight: function (t) {
        var e = a(t),
          i = e["offsetParent" in a.fn ? "offsetParent" : "parent"]();
        return i.length || (i = a("body")), parseInt(i.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
      },
      getPageHeight: function (t) {
        return a(t).height()
      },
      settings: {
        adjustOldDeltas: !0,
        normalizeOffset: !0
      }
    };
    a.fn.extend({
      mousewheel: function (a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
      },
      unmousewheel: function (a) {
        return this.unbind("mousewheel", a)
      }
    })
  }), define("douyu/com/zoom", ["jquery", "shark/observer", "shark/util/cookie/1.0", "shark/util/storage/1.0", "douyu/context", "douyu/com/zoom-dp"], function (a, t, e, i, n, s) {
    var o = {
        storageName: "zoomtip",
        storageVal: "1",
        storageTime: 604800,
        isPop: !1,
        init: function () {
          this.handleCookie(),
          // this.pop(),
          t.on("mod.layout.screen.change", function (a) {
            // o.detect() && o.pop()
          })
        },
        handleCookie: function () {
          e.get(this.storageName) && (e.remove(this.storageName), i.set(this.storageName, this.storageVal, this.storageTime))
        },
        detect: function () {
          return this.ua = navigator.userAgent.toLowerCase(), -1 == this.ua.indexOf("windows") ? !1 : !i.get(this.storageName)
        },
        cal: function () {
          var a = 0,
            t = window.screen;
          return void 0 !== window.devicePixelRatio ? a = window.devicePixelRatio : ~this.ua.indexOf("msie") ? t.deviceXDPI && t.logicalXDPI && (a = t.deviceXDPI / t.logicalXDPI) : void 0 !== window.outerWidth && void 0 !== window.innerWidth && (a = window.outerWidth / window.innerWidth), a && (a = Math.round(100 * a)), 99 !== a && 101 !== a || (a = 100), a
        },
        resize: function () {
          var t = this.cal();
          if (this.isPop && t && 100 == t) return void this.close();
          var e = 540,
            i = 432,
            n = 100 * e / t,
            s = 100 * i / t;
          a(".pop-zoom-container").css({
            width: n + "px",
            height: s + "px",
            marginLeft: -n / 2 + "px",
            marginTop: -s / 2 + "px"
          })
        },
        pop: function () {
          var e = this.cal();
          if (!i.get(this.storageName) && !this.isPop && 100 !== e) {
            var s = n.get("sys.web_url") + "app/douyu/res/com/sg-zoom-error.png?20160823",
              o = ['<div class="pop-zoom-container">', '<div class="pop-zoom">', '<img class="pop-zoom-bg" src="', s, '">', '<div class="pop-zoom-close">close</div>', '<div class="pop-zoom-hide"></div>', "</div>", "</div>"].join("");
            a("body").append(o), this.bindEvt(), this.isPop = !this.isPop, t.trigger("dys.com.zoom.pop.show")
          }
          this.resize()
        },
        close: function () {
          a(".pop-zoom-container").remove(), this.isPop = !this.isPop, t.trigger("dys.com.zoom.pop.close")
        },
        bindEvt: function () {
          var e = this;
          a(".pop-zoom-close").on("click", function () {
            e.close()
          }), a(".pop-zoom-hide").on("click", function () {
            i.set(e.storageName, e.storageVal, e.storageTime), t.trigger("dys.com.zoom.pop.zoomtip"), e.close()
          })
        }
      },
      r = function () {
        o.detect() && o.init()
      };
    a(r)
  }), define("douyu/com/zoom-dp", ["jquery", "shark/observer"], function (a, t) {
    function e(a) {
      DYS.sub(a)
    }
    var i = {
      "dys.com.zoom.pop.show": function (a) {
        e({
          action_code: "show_live_pagescal"
        })
      },
      "dys.com.zoom.pop.close": function (a) {
        e({
          action_code: "click_live_pagescal_close"
        })
      },
      "dys.com.zoom.pop.zoomtip": function (a) {
        e({
          action_code: "click_live_pagescal_no"
        })
      }
    };
    for (var n in i) ! function (a) {
      var e = i[a];
      t.on(a, function (a) {
        e.call(this, a)
      })
    }(n);
    return {
      init: function (a) {
        DYS.sub.setPageCode(a)
      }
    }
  }), define("douyu/com/kill-ie", ["jquery", "shark/util/template/1.0", "shark/util/storage/1.0", "douyu/context"], function (a, t, e, i) {
    var n = "dialogIe7",
      s = navigator.appVersion,
      o = {
        isIe6: -1 != s.search(/MSIE 6/i),
        isIe7: -1 != s.search(/MSIE 7/i)
      },
      r = {
        init: function () {
          (o.isIe7 || o.isIe6) && (this.render(), this.show())
        },
        render: function () {
          var t = i.get("sys.web_url") + "app/douyu/res/com/kill-ie/chrome_pic.png?20160824",
            e = i.get("sys.web_url") + "app/douyu/res/com/kill-ie/firefox_pic.png?20160824",
            n = i.get("sys.web_url") + "app/douyu/res/com/kill-ie/downApp_sq.png?20160824",
            s = i.get("sys.web_url") + "app/douyu/res/com/kill-ie/down_btn.png?20160819",
            o = ['<div id="diaIe7" class="dia-ie7-wp">', '<span class="dia-ie7-mask"></span>', '<div class="dia-ie7-container">', '<a class="dia-ie7-cls" href="javascript:;" title="关闭"></a>', '<div class="dia-ie7-hd">', '<p class="dih-tit">温馨提示</p>', '<p class="dih-p">您当前浏览器版本过低，存在安全风险，建议您升级浏览器</p>', "</div>", '<div class="dia-ie7-browser">', '<a class="dib-lk chrome-lk" href="https://www.google.cn/intl/zh-CN/chrome/browser/desktop/" target="_blank" title="下载谷歌浏览器">', '<img src="' + t + '">', "</a>", '<a class="dib-lk firefox-lk" href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank" title="下载火狐浏览器">', '<img src="' + e + '">', "</a>", "</div>", '<div class="dia-ie7-down">', '<img class="did-sq" src="' + n + '">', '<p class="did-p">下载斗鱼APP，随时随地看直播</p>', '<a class="did-lk" href="http://www.douyu.com/client" target="_blank">', '<img src="' + s + '">', "</a>", "</div>", "</div>", "</div>"].join("");
          a("body").append(o), this.bindEvt()
        },
        show: function () {
          a(".dia-ie7-wp").show()
        },
        hide: function () {
          a(".dia-ie7-wp").hide()
        },
        bindEvt: function () {
          var t = this;
          a(".dia-ie7-cls").on("click", function () {
            t.hide()
          })
        }
      },
      l = function () {
        var a = new Date,
          t = new Date;
        return t.setHours(24), t.setMinutes(0), t.setSeconds(0), (t - a) / 1e3
      },
      d = function (a) {
        if (a) r.init();
        else {
          var t;
          if (t = e.get(n), t && 1 === t.flag) return;
          e.set(n, {
            flag: 1
          }, l()), r.init()
        }
      };
    return {
      init: d
    }
  }), define("douyu/com/insight", ["jquery"], function (a) {
    return function (a, t, e, i) {
      var n, s = a(t),
        o = 0,
        r = 0,
        l = 0,
        d = 0,
        c = null;
      a.fn.insight = function (v) {
        function f() {
          var e = 0;
          n = a(b.container), b.container === i || b.container === t ? (n = a(t), o = 0, r = 0) : (o = n.offset().top, r = n.offset().left), l = n.width(), d = n.height(), g.each(function () {
            var t = a(this);
            if ((!b.skip_invisible || t.is(":visible")) && !this.loaded)
              if (h(this, b) || m(this, b));
              else if (u(this, b) || p(this, b)) {
              if (++e > b.failure_limit) return !1
            } else this.loaded || (t.trigger("insight"), e = 0, this.loaded = !0)
          })
        }
        var g = this,
          b = {
            threshold: 0,
            event: "scroll",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null
          };
        return v && (i !== v.failurelimit && (v.failure_limit = v.failurelimit, delete v.failurelimit), i !== v.effectspeed && (v.effect_speed = v.effectspeed, delete v.effectspeed), a.extend(b, v)), n = b.container === i || b.container === t ? s : a(b.container), 0 === b.event.indexOf("scroll") && n.bind(b.event, function () {
          "lazy" === b.mode ? (c && clearTimeout(c), c = setTimeout(function () {
            f(), c = null
          }, 0)) : f()
        }), this.one("insight", function () {
          if (!this.loaded) {
            if (b.appear) {
              var t = g.length;
              b.appear.call(this, t, b), a(this).trigger("insighted")
            }
            this.loaded = !0
          }
        }), s.unbind("resize.insight").bind("resize.insight", function () {
          c && clearTimeout(c), c = setTimeout(function () {
            f(), c = null
          }, 200)
        }), a(e).off("scroll.insight").on("scroll.insight", function () {
          c && clearTimeout(c), c = setTimeout(function () {
            f(), c = null
          }, 200)
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && s.bind("pageshow", function (t) {
          t.originalEvent && t.originalEvent.persisted && g.each(function () {
            a(this).trigger("insight")
          })
        }), a(e).ready(function () {
          f()
        }), this
      };
      var u = function (e, n) {
          var r, l = a(e);
          return r = n.container === i || n.container === t ? (t.innerHeight ? t.innerHeight : s.height()) + s.scrollTop() : o + d, r <= l.offset().top - n.threshold
        },
        p = function (e, n) {
          var o, d = a(e);
          return o = n.container === i || n.container === t ? s.width() + s.scrollLeft() : r + l, o <= d.offset().left - n.threshold
        },
        h = function (e, n) {
          var r, l = a(e);
          return r = n.container === i || n.container === t ? s.scrollTop() : o, r >= l.offset().top + n.threshold + l.height()
        },
        m = function (e, n) {
          var o, l = a(e);
          return o = n.container === i || n.container === t ? s.scrollLeft() : r, o >= l.offset().left + n.threshold + l.width()
        },
        v = function (a, t) {
          return !(p(a, t) || m(a, t) || u(a, t) || h(a, t))
        };
      a.extend(a.expr[":"], {
        "below-the-fold": function (a) {
          return u(a, {
            threshold: 0
          })
        },
        "above-the-top": function (a) {
          return !u(a, {
            threshold: 0
          })
        },
        "right-of-screen": function (a) {
          return p(a, {
            threshold: 0
          })
        },
        "left-of-screen": function (a) {
          return !p(a, {
            threshold: 0
          })
        },
        "in-viewport": function (a) {
          return v(a, {
            threshold: 0
          })
        },
        "above-the-fold": function (a) {
          return !u(a, {
            threshold: 0
          })
        },
        "right-of-fold": function (a) {
          return p(a, {
            threshold: 0
          })
        },
        "left-of-fold": function (a) {
          return !p(a, {
            threshold: 0
          })
        }
      })
    }(a, window, document), {
      build: function (a) {
        a = $.extend({
          selectors: "[data-dysign]"
        }, a), $(a.selectors).insight(a)
      }
    }
  }), define("douyu/com/ajax", ["jquery"], function (a) {
    function t(t) {
      var i = a.extend(null, !0, t),
        n = null,
        s = {},
        o = a.Deferred(),
        r = t.url,
        l = r;
      t.data;
      if ("POST" !== t.type.toUpperCase() && t.data && (l = r + "?" + a.param(t.data)), !r) return !1;
      if (s = e[l], s || (s = {}), n = s.promise) return n;
      var d = t.success,
        c = t.error;
      return i = a.extend(i, !0, {
        success: function (a) {
          s.data = a, o.resolve(a), d && d.call(this, a)
        },
        error: function (a) {
          s.data = a, o.reject(a), c && c.call(this, a)
        }
      }), n = a.ajax(i), s.promise = n, e[l] = s, n
    }
    var e = {};
    return t
  }), define("douyu/com/exjsonp", function () {
    var a = function (t) {
        var e, i, n = [];
        if (t && t.callback) {
          if (e = a[t.callback], !e) throw new Error("callback not exists! please check the data of callback and registered name are the same!");
          for (n = e.callbacks, e.originalData = t, e.cache = t.data, e.src && (a[e.src] = e); i = n.splice(0, 1)[0];) i(t.data)
        }
      },
      t = function (t, e, i) {
        a[t] || (a[t] = {
          callbacks: []
        }), a[t].callbacks.push(e), i && (a[t].src = i)
      },
      e = function (a, t) {
        setTimeout(function () {
          try {
            t.clearAttributes ? t.clearAttributes() : (t.onerror = null, t.onload = null, t.onreadystatechange = null), a.removeChild(t), t = null
          } catch (e) {}
        })
      },
      i = function (i, n, s, o, r, l) {
        var d, c = document.createElement("script"),
          u = document.getElementsByTagName("head")[0] || document.body,
          p = 1 === arguments.length && arguments[0],
          h = p.src || i,
          m = p.callback || n,
          v = p.success || s,
          f = p.failure || o,
          g = p.beforeLoad || r;
        return t(m, v, h), d = a[n], d && "cache" in d && !l ? (a(d.originalData), void(c = null)) : (g && g(c), c.async = "async", c.src = h, c.onerror = function () {
          f && f(h, m), e(u, c)
        }, c.onload = function () {
          var t = a[n];
          t && "cache" in t ? e(u, c) : (f && f(h, m), e(u, c))
        }, c.onreadystatechange = function () {
          var t;
          /loaded|complete/i.test(c.readyState) && (t = a[n], t && "cache" in t ? e(u, c) : (f && f(h, m), e(u, c)))
        }, void u.appendChild(c))
      },
      n = function (t) {
        var e = a[t];
        return e && "cache" in e ? e.cache : void 0
      };
    return window.DYConfigCallback || (window.DYConfigCallback = a), {
      reg: t,
      load: i,
      getData: n
    }
  }), define("douyu/page/annualfestival/mod/semifinal-lift", ["jquery", "shark/observer", "shark/util/lang/1.0", "shark/util/template/2.0", "douyu/context"], function (a, t, e, i, n) {
    var s = {
      domsInit: {
        $body: a(document.body)
      },
      getDoms: function () {
        this.doms = {
          $lift: a(".lift")
        }
      },
      init: function () {
        var e = this;
        this.doms = {};
        var i = this.renderLiftHtml()();
        this.domsInit.$body.append(i), this.getDoms(), this.render(), this.bindEvents(), this.checkLift();
        var n = null;
        a(window).on("resize", function () {
          clearTimeout(n), n = setTimeout(function () {
            e.checkLift(), n = null
          }, 100)
        }), a(window).on("scroll", function () {
          var a = null;
          e.globalCheck(a)
        });
        var s = a(".lift-nav");
        s.on("click", function () {
          var e = a(this).attr("data-flag");
          if (0 !== a(this).index()) {
            var i = a(".louti").eq(1).offset().top;
            a("html,body").animate({
              scrollTop: i
            }, 150)
          } else {
            var i = a(".louti").eq(0).offset().top;
            a("html,body").animate({
              scrollTop: i
            }, 150)
          }
          e && t.trigger("webm.changeTab.listen", e)
        }), a(".top").on("click", function () {
          a("html,body").animate({
            scrollTop: 0
          })
        })
      },
      checkLift: function () {
        var t = a("body").width(),
          e = a(".lift");
        1550 >= t ? e.hide() : e.show()
      },
      renderLiftHtml: function () {
        var a = ["<!-- 电梯浮层 -->", '<div class="lift">', '<a class="lift-nav special cur" href="javascript:;">规则玩法<em class="lift-icon"></em></a>', '<a class="lift-nav special" href="javascript:;" data-flag = "PaiWeiTab">赛事战况<em class="lift-icon"></em></a>', '<a class="lift-nav special" href="javascript:;" data-flag = "ShengDianTab">盛典奖励<em class="lift-icon"></em></a>', '<a class="lift-nav special" href="javascript:;" data-flag = "ShenHaoTab">神豪金榜<em class="lift-icon"></em></a>', '<a class="top" href="javascript:;"></a>', "</div>"].join(""),
          t = i.compile(a);
        return t
      },
      render: function () {},
      bindEvents: function () {},
      globalCheck: function (t) {
        var e = a(window).scrollTop(),
          i = this;
        t && clearTimeout(t), t = setTimeout(function () {
          i.checkScroll(e), clearTimeout(t), t = null
        }, 100)
      },
      checkScroll: function (t) {
        var e = a(".louti"),
          i = a(".match-result-tab"),
          n = a(".subarea-list"),
          s = a(".match-result-content1"),
          o = a(".match-result-content2"),
          r = s.find(".subareaNav"),
          l = o.find(".subareaNav");
        e.each(function (e, s) {
          var o = a(this),
            r = o.offset().top,
            l = a(".lift-nav");
          return r >= t - 700 ? ("has-child" === o.data("type") ? i.each(function (t, i) {
            var s = a(this);
            if (s.hasClass("cur")) {
              var o = s.index();
              if (3 === o || 4 === o) l.removeClass("cur").eq(t + e - 2).addClass("cur");
              else {
                l.removeClass("cur").eq(1).addClass("cur"), n = a(".match-result-content" + (o + 1)).find(".subarea-list"), n.addClass("subarea-list-fixed");
                var r = a("body").width();
                1800 >= r ? n.hide() : n.show()
              }
            }
          }) : (l.removeClass("cur").eq(e).addClass("cur"), n.hide()), !1) : void 0
        }), "none" !== s.css("display") && r.each(function (e, i) {
          var n = a(this),
            s = n.offset().top,
            o = a(".match-result-content1 .subarea-list-nav");
          t + 300 >= s && e % 2 === 0 && o.removeClass("cur").eq(e).addClass("cur")
        }), "none" !== o.css("display") && l.each(function (e, i) {
          var n = a(this),
            s = n.offset().top,
            o = a(".match-result-content2 .subarea-list-nav");
          t + 300 >= s && e % 2 === 0 && o.removeClass("cur").eq(e).addClass("cur")
        })
      }
    };
    return {
      init: function () {
        s.init()
      }
    }
  }), define("douyu/page/annualfestival/mod/semifinal", ["jquery", "shark/observer", "shark/util/lang/1.0", "shark/util/template/2.0", "douyu/context", "douyu/com/mcustomscrollbar", "douyu/com/exjsonp"], function (a, t, e, i, n, s, o) {
    var r = {
      hourTabConfig: {
        lastHour: 0,
        nowHour: 1,
        tHour: 0,
        level: 0,
        day: 0,
        nowDate: 0,
        lastHourRankUrl: "/ztCache/AnnualZbRank/getLastHourRank",
        hourRankUrl: "/ztCache/AnnualZbRank/getHourRank"
      },
      defaultConfig: {
        avatar: n.get("sys.web_url") + "/app/douyu/res/page/annualfestival/default-pic.jpg?v=20171017",
        title: {
          1500000208: "精神股东",
          1500000209: "牌面之王",
          1500000210: "鱼塘霸主",
          1500000211: "睿智带哥",
          1500000212: "秋名车神"
        },
        nickNameHour: "小时榜主",
        nickNameAnchor: "荣耀主播",
        catagory: "虚位以待",
        storageData: {},
        newsConfig: n.get("sys.webconfUrl") + "resource/common/annual2017/news_web.json"
      },
      getDoms: function () {
        this.doms = {
          $lift: a(".lift"),
          $guard: a(".rank-today.hour").find(".today-hour-con-wrap"),
          $date: a('.af-game01[data-date="' + this.hourTabConfig.nowDate + '"]')
        }
      },
      getdates: function (a) {
        var t = $schedule.stage,
          e = $schedule.round;
        return 6 == t ? 1 == e ? a = 17 : 2 == e && (a = 18) : 7 == t ? 1 == e ? a = 20 : 2 == e ? a = 21 : 3 == e ? a = 22 : 4 == e ? a = 23 : 5 == e && (a = 24) : 8 == t && (1 == e ? a = 25 : 2 == e && (a = 26)), a
      },
      init: function () {
        var a = this;
        // navigator.userAgent.match(/AppleWebKit.*Mobile.*/i) && (window.location.href = "/actives/m/YuLeShengDianAll");
        var t = $schedule.date;
        t = a.getdates(t);
        var e = new Date,
          i = e.getHours();
        a.hourTabConfig.nowHour = i, a.hourTabConfig.nowDate = t, 0 === i ? a.hourTabConfig.lastHour = 23 : a.hourTabConfig.lastHour = i - 1, a.getDoms(), a.doms.$date.addClass("cur"), a.bindEvents(), a.renderGuardContent()
      },
      bindEvents: function () {
        var t = this;
        a(".sc-asign-wrap, .btn").on({
          mouseenter: function () {
            a(".J_tipscontent").hide(), a(".af-game-wrap.game02").find(".tips-con").show(), clearTimeout(t.interval)
          },
          mouseleave: function () {
            a(this);
            t.interval = setTimeout(function () {
              a(".af-game-wrap.game02").find(".tips-con").hide()
            }, 500)
          }
        }), a(".J_tipstxt").on({
          mouseenter: function () {
            a(".af-game-wrap.game02").find(".tips-con").hide(), a(".J_tipscontent").show(), clearTimeout(t.interval)
          },
          mouseleave: function () {
            a(this);
            t.interval = setTimeout(function () {
              a(".J_tipscontent").hide()
            }, 500)
          }
        })
      },
      renderGuardContent: function () {
        var t = this;
        t.getLastHourRank().then(function (e) {
          var i, n, s = e.data,
            o = "",
            r = "";
          if (!s || !s.data || 0 != parseInt(e.error, 10)) return o = "守护天神榜主", i = t.handleGuardData([], 5), n = t.renderGuardDom(i, o, r), t.doms.$guard.html(n), void a(".J_nexthourtips").hide();
          var l = s.hour,
            d = s.nhour,
            c = s.thour,
            u = s.level,
            p = s.day;
          if (t.hourTabConfig.lastHour = l, t.hourTabConfig.nowHour = d, t.hourTabConfig.tHour = c, t.hourTabConfig.level = u, t.hourTabConfig.day = p, 4 == u && 2 == p && 23 == c || 1 == u && 2 == p && 23 == c) return o = l + "点用户榜主", i = t.handleGuardData(s.data, 5), n = t.renderGuardDom(i, o, r), t.doms.$guard.html(n), void a(".J_nexthourtips").hide();
          if (1 != u && 3 != u && 4 != u) return o = "守护天神榜主", i = t.handleGuardData([], 5), n = t.renderGuardDom(i, o, r), t.doms.$guard.html(n), void a(".J_nexthourtips").hide();
          var h = t.analyserIsArmistice(l, d);
          h ? (r = d + "点重启守护天神", c == d && (r = d + "点争夺中...")) : r = d + "点争夺中...", o = l + "点用户榜主", (1 == u && 1 == p && 0 == c || 3 == u && 1 == p && 0 == c) && (o = "守护天神榜主"), i = t.handleGuardData(s.data, 5), n = t.renderGuardDom(i, o, r), t.doms.$guard.html(n)
        }).fail(function () {
          var e = "",
            i = "守护天神榜主",
            n = t.handleGuardData([], 5),
            s = t.renderGuardDom(n, i, e);
          t.doms.$guard.html(s), a(".J_nexthourtips").hide()
        }), t.getHourRank().then(function (e) {
          var i = e.data;
          if (i && i.length > 0) {
            var n = t.hourTabConfig.nowHour + "点争夺中...";
            a(".J_nexthourspan").html(n)
          }
          var s = t.handleGuardData(i, 10),
            o = t.renderNowGuardDom(s);
          a(".J_nexthourdiv").html(o), a(".J_nexthourdiv").mCustomScrollbar("destroy").mCustomScrollbar(), 2 == t.hourTabConfig.level && 1 == t.hourTabConfig.day && 0 == t.hourTabConfig.tHour && 23 == t.hourTabConfig.lastHour && a(".J_nexthourtips").hide()
        }).fail(function () {
          var e = t.handleGuardData([], 10),
            i = t.renderNowGuardDom(e);
          a(".J_nexthourdiv").html(i), a(".J_nexthourdiv").mCustomScrollbar("destroy").mCustomScrollbar()
        })
      },
      analyserIsArmistice: function (a, t) {
        return a > t && (t += 24), t - a != 1
      },
      renderGuardDom: function (a, t, e) {
        var n = ['                <div class="tab-title">', '                    <span class="hour-dot">{{lastTitle}}</span>', '                    <span class="next-hour-dot special J_nexthourtips"><span class="J_nexthourspan">{{title}}</span><em class="btn-icon"></em>', '                        <div class="next-hour-rank ">', '                            <div class="rank-list-wrap">', '                                <div class="rank-table-title">', '                                    <span class="pm" width="20%">排名</span>', '                                    <span class="yh" width="46%">用户</span>', '                                    <span class="gx" width="34%">单小时贡献值</span>', "                                </div>", '                                <div class="rank-table-list J_nexthourdiv">', "                                </div>", "                            </div>", "                        </div>", "                    </span>", "                </div>", '                <div class="af-carousel-wrap">', '                    <div class="af-carousel">', '                        <ul class="af-carousel-items" style="left: 0px;">', "                        {{ each lastdata as item index }}", '                            <li class="af-carousel-item">', '                                <a class="props-pic"><img src="{{item.avatar}}" onerror="this.src=\'https://shark.douyucdn.cn//app/douyu/res/page/annualfestival/default-pic.jpg?v=20171017\';this.onerror=null;"></a><a class="user-name ellipsis special" href="javascript:;" title="{{item.nickname}}">{{item.nickname}}</a><span class="fenqu ellipsis">{{item.title}}</span>', "                            </li>", "                        {{ /each }}", "                        </ul>", "                    </div>", "                </div>"].join(""),
          s = i.compile(n),
          o = s({
            lastdata: a,
            title: e,
            lastTitle: t
          });
        return o
      },
      renderNowGuardDom: function (a) {
        var t = ['<ul class="rank-list">', "    {{ each nowdata as item index }}", "    {{ if (item.idx <= 5) }}", '    <li class="item gold">', '        <span class="no">{{item.idx}}</span>', '        <div class="info text-left">', '            <span class="pic">', '                <img src="{{item.avatar}}" alt="">', "            </span>", '            <span class="name ellipsis" title="{{item.nickname}}">{{item.nickname}}</span>', "        </div>", '        <span class="value">{{item.sc}}</span>', "    </li>", "    {{ /if }}", "    {{ /each }}", '   <li class="item line"></li>', "    {{ each nowdata as item index }}", "    {{ if (item.idx > 5) }}", '    <li class="item">', '        <span class="no">{{item.idx}}</span>', '        <div class="info text-left">', '            <span class="pic">', '                <img src="{{item.avatar}}" alt="">', "            </span>", '            <span class="name ellipsis" title="{{item.nickname}}">{{item.nickname}}</span>', "        </div>", '        <span class="value">{{item.sc}}</span>', "    </li>", "    {{ /if }}", "    {{ /each }}", "</ul>"].join(""),
          e = i.compile(t),
          n = e({
            nowdata: a
          });
        return n
      },
      getLastHourRank: function () {
        var t = this;
        return a.ajax({
          type: "GET",
          dataType: "json",
          url: t.hourTabConfig.lastHourRankUrl,
          async: !1
        })
      },
      getHourRank: function () {
        var t = this;
        return a.ajax({
          type: "GET",
          dataType: "json",
          url: t.hourTabConfig.hourRankUrl
        })
      },
      handleGuardData: function (t, e) {
        var i, n, s = this;
        return t = t || [], n = t.length < e ? new Array(e) : t, i = a.map(n, function (a, e) {
          var i = t[e];
          return i ? dataList = {
            nickname: i.nickname,
            title: s.defaultConfig.title[i.badge] || s.defaultConfig.title[1500000208 + e],
            avatar: i.avatar,
            idx: i.idx,
            sc: i.sc
          } : dataList = {
            nickname: "虚位以待",
            title: s.defaultConfig.title[1500000208 + e],
            avatar: s.defaultConfig.avatar,
            idx: e + 1,
            sc: "--"
          }, dataList
        })
      }
    };
    return {
      init: function () {
        r.init()
      }
    }
  }), define("douyu/page/annualfestival/mod/semifinal-rank", ["jquery", "shark/observer", "shark/util/lang/1.0", "shark/util/template/2.0", "douyu/context", "douyu/com/exjsonp", "douyu/com/mcustomscrollbar", "douyu/com/insight", "douyu/com/ajax"], function (a, t, e, i, n, s, o, r, l) {
    var d = {
      flag: !1,
      staticUrl: n.get("sys.web_url"),
      mainTabMap: {
        PaiWeiTab: "PaiWeiTab",
        XiaoZuTab: "XiaoZuTab",
        ChongCiTab: "ChongCiTab",
        ShengDianTab: "ShengDianTab",
        ShenHaoTab: "ShenHaoTab"
      },
      tabConfig: {
        PaiWeiTab: {
          index: 0,
          classTab: 0,
          matchState: 0,
          renderState: 0,
          tabConDom: null,
          storageData: {},
          flagFun: 0,
          storageRoundData: {}
        },
        XiaoZuTab: {
          index: 1,
          classTab: 0,
          matchState: 0,
          renderState: 0,
          tabConDom: null,
          pkData: {},
          flagFun: 0,
          rankData: {},
          pkDetail: {},
          zbUrl: n.get("sys.webconfUrl").replace(/^http(s?):/, "").replace(/\/$/g, "") + "/resource/common/annual2017/web_zb_list.json",
          pkUrl: n.get("sys.webconfUrl").replace(/^http(s?):/, "").replace(/\/$/g, "") + "/resource/common/annual2017/pk_web.json"
        },
        ChongCiTab: {
          index: 2,
          classTab: 0,
          matchState: 0,
          renderState: 0,
          tabConDom: null,
          ajaxFinalUrl: "/ztCache/AnnualZbRank/getFinalRank",
          ajaxBestUrl: "/ztCache/AnnualZbRank/getBestRank"
        },
        ShengDianTab: {
          index: 3,
          classTab: 0,
          matchState: 0,
          renderState: 0,
          tabConDom: null
        },
        ShenHaoTab: {
          index: 4,
          classTab: 0,
          matchState: 0,
          renderState: 0,
          tabConDom: null,
          ajaxUrl: "/ztCache/AnnualZbRank/getAllUserRank"
        }
      },
      defaultConfigs: {
        name: "虚位以待",
        number: "--",
        avatar: n.get("sys.web_url") + "/app/douyu/res/page/annualfestival/favicon.png?v=20171101",
        group: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
      },
      getDoms: function () {
        this.doms = {
          $contentWarp: a(".match-result"),
          $tabSwitch: a(".match-result-tab"),
          $tabContainer: a(".match-result-container")
        }
      },
      init: function () {
        var a = this;
        this.renderHtml = {
          mainTabHtml: function (t) {
            // return a.renderTabContent(t)
          },
          paiWeiHtml: function (t, e) {
            // return a.renderPaiWeiTitle(t, e)
          },
          xiaoZuHtml: function (t, e, i) {
            // return a.renderXiaoZuTabContent(t, e, i)
          },
          chongCiHtml: function (t, e) {
            // return a.renderChongCiTabContent(t, e)
          },
          shengDianHtml: function () {
            // return a.renderShengDianTabContent()
          },
          shenHaoHtml: function (t) {
            // return a.renderShenHaoTabContent(t)
          }
        },
        this.appendMainTab(),
        this.getDoms(),
        this.bindEvents(),
        this.getJsonData()
      },
      appendMainTab: function () {
        // var t = this,
        //   e = t.renderHtml.mainTabHtml(),
        //   i = e({});
        // a(".match-result").html(i)
      },
      renderTabContent: function () {
        var a = ["<!-- 赛况tab切换按钮 -->", '<div class="match-result-tabs">', '<div data-flag="PaiWeiTab" class="match-result-tab tab1 cur"><h2>排位晋级赛况</h2><p>11月17日-11月18日</p></div>', '<div data-flag="XiaoZuTab" class="match-result-tab tab2"><h2>小组PK赛况</h2><p>11月20日-11月24日</p></div>', '<div data-flag="ChongCiTab" class="match-result-tab tab3"><h2>冲刺赛况</h2><p>11月25日-11月26日</p></div>', '<div data-flag="ShengDianTab" class="match-result-tab tab4"><h2>盛典奖励</h2></div>', '<div data-flag="ShenHaoTab" class="match-result-tab tab5"><h2>神豪金榜</h2></div>', "</div>", '<div class="match-result-container"></div>'].join(""),
          t = i.compile(a);
        return t
      },
      bindEvents: function () {
        var e = this,
          i = e.doms;
        t.on("webm.changeTab.listen", function (a) {
          a && e.tabContentAgent(a)
        }), i.$contentWarp.on("click", ".match-result-tab", function (t) {
          var i = a(this);
          if (i.hasClass("cur")) return !1;
          var n = i.closest(".match-result-tab").attr("data-flag");
          return e.tabContentAgent(n), !1
        }).on("click", ".match-result-content4 .ms-content-tab", function () {
          var t = a(this),
            e = t.index(),
            i = t.closest(".match-result-content4").find(".ms-content-tab");
          i.removeClass("cur").eq(e).addClass("cur");
          var n = a(".match-result-content4 .ms-content-box");
          n.css("display", "none").eq(e).css("display", "block")
        }).on("click", ".match-result-content1 .area-list-option", function () {
          $this = a(this);
          var t = $this.index(),
            i = $this.closest(".match-result-content1").find(".area-list-option");
          i.removeClass("cur").eq(t).addClass("cur"), e.appendPaiWeiTabContent(t)
        }).on("click", ".match-result-content2 .area-list-option", function (t) {
          var i = e.tabConfig.XiaoZuTab,
            n = i.pkData,
            s = i.rankData,
            o = a(this),
            r = o.parent(".area-list-options"),
            l = o.index(),
            d = l + 1,
            c = r.data("gid"),
            u = $schedule.stage,
            p = $schedule.round,
            h = "",
            m = r.find(".area-list-option");
          if (m.removeClass("cur").eq(l).addClass("cur"), 5 === l ? (r.siblings(".pk-schedule-list").eq(1).show(), r.siblings(".pk-schedule-list").eq(0).hide()) : (r.siblings(".pk-schedule-list").eq(0).show(), r.siblings(".pk-schedule-list").eq(1).hide()), 5 != l)
            if (n[c] && n[c][d]) {
              var v = [];
              v = n[c][d], v && v.length > 0 && (h = 7 == u && p == d ? "领先" : "胜利");
              var f = e.renderPkXiaoZuTable(v, l, h);
              r.siblings(".J_pklist").remove(), r.parent(".pk-schedule-box").append(f), v && 0 != v.length || r.siblings(".J_pklist").addClass("no-pk-schedule")
            } else a.ajax({
              url: "/ztCache/AnnualZbRank/getPkRank",
              type: "GET",
              dataType: "json",
              data: {
                gid: c,
                rd: d
              }
            }).then(function (a) {
              var t = [];
              a.data && a.data.length > 0 ? (h = 7 == u && p == d ? "领先" : "胜利", t = a.data) : i.pkDetail && i.pkDetail[c] && (t = i.pkDetail[c][d]), i.pkData[c] = i.pkData[c] || {}, i.pkData[c][d] = t;
              var n = e.renderPkXiaoZuTable(t, l, h);
              r.siblings(".J_pklist").remove(), r.parent(".pk-schedule-box").append(n), t && 0 != t.length || r.siblings(".J_pklist").addClass("no-pk-schedule")
            }).fail(function () {
              var a = e.renderPkXiaoZuTable([], l);
              r.siblings(".J_pklist").remove(), r.parent(".pk-schedule-box").append(a), r.siblings(".J_pklist").addClass("no-pk-schedule")
            });
          else {
            var v = s[c],
              g = [];
            if (v && v[0]) {
              var b = v[0].status;
              1 == b && (g = v)
            }
            var f = e.renderPkXiaoZuTable(g, l, h);
            r.siblings(".J_pklist").remove(), r.parent(".pk-schedule-box").append(f)
          }
        })
      },
      tabContentAgent: function (a) {
        var t = this,
          e = t.tabConfig,
          i = t.mainTabMap,
          n = e[a];
        if (n) switch (t.updateTabState(a), a) {
          case i.PaiWeiTab:
            // t.appendPaiWeiTabContent();
            break;
          case i.XiaoZuTab:
            t.appendXiaoZuTabContent();
            break;
          case i.ChongCiTab:
            t.appendChongCiTabContent();
            break;
          case i.ShengDianTab:
            t.appendShengDianTabContent();
            break;
          case i.ShenHaoTab:
            // t.appendShenHaoTabContent()
        }
      },
      appendPaiWeiTabContent: function (t) {
        var e, i = this,
          n = i.doms,
          s = i.tabConfig[i.mainTabMap.PaiWeiTab];
        if (1 !== s.renderState && (s.renderState = 1, e = i.renderHtml.paiWeiHtml([], t), n.$tabContainer.append(e), s.tabConDom = n.$tabContainer.find(".match-result-content1"), s.tabConDom.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()), void 0 === t) {
          var o = $schedule.round || 1,
            d = $schedule.stage;
          t = 6 == d && 2 == o ? 1 : 0
        }
        0 == t ? (s.tabConDom.find(".area-list-option").removeClass("cur"), s.tabConDom.find(".tab1").addClass("cur")) : (s.tabConDom.find(".area-list-option").removeClass("cur"), s.tabConDom.find(".tab2").addClass("cur")), i.updateTabState(i.mainTabMap.PaiWeiTab), a(".match-result-content1 .ms-content-box").remove(), a(".match-result-content1").append('<div class="ms-content-box"></div>'), setTimeout(function () {
          s.tabConDom.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()
        }), r.build({
          selectors: ".match-result-content1 .ms-content-box",
          appear: function () {
            var e = a(this);
            l({
              url: "/ztCache/AnnualZbRank/getPwRank",
              type: "GET",
              dataType: "json",
              data: {
                stage: 6,
                rd: t + 1
              }
            }).then(function (n) {
              var s = i.renderRankPaiWeiList(n.data, t);
              e.html(s), n.data[0] && (1 == n.data[0].status ? a(".J_pwtitle").append("（未晋级）") : 0 == n.data[0].status && a(".J_pwtitle").append("（即将淘汰）")), setTimeout(function () {
                e.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()
              })
            }).fail(function () {
              var a = i.renderRankPaiWeiList([], t);
              e.html(a), setTimeout(function () {
                e.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()
              })
            })
          }
        }), a(document).trigger("scroll")
      },
      renderPaiWeiTitle: function (a, t) {
        var e = this,
          n = ["<!-- 排位赛况 -->", '<div class="match-result-content match-result-content1">', '<div class="area-list-title"><h3><span class="highlight">全站争霸赛</span>排位晋级赛</h3></div>', '<div class="area-list-options">', '<div class="area-list-option tab1 cur">11月17日</div>', '<div class="area-list-option tab2">11月18日</div>', "</div>", '<div class="ms-content-box">', "{{ #rankList }}", "</div>", "</div>"].join(""),
          s = i.compile(n),
          o = s({
            rankList: e.renderRankPaiWeiList(a, t)
          });
        return o
      },
      renderRankPaiWeiList: function (a, t) {
        var e = this,
          n = e.handleFinalData(a, 150),
          s = [];
        s = 0 === t ? [50, 100, 150] : [30, 60, 100];
        var o = ["<!-- 1-50名 -->", '<div class="area-list-box">', "{{ if (dayIndex === 0) }}", '    <div class="ms-content-title">第1-50名</div>', "{{ else }}", '    <div class="ms-content-title">第1-30名</div>', "{{ /if }}", '    <div class="area-list-content" style="display: block;">', '        <div class="area-list-content-title">', '            <span class="al-title-rank">排名</span>', '            <span class="al-title-name">主播</span>', '            <span class="al-title-num">当日荣耀值</span>', "        </div>", '        <div class="area-list-table">', '        <ul class="area-list-inner">', "        {{ each rankData as item index }}", "        {{ if (item.idx <= arr[0]) }}", "            <li>", '                <span class="area-list-rank">{{ item.idx }}</span>', '                <a href="{{ item.room_id }}" class="area-list-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="area-list-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', '                <span class="area-list-num">{{ item.sc }}</span>', "            </li>", "        {{ /if }}", "        {{ /each }}", "        </ul>", "        </div>", "    </div>", "</div>", "<!-- 51-100名 -->", '<div class="area-list-box second-site">', "{{ if (dayIndex === 0) }}", '    <div class="ms-content-title">第51-100名</div>', "{{ else }}", '    <div class="ms-content-title">第31-60名</div>', "{{ /if }}", '    <div class="area-list-content" style="display: block;">', '        <div class="area-list-content-title">', '            <span class="al-title-rank">排名</span>', '            <span class="al-title-name">主播</span>', '            <span class="al-title-num">当日荣耀值</span>', "        </div>", '        <div class="area-list-table">', '        <ul class="area-list-inner">', "        {{ each rankData as item index }}", "        {{ if (item.idx <= arr[1] && item.idx > arr[0]) }}", "            <li>", '                <span class="area-list-rank">{{ item.idx }}</span>', '                <a href="{{ item.room_id }}" class="area-list-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="area-list-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', '                <span class="area-list-num">{{ item.sc }}</span>', "            </li>", "        {{ /if }}", "        {{ /each }}", "        </ul>", "        </div>", "    </div>", "</div>", "<!-- 101-150名 -->", '<div class="area-list-box third-site">', "{{ if (dayIndex === 0) }}", '    <div class="ms-content-title J_pwtitle">第101-150名</div>', "{{ else }}", '    <div class="ms-content-title J_pwtitle">第61-100名</div>', "{{ /if }}", '    <div class="area-list-content" style="display: block;">', '        <div class="area-list-content-title">', '            <span class="al-title-rank">排名</span>', '            <span class="al-title-name">主播</span>', '            <span class="al-title-num">当日荣耀值</span>', "        </div>", '        <div class="area-list-table">', '        <ul class="area-list-inner">', "        {{ each rankData as item index }}", "        {{ if (item.idx > arr[1] && item.idx <= arr[2]) }}", "            <li>", '                <span class="area-list-rank">{{ item.idx }}</span>', '                <a href="{{ item.room_id }}" class="area-list-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="area-list-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', '                <span class="area-list-num">{{ item.sc }}</span>', "            </li>", "        {{ /if }}", "        {{ /each }}", "        </ul>", "        </div>", "    </div>", "</div>"].join(""),
          r = i.compile(o),
          l = r({
            rankData: n,
            dayIndex: t,
            arr: s
          });
        return l
      },
      appendXiaoZuTabContent: function () {
        var t, e = this,
          i = e.doms,
          n = $schedule.stage,
          s = $schedule.round || 1,
          o = e.tabConfig[e.mainTabMap.XiaoZuTab];
        $('.match-result-content').css('display', 'none');
        $('.match-result-content2').css('display', 'block');
        // 1 !== o.renderState && (o.renderState = 1, t = e.renderHtml.xiaoZuHtml(), i.$tabContainer.append(t), o.tabConDom = i.$tabContainer.find(".match-result-content2")), e.updateTabState(e.mainTabMap.XiaoZuTab), r.build({
        //   selectors: ".match-result-content2 .ms-content-box",
        //   appear: function () {
        //     var t = a(this),
        //       i = t.find(".J_datagroup").data("gid"),
        //       r = s,
        //       d = 0;
        //     7 == n ? d = r - 1 : 8 != n && 9 != n || (d = 5);
        //     var c = t.find(".area-list-option");
        //     c.removeClass("cur").eq(d).addClass("cur"), l({
        //       url: "/ztCache/AnnualZbRank/getPointRank",
        //       type: "GET",
        //       dataType: "json",
        //       data: {
        //         gid: i,
        //         rd: r
        //       }
        //     }).then(function (a) {
        //       o.rankData[i] = o.rankData[i] || {}, o.rankData[i] = a.data;
        //       var l = e.renderRankXiaoZuTable(a.data);
        //       t.find(".J_ranklist").remove(), t.append(l), a.data && 0 != a.data.length || t.find(".J_ranklist").addClass("no-pk-schedule"), e.ajaxPkMatch(i, r, n, s, o, d, t)
        //     }).fail(function () {
        //       var a = e.renderRankXiaoZuTable([]);
        //       t.find(".J_ranklist").remove(), t.append(a), t.find(".J_ranklist").addClass("no-pk-schedule"), e.ajaxPkMatch(i, r, n, s, o, d, t)
        //     })
        //   }
        // })
      },
      ajaxPkMatch: function (a, t, e, i, n, s, o) {
        var r = this;
        l({
          url: "/ztCache/AnnualZbRank/getPkRank",
          type: "GET",
          dataType: "json",
          data: {
            gid: a,
            rd: t
          }
        }).then(function (l) {
          var d = "",
            c = [];
          l.data && l.data.length > 0 ? (d = 7 == e && i == t ? "领先" : "胜利", c = l.data) : n.pkDetail && n.pkDetail[a] && (c = n.pkDetail[a][t]), n.pkData[a] = n.pkData[a] || {}, n.pkData[a][t] = c;
          var u = r.renderPkXiaoZuTable(c, s, d);
          if (o.find(".J_pklist").remove(), o.find(".pk-schedule-box").append(u), c && 0 != c.length || o.find(".J_pklist").addClass("no-pk-schedule"), 5 == s) {
            var p = n.rankData[a],
              h = [];
            if (p && p[0]) {
              var m = p[0].status;
              1 == m && (h = p)
            }
            d = 7 == e && i == t ? "领先" : "胜利";
            var u = r.renderPkXiaoZuTable(h, s, d);
            o.find(".J_pklist").remove(), o.find(".pk-schedule-box").append(u), h && 0 != h.length || o.find(".J_pklist").addClass("no-pk-schedule")
          }
        }).fail(function () {
          var a = r.renderPkXiaoZuTable([], s);
          o.find(".J_pklist").remove(), o.find(".pk-schedule-box").append(a), o.find(".J_pklist").addClass("no-pk-schedule")
        })
      },
      renderXiaoZuTabContent: function (a, t) {
        var e = this,
          n = ["<!-- 小组赛况 -->", '<div class="match-result-content match-result-content2" style="display: none;">', '<div class="area-list-title"><h3><span class="highlight">全站争霸赛</span>小组PK赛</h3></div>', "{{ #rankList }}", "</div>"].join(""),
          s = i.compile(n),
          o = s({
            rankList: e.renderRankXiaoZuList(a, t)
          });
        return o
      },
      renderRankXiaoZuList: function (a, t) {
        var e = this,
          n = e.handleXiaoZuData([], 10),
          s = ["{{ each defaultData as item index }}", '<div class="ms-content-box">', '    <div class="pk-schedule">', '        <div class="pk-list-title"><span>{{item.groupName}}组赛况</span></div>', '        <div class="pk-schedule-box">', '            <div class="area-list-options J_datagroup" data-gid="{{item.groupId}}">', '                <div class="area-list-option cur">20日</div>', '                <div class="area-list-option">21日</div>', '                <div class="area-list-option">22日</div>', '                <div class="area-list-option">23日</div>', '                <div class="area-list-option">24日</div>', '                <div class="area-list-option">赛事结果</div>', "            </div>", "{{ #pkTable }}", "        </div>", "    </div>", "{{ #rankTable }}", "</div>", "{{ /each }}"].join(""),
          o = i.compile(s),
          r = o({
            defaultData: n,
            pkTable: e.renderPkXiaoZuTable(a, 0),
            rankTable: e.renderRankXiaoZuTable(t)
          });
        return r
      },
      renderPkXiaoZuTable: function (a, t, e) {
        var n, s = this;
        e = e || 0, n = 5 != t ? s.handleXiaoZuPkData(a, 3) : s.handleXiaoZuRankData(a, 6);
        var o = ["{{ if (type != 5) }}", '    <div class="pk-schedule-list J_pklist">', "        {{ each data as item index }}", '        <div class="pk-schedule-detial">', '            <a href="{{ item.lrid }}" class="pk-schedule-item" target="_blank">', '            {{ if (flag == "领先" && (((item.wrid == item.lrid) && (item.wrid != 0)) || (item.lsc > (item.rsc == "--" ? 0 : item.rsc)))) }}', '                <span class="pk-schedule-icon"><img src="{{ item.lavatar }}"><span class="pk-ahead">{{ flag }}</span></span>', '            {{ else if (flag == "胜利" && (((item.wrid == item.lrid) && (item.wrid != 0)) || (item.lsc > (item.rsc == "--" ? 0 : item.rsc)))) }}', '                <span class="pk-schedule-icon"><img src="{{ item.lavatar }}"><span class="pk-victory"></span></span>', "            {{ else }}", '                <span class="pk-schedule-icon"><img src="{{ item.lavatar }}"></span>', "            {{ /if }}", '                <span class="pk-schedule-name">{{ item.lnickname }}</span>', '                {{ if (item.lnickname != "虚位以待") }}', '                <span class="pk-schedule-num">{{ item.lsc }}</span>', "                {{ /if }}", "            </a>", '            {{ if (flag == "领先") }}', '            <div class="pk-schedule-vs">PK中...</div>', "            {{ else }}", '            <div class="pk-schedule-vs">VS</div>', "            {{ /if }}", '            <a href="{{ item.rrid }}" class="pk-schedule-item" target="_blank">', '            {{ if (flag == "领先" && (((item.wrid == item.rrid) && (item.wrid != 0)) || ((item.lsc == "--" ? 0 : item.lsc) < item.rsc))) }}', '                <span class="pk-schedule-icon"><img src="{{ item.ravatar }}"><span class="pk-ahead">{{ flag }}</span></span>', '            {{ else if (flag == "胜利" && (((item.wrid == item.rrid) && (item.wrid != 0)) || ((item.lsc == "--" ? 0 : item.lsc) < item.rsc))) }}', '                <span class="pk-schedule-icon"><img src="{{ item.ravatar }}"><span class="pk-victory"></span></span>', "            {{ else }}", '                <span class="pk-schedule-icon"><img src="{{ item.ravatar }}"></span>', "            {{ /if }}", '                <span class="pk-schedule-name">{{ item.rnickname }}</span>', '                {{ if (item.rnickname != "虚位以待") }}', '                <span class="pk-schedule-num">{{ item.rsc }}</span>', "                {{ /if }}", "            </a> ", "        </div>", "        {{ /each }}", "    </div>", "{{ else }}", '    <div class="pk-schedule-list J_pklist">', '        <div class="list-top-three">', "        {{ each data as item index }}", "        {{ if (item.idx == 1) }}", '            <div class="list-top-item the-champion">', '                <a href="{{ item.room_id }}" class="list-top-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="list-top-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', "            </div>", "        {{ else if (item.idx == 2) }}", '            <div class="list-top-item second-place">', '                <a href="{{ item.room_id }}" class="list-top-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="list-top-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', "            </div>", "        {{ else if (item.idx == 3) }}", '            <div class="list-top-item third-place">', '                <a href="{{ item.room_id }}" class="list-top-icon" target="_blank"><img src="{{ item.avatar }}"></a>', '                <a href="{{ item.room_id }}" class="list-top-name" target="_blank" title="{{ item.nickname }}">{{ item.nickname }}</a>', "            </div>", "        {{ /if }}", "        {{ /each }}", "        </div>", "    </div>", "{{ /if }}"].join(""),
          r = i.compile(o),
          l = r({
            data: n,
            type: t,
            flag: e
          });
        return l
      },
      renderRankXiaoZuTable: function (a) {
        var t = this,
          e = t.handleXiaoZuRankData(a, 6),
          n = ['<div class="area-list-content J_ranklist">', '    <div class="area-list-content-title">', '        <span class="al-title-rank">小组积分排名</span>', '        <span class="al-title-name">积分（累计荣耀值）</span>', "    </div>", '    <ul class="area-list-inner" data-flat="area-list-inner1">', "    {{ each data as rank rankIndex }}", "        <li>", "            {{ if (rank.idx <= 3) }}", '            <span class="area-list-rank in-top J_intop">{{ rank.idx }}</span>', "            {{ else }}", '            <span class="area-list-rank">{{ rank.idx }}</span>', "            {{ /if }}", '            <a href="{{ rank.room_id }}" class="area-list-name" target="_blank" title="{{ rank.nickname }}">{{ rank.nickname }}</a>', '            <span class="area-list-num">{{ rank.point }}<i>（{{ rank.sc }}）</i></span>', "            {{ if (rank.status == 1) }}", '            <span class="area-list-status">已晋级</span>', "            {{ /if }}", "        </li>", "    {{ /each }}", "    </ul>", "</div>"].join(""),
          s = i.compile(n),
          o = s({
            data: e
          });
        return o
      },
      handleXiaoZuData: function (t, e) {
        var i = this.defaultConfigs,
          n = {},
          s = [];
        return t || (t = []), s = a.map(new Array(e), function (a, e) {
          var s = t[e];
          return n = s ? {
            groupId: e + 1,
            groupName: i.group[e],
            avatar: s.avatar || i.avatar
          } : {
            groupId: e + 1,
            groupName: i.group[e],
            avatar: i.avatar
          }
        })
      },
      handleXiaoZuPkData: function (t, e) {
        var i = this.defaultConfigs,
          n = {},
          s = [];
        return t || (t = []), s = a.map(new Array(e), function (a, e) {
          var s = t[e];
          return n = s ? {
            lrid: "/" + s.lrid || "javascript:;",
            lsc: 0 == s.lsc ? "--" : s.lsc,
            rrid: "/" + s.rrid || "javascript:;",
            rsc: 0 == s.rsc ? "--" : s.rsc,
            lnickname: s.lnickname || "虚位以待",
            lavatar: s.lavatar || i.avatar,
            rnickname: s.rnickname || "虚位以待",
            ravatar: s.ravatar || i.avatar,
            wrid: "/" + s.wrid || 0
          } : {
            lrid: "javascript:;",
            lsc: "--",
            rrid: "javascript:;",
            rsc: "--",
            lnickname: "虚位以待",
            lavatar: i.avatar,
            rnickname: "虚位以待",
            ravatar: i.avatar,
            wrid: 0
          }
        })
      },
      handleXiaoZuRankData: function (t, e) {
        var i = this.defaultConfigs,
          n = {},
          s = [];
        return t || (t = []), s = a.map(new Array(e), function (a, e) {
          var s = t[e];
          return n = s ? {
            room_id: "/" + s.room_id || "javascript:;",
            sc: 0 == s.sc ? "--" : s.sc,
            nickname: s.nickname || "虚位以待",
            avatar: s.avatar || i.avatar,
            idx: s.idx || e + 1,
            point: s.point || "--",
            status: s.status || 0
          } : {
            room_id: "javascript:;",
            sc: "--",
            nickname: "虚位以待",
            avatar: i.avatar,
            idx: e + 1,
            point: "--",
            status: 0
          }
        })
      },
      appendChongCiTabContent: function () {
        var t, e = this,
          i = e.doms,
          n = e.tabConfig[e.mainTabMap.ChongCiTab],
          s = n.ajaxFinalUrl,
          o = n.ajaxBestUrl,
          r = [];
        $('.match-result-content').css('display', 'none');
        $('.match-result-content3').css('display', 'block');
        $(".match-result-content3 .area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()

        // 1 !== n.renderState && (a.ajax({
        //   type: "GET",
        //   url: s,
        //   dataType: "json",
        //   async: !1,
        //   success: function (a) {
        //     r = 0 === parseInt(a.error, 10) ? e.handleFinalData(a.data, 30) : e.handleFinalData([], 30), t = e.renderHtml.chongCiHtml(r), i.$tabContainer.append(t), n.tabConDom = i.$tabContainer.find(".match-result-content3"), n.tabConDom.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()
        //   },
        //   error: function () {
        //     r = e.handleFinalData([], 30), t = e.renderHtml.chongCiHtml(r), i.$tabContainer.append(t), n.tabConDom = i.$tabContainer.find(".match-result-content3"), n.tabConDom.find(".area-list-table").mCustomScrollbar("destroy").mCustomScrollbar()
        //   }
        // }), a.ajax({
        //   type: "GET",
        //   url: o,
        //   dataType: "json",
        //   success: function (i) {
        //     r = 0 === parseInt(i.error, 10) ? e.handleFinalData(i.data, 10) : e.handleFinalData([], 10), t = e.renderTenChongCiList(r), a(".J_finalp").append(t), n.renderState = 1, e.updateTabState(e.mainTabMap.ChongCiTab)
        //   },
        //   error: function () {
        //     r = e.handleFinalData([], 10), t = e.renderTenChongCiList(r), a(".J_finalp").append(t), n.renderState = 1, e.updateTabState(e.mainTabMap.ChongCiTab)
        //   }
        // }))
      },
      renderChongCiTabContent: function (a) {
        var t = this,
          e = ["<!-- 冲刺赛况 -->", '<div class="match-result-content match-result-content3" style="display: none;">', '<div class="area-list-title">', '<h3><span class="highlight">全站争霸赛</span>冲刺赛</h3>', "</div>", '<div class="ms-content-box">', '<div class="area-list-box">', "<!-- 榜单 -->", '<div class="area-list-content" style="display: block;">', "{{ #rankList }}", "</div>", "</div>", "</div>", '<div class="ms-content-box area-list-box2">', '<div class="area-list-box J_finalp">', '<div class="resurgence-title">', "<h3>年度十大巅峰主播</h3>", "</div>", "</div>", "</div>", "</div>"].join(""),
          n = i.compile(e),
          s = n({
            rankList: t.renderRankChongCiList(a),
            rankData: a
          });
        return s
      },
      renderRankChongCiList: function (a) {
        var t = this,
          e = ['<div class="area-list-content-title">', '<span class="al-title-rank">排名</span>', '<span class="al-title-name">主播</span>', '<span class="al-title-num">荣耀值</span>', "</div>", '<div class="area-list-table">', '<ul class="area-list-inner">', "{{ each rankData as item index }}", "<li>", "{{ if (item.idx <= 10) }}", '<span class="area-list-rank">{{ item.idx }}</span>', "{{ else }}", '<span class="area-list-rank in-bottom">{{ item.idx }}</span>', "{{ /if }}", '<a href="{{ item.room_id }}" class="area-list-icon" target="_blank"><img src="{{ item.avatar }}" onerror="this.src=\'{{defaultImg}}\';this.onerror=null;"></a>', "{{ if (item.idx <= 10) }}", '<a href="{{ item.room_id }}" class="area-list-name" title="{{ item.nickname }}" target="_blank">{{ item.nickname }}</a>', "{{ else }}", '<a href="{{ item.room_id }}" class="area-list-name in-bottom" title="{{ item.nickname }}" target="_blank">{{ item.nickname }}</a>', "{{ /if }}", '<span class="area-list-num">{{ item.sc }}</span>', "</li>", "{{ /each }}", "</ul>", "</div>"].join(""),
          n = i.compile(e),
          s = n({
            rankData: a,
            defaultImg: t.defaultConfigs.avatar
          });
        return s
      },
      renderTenChongCiList: function (a) {
        var t = ["{{ each rankData as item index }}", "{{ if item.idx <= 10 }}", '<div class="the-resurgence">', '<a href="{{ item.room_id }}" class="the-resurgence-icon" target="_blank">', '<img src="{{ item.avatar }}">', "</a>", '<a href="{{ item.room_id }}" class="the-resurgence-name" title="{{ item.nickname }}" target="_blank">{{ item.nickname }}</a>', "</div>", "{{ /if }}", "{{ /each }}"].join(""),
          e = i.compile(t),
          n = e({
            rankData: a
          });
        return n
      },
      appendShengDianTabContent: function () {
        var a = this,
          t = a.doms,
          e = a.tabConfig[a.mainTabMap.ShengDianTab];
        $('.match-result-content').css('display', 'none');
        $('.match-result-content4').css('display', 'block');
        // if (1 !== e.renderState) {
        //   var i = a.renderHtml.shengDianHtml(),
        //     n = i({
        //       staticUrl: a.staticUrl
        //     });
        //   t.$tabContainer.append(n), e.tabConDom = t.$tabContainer.find(".match-result-content4"), e.renderState = 1
        // }
        // a.updateTabState(a.mainTabMap.ShengDianTab)
      },
      renderShengDianTabContent: function () {
        var a = ['<div class="match-result-content match-result-content4" style="display: none;">', '    <div class="ms-content-title2">', "        <h2>十大巅峰主播奖励</h2>", "    </div>", '    <div class="ms-content-tabs">', '        <div class="ms-content-tab tab1 cur">1-3名奖励</div>', '        <div class="ms-content-tab tab2">4-6名奖励</div>', '        <div class="ms-content-tab tab3">7-10名奖励</div>', "    </div>", "    <!-- 1-3名奖励 -->", '    <div class="ms-content-box">', '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon7"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">星光大道+颁奖典礼</span></h3>', "                    <p>线下盛典晚会，感谢有你，风雨相伴</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img01.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon1"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">首页幻灯推荐（30小时）</span></h3>', "                    <p>千万用户量级斗鱼王牌推荐位（2018年5月31日之前有效）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img02.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon2"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制粉丝徽章（90天）</span></h3>', "                    <p>专属于主播和粉丝的最高牌面</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img03.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon3"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">直播列表页一级栏目置顶（30次）</span></h3>', "                    <p>流量收割机，置顶排第一（2018年5月31日之前有效）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img04.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon5"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">全站开播通知（60次）</span></h3>', "                    <p>主播开播后，可主动向全站所有房间发送开播通知（类似超级火箭 广播）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img05.jpg?v=20171101"></div>', "        </div>", '            <div class="area-list-box">', '                <div class="award-top-info">', '                <div class="the-award-icon award-icon8"></div>', '                    <div class="award-top-txt">', '                        <h3><span class="highlight">入驻2018斗鱼名人堂</span></h3>', "                        <p>嘉年华线下专属卡通造型</p>", "                    </div>", "                </div> ", '                <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img06.jpg?v=20171101"></div>', "            </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon9"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">鱼乐盛典现场巨型海报</span></h3>', "                    <p>鱼乐盛典专属个人形象大片</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img07.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon10"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制直播间（30天）</span></h3>', "                    <p>年度十大巅峰主播专属标识，共同见证这份荣耀</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img08.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">盛典奖杯</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s1.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">官方活动优先邀请特权</span></h3>', '                    <span class="award-top-txt-state">年度盛典、斗鱼嘉年华、商务活动等</span>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s2.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">年度盛典专题页推荐</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s3.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">直播间封面角标（30天）</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s4.jpg?v=20171101"></div>', "        </div>", "    </div>", "    <!-- 4-6名奖励 -->", '    <div class="ms-content-box" style="display: none;">', '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon7"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">星光大道+颁奖典礼</span></h3>', "                    <p>线下盛典晚会，感谢有你，风雨相伴</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img01.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon3"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">直播列表页一级栏目置顶（30次）</span></h3>', "                    <p>流量收割机，置顶排第一（2018年5月31日之前有效）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img04.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon2"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制粉丝徽章（90天）</span></h3>', "                    <p>专属于主播和粉丝的最高牌面</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img03.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon5"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">全站开播通知（60次）</span></h3>', "                    <p>主播开播后，可主动向全站所有房间发送开播通知（类似超级火箭 广播）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img05.jpg?v=20171101"></div>', "        </div>", '            <div class="area-list-box">', '                <div class="award-top-info">', '                <div class="the-award-icon award-icon8"></div>', '                    <div class="award-top-txt">', '                        <h3><span class="highlight">入驻2018斗鱼名人堂</span></h3>', "                        <p>嘉年华线下专属卡通造型</p>", "                    </div>", "                </div> ", '                <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img06.jpg?v=20171101"></div>', "            </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon10"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制直播间（30天）</span></h3>', "                    <p>年度十大巅峰主播专属标识，共同见证这份荣耀</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img08.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon9"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">鱼乐盛典现场巨型海报</span></h3>', "                    <p>鱼乐盛典专属个人形象大片</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img07.jpg?v=20171101"></div>', "        </div>", "        <div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">盛典奖杯</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s1.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">官方活动优先邀请特权</span></h3>', '                    <span class="award-top-txt-state">年度盛典、斗鱼嘉年华、商务活动等</span>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s2.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">年度盛典专题页推荐</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s3.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">直播间封面角标（30天）</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s4.jpg?v=20171101"></div>', "        </div>", "        </div>", "    </div>", "    <!-- 7-10名奖励 -->", '    <div class="ms-content-box" style="display: none;">', '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon7"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">星光大道+颁奖典礼</span></h3>', "                    <p>线下盛典晚会，感谢有你，风雨相伴</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img01.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon5"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">全站开播通知（60次）</span></h3>', "                    <p>主播开播后，可主动向全站所有房间发送开播通知（类似超级火箭 广播）</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img05.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon2"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制粉丝徽章（90天）</span></h3>', "                    <p>专属于主播和粉丝的最高牌面</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img03.jpg?v=20171101"></div>', "        </div>", '            <div class="area-list-box">', '                <div class="award-top-info">', '                <div class="the-award-icon award-icon8"></div>', '                    <div class="award-top-txt">', '                        <h3><span class="highlight">入驻2018斗鱼名人堂</span></h3>', "                        <p>嘉年华线下专属卡通造型</p>", "                    </div>", "                </div> ", '                <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img06.jpg?v=20171101"></div>', "            </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon9"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">鱼乐盛典现场巨型海报</span></h3>', "                    <p>鱼乐盛典专属个人形象大片</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img07.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box">', '            <div class="award-top-info">', '                <div class="the-award-icon award-icon10"></div>', '                <div class="award-top-txt">', '                    <h3><span class="highlight">定制直播间（30天）</span></h3>', "                    <p>年度十大巅峰主播专属标识，共同见证这份荣耀</p>", "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img08.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">盛典奖杯</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s1.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">官方活动优先邀请特权</span></h3>', '                    <span class="award-top-txt-state">年度盛典、斗鱼嘉年华、商务活动等</span>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s2.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">年度盛典专题页推荐</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s3.jpg?v=20171101"></div>', "        </div>", '        <div class="area-list-box area-list-box3">', '            <div class="award-top-info">', '                <div class="award-top-txt">', '                    <h3><span class="highlight">直播间封面角标（30天）</span></h3>', "                </div>", "            </div> ", '            <div class="award-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s4.jpg?v=20171101"></div>', "        </div>", "    </div>", "</div>"].join(""),
          t = i.compile(a);
        return t
      },
      appendShenHaoTabContent: function (t) {
        var e, i = this,
          n = i.doms,
          s = i.tabConfig[i.mainTabMap.ShenHaoTab],
          o = s.ajaxUrl,
          r = [];
        1 !== s.renderState && a.ajax({
          type: "GET",
          url: o,
          dataType: "json",
          success: function (a) {
            r = 0 === parseInt(a.error, 10) ? i.handleFinalData(a.data, 15) : i.handleFinalData([], 15), e = i.renderHtml.shenHaoHtml(r), n.$tabContainer.append(e), s.tabConDom = n.$tabContainer.find(".match-result-content5"), s.renderState = 1, i.updateTabState(i.mainTabMap.ShenHaoTab)
          },
          error: function () {
            r = i.handleFinalData([], 15), e = i.renderHtml.shenHaoHtml(r), n.$tabContainer.append(e), s.tabConDom = n.$tabContainer.find(".match-result-content5"), s.renderState = 1, i.updateTabState(i.mainTabMap.ShenHaoTab)
          }
        })
      },
      renderShenHaoTabContent: function (a) {
        var t = this,
          e = ["<!-- 神壕金榜 -->", '<div class="match-result-content match-result-content5" style="display: none;">', '<div class="area-list-title2">', '<div class="title"><span class="title-txt">全站用户总榜</span></div>', '<div class="area-list-title-hint">活动时间：11月17日~11月26日</div>', "</div>", '<div class="area-list-box">', "<!-- 榜单 -->", '<div class="area-list-content">', "{{ #rankList }}", "</div>", "</div>", '<div class="area-list-box area-list-box2">', '    <div class="area-list-title">', '        <h3><span class="highlight">神豪榜</span>奖励</h3>', "    </div>", '    <ul class="heroic-list">', "        <li>", '            <div class="heroic-list-rank heroic-top-three"><span class="hl-rank-icon"></span>第1名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item1">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">超级节奏风暴火箭x10</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item2">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">节奏风暴火箭x50</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">专属定制发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "        <li>", '            <div class="heroic-list-rank heroic-top-three"><span class="hl-rank-icon"></span>第2名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item1">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">超级节奏风暴火箭x5</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item2">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">节奏风暴火箭x30</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">专属定制发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "        <li>", '            <div class="heroic-list-rank heroic-top-three"><span class="hl-rank-icon"></span>第3名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item2">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">节奏风暴火箭x30</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">专属定制发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "        <li>", '            <div class="heroic-list-rank"><span class="hl-rank-icon"></span>第4名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item2">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">节奏风暴火箭x20</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">盛典统一发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "        <li>", '            <div class="heroic-list-rank"><span class="hl-rank-icon"></span>第5名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item2">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">节奏风暴火箭x10</span>  ', "                </div>", '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">盛典统一发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "        <li>", '            <div class="heroic-list-rank"><span class="hl-rank-icon"></span>第6~10名</div>', '            <div class="heroic-list-award">', '                <div class="hl-award-item hl-award-item3">', '                    <span class="hl-award-icon"></span>  ', '                    <span class="hl-award-txt">盛典统一发言后缀（180天）</span>  ', "                </div>", "            </div>", "        </li>", "    </ul>", '    <div class="heroic-award-qa">', '        <div class="ha-qa-box">', "            <h4>什么是节奏风暴火箭？</h4>", '            <div class="ha-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/img_s6.jpg?v=20171101"></div>', '            <span class="ha-qa-explain">送礼者发送火箭时录入指定口令</span>', '            <span class="ha-qa-explain">水友在抢定制火箭礼包时会自动发送此口令</span>', "        </div>", '        <div class="ha-qa-box">', '            <div class="ha-qa-box2">', "                <h4>专属定制发言后缀</h4>", '                <div class="ha-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s6.jpg?v=20171101"></div>', "            </div>", '            <div class="ha-qa-box2">', "                <h4>盛典统一发言后缀</h4>", '                <div class="ha-img-box"><img src="{{staticUrl}}/app/douyu/res/page/annualfestival/n_img_s7.jpg?v=20171101"></div>', "            </div>", "        </div>", "    </div>", "</div>"].join(""),
          s = i.compile(e),
          o = s({
            rankList: t.renderRankShenHaoList(a),
            staticUrl: n.get("sys.web_url")
          });
        return o
      },
      renderRankShenHaoList: function (a) {
        var t = this,
          e = ['<div class="area-list-content-title">', '<span class="al-title-rank">排名</span>', '<span class="al-title-name">用户</span>', '<span class="al-title-num">贡献总值</span>', "</div>", '<div class="rank-scroll-warp">', '<ul class="area-list-inner">', "{{ each rankData as item index }}", "{{ if (item.idx === 1) }}", '<li class="the-top-one">', " {{ else }} ", "<li>", "{{ /if }}", '<span class="area-list-rank">{{ item.idx }}</span>', '<span class="area-list-icon"><img src="{{ item.avatar }}"></span>', '<span class="area-list-name" title="{{ item.nickname }}">{{ item.nickname }}</span>', '<span class="area-list-num">{{ item.sc }}</span>', "</li>", "{{ /each }}", "</ul>", "</div>"].join(""),
          n = i.compile(e),
          s = n({
            rankData: a,
            defaultImg: t.defaultConfigs.avatar
          });
        return s
      },
      handleFinalData: function (t, e) {
        var i = this.defaultConfigs,
          n = {},
          s = [];
        return t || (t = []), s = a.map(new Array(e), function (a, e) {
          var s = t[e];
          return n = s ? {
            nickname: s.nickname || "虚位以待",
            avatar: s.avatar || i.avatar,
            idx: s.idx || e + 1,
            uid: s.uid || "",
            sc: 0 == s.sc ? "--" : s.sc,
            room_id: "/" + s.room_id || "javascript:;"
          } : {
            nickname: "虚位以待",
            avatar: i.avatar,
            idx: e + 1,
            uid: "",
            sc: "--",
            room_id: "javascript:;"
          }
        })
      },
      updateTabState: function (t) {
        var e = a(".subarea-list"),
          i = this,
          n = i.doms,
          s = i.tabConfig,
          o = i.mainTabMap,
          r = s[t],
          l = a('.lift-nav[data-flag="' + t + '"]');
        if (r) {
          if (i.curMainTab = t, t != o.PaiWeiTab && t != o.XiaoZuTab && t != o.ChongCiTab || (l = a('.lift-nav[data-flag="PaiWeiTab"]')), this.flag && l && l.length) {
            a(".lift-nav").removeClass("cur"), l.addClass("cur"), e.addClass("subarea-list");
            var d = a("body").width();
            1800 >= d ? e.hide() : e.show()
          }
          this.flag = !0, n.$tabSwitch.removeClass("cur").eq(r.index).addClass("cur"), r.tabConDom && (n.$tabContainer.find(".match-result-content").hide(), r.tabConDom.show())
        }
      },
      enterDefaultTab: function () {
        var a = this,
          t = ($schedule || {}, $schedule.stage),
          e = ($schedule.round, $schedule.date),
          i = a.mainTabMap,
          n = i.ShengDianTab;
        n = 6 == t ? i.PaiWeiTab : 7 == t ? i.XiaoZuTab : 8 == t ? i.ChongCiTab : 10 == t ? i.ShengDianTab : 19 == e ? i.XiaoZuTab : i.ShengDianTab, a.tabContentAgent(i.ChongCiTab)
      },
      getJsonData: function () {
        var a = this,
          t = a.tabConfig.XiaoZuTab;
        s.load(t.zbUrl, "annual2017ZBList", function (e) {
          s.load(t.pkUrl, "annual2017PkDetail", function (i) {
            var n = i.pkdetail;
            for (var s in n) {
              var o = n[s];
              for (var r in o)
                for (var l = o[r], d = 0; d < l.length; d++) {
                  var c = l[d];
                  c && (c.lrid = c.room_id1, c.rrid = c.room_id2, e && c.room_id1 && c.room_id2 && e[c.room_id1] && e[c.room_id2] && (c.lnickname = e[c.room_id1].nickname, c.rnickname = e[c.room_id2].nickname, c.lavatar = e[c.room_id1].avatar, c.ravatar = e[c.room_id2].avatar))
                }
            }
            t.pkDetail = n, a.enterDefaultTab()
          }, function () {
            a.enterDefaultTab()
          })
        }, function () {
          a.enterDefaultTab()
        })
      }
    };
    return {
      init: function () {
        d.init()
      }
    }
  }), define("douyu/page/", ["jquery", "douyu/com/zoom", "douyu/com/kill-ie", "douyu/page/annualfestival/mod/semifinal-lift", "douyu/page/annualfestival/mod/semifinal", "douyu/page/annualfestival/mod/semifinal-rank"], function (a, t, e, i, n, s) {
    var o = function () {
      e.init(), n.init(), s.init(), i.init()
    };
    a(o)
  }), window.addEventListener && (window.onload = function () {
    var a = ['<video autoplay="" loop="">', '    <source src="//res.douyucdn.cn/resource/2017/10/27/dy_asset_pkg/dbab3d3e8a0d3b9cda837601eb9cf26c.mp4">', "</video>"].join("");
    $(".top-banner.tab03").append(a)
  });
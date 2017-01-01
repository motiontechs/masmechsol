﻿/* jQuery Superfish Menu Plugin - v1.7.4
* Copyright (c) 2013 Joel Birch
*
* Dual licensed under the MIT and GPL licenses:
*	http://www.opensource.org/licenses/mit-license.php
*	http://www.gnu.org/licenses/gpl.html
*/

; (function (e) { "use strict"; var s = function () { var s = { bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows" }, o = function () { var s = /iPhone|iPad|iPod/i.test(navigator.userAgent); return s && e(window).load(function () { e("body").children().on("click", e.noop) }), s } (), n = function () { var e = document.documentElement.style; return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent) } (), t = function (e, o) { var n = s.menuClass; o.cssArrows && (n += " " + s.menuArrowClass), e.toggleClass(n) }, i = function (o, n) { return o.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + s.bcClass).filter(function () { return e(this).children(n.popUpSelector).hide().show().length }).removeClass(n.pathClass) }, r = function (e) { e.children("a").toggleClass(s.anchorClass) }, a = function (e) { var s = e.css("ms-touch-action"); s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s) }, l = function (s, t) { var i = "li:has(" + t.popUpSelector + ")"; e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p); var r = "MSPointerDown.superfish"; o || (r += " touchend.superfish"), n && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", t, h) }, h = function (s) { var o = e(this), n = o.siblings(s.data.popUpSelector); n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))()) }, u = function () { var s = e(this), o = d(s); clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show") }, p = function () { var s = e(this), n = d(s); o ? e.proxy(f, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay)) }, f = function (s) { s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)()) }, c = function (e) { return e.closest("." + s.menuClass) }, d = function (e) { return c(e).data("sf-options") }; return { hide: function (s) { if (this.length) { var o = this, n = d(o); if (!n) return this; var t = n.retainPath === !0 ? n.$path : "", i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector), r = n.speedOut; s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i), i.stop(!0, !0).animate(n.animationOut, r, function () { var s = e(this); n.onHide.call(s) }) } return this }, show: function () { var e = d(this); if (!e) return this; var s = this.addClass(e.hoverClass), o = s.children(e.popUpSelector); return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function () { e.onShow.call(o) }), this }, destroy: function () { return this.each(function () { var o, n = e(this), i = n.data("sf-options"); return i ? (o = n.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(n, i), r(o), a(n), n.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function (e, s) { return s.replace(/display[^;]+;?/g, "") }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), n.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1 }) }, init: function (o) { return this.each(function () { var n = e(this); if (n.data("sf-options")) return !1; var h = e.extend({}, e.fn.superfish.defaults, o), u = n.find(h.popUpSelector).parent("li"); h.$path = i(n, h), n.data("sf-options", h), t(n, h), r(u), a(n), l(n, h), u.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this) }) } } } (); e.fn.superfish = function (o) { return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments) }, e.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: e.noop, onBeforeShow: e.noop, onShow: e.noop, onBeforeHide: e.noop, onHide: e.noop, onIdle: e.noop, onDestroy: e.noop }, e.fn.extend({ hideSuperfishUl: s.hide, showSuperfishUl: s.show }) })(jQuery);
// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function ($) {
    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function () {
        var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

        for (var i = 0; i < sticked.length; i++) {
            var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

            if (scrollTop <= etse) {
                if (s.currentTop !== null) {
                    s.stickyElement
              .css('position', '')
              .css('top', '');
                    s.stickyElement.parent().removeClass(s.className);
                    s.currentTop = null;
                }
            }
            else {
                var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                if (newTop < 0) {
                    newTop = newTop + s.topSpacing;
                } else {
                    newTop = s.topSpacing;
                }
                if (s.currentTop != newTop) {
                    s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

                    if (typeof s.getWidthFrom !== 'undefined') {
                        s.stickyElement.css('width', $(s.getWidthFrom).width());
                    }

                    s.stickyElement.parent().addClass(s.className);
                    s.currentTop = newTop;
                }
            }
        }
    },
    resizer = function () {
        windowHeight = $window.height();
    },
    methods = {
        init: function (options) {
            var o = $.extend(defaults, options);
            return this.each(function () {
                var stickyElement = $(this);

                var stickyId = stickyElement.attr('id');
                var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
                stickyElement.wrapAll(wrapper);

                if (o.center) {
                    stickyElement.parent().css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
                }

                if (stickyElement.css("float") == "right") {
                    stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
                }

                var stickyWrapper = stickyElement.parent();
                stickyWrapper.css('height', stickyElement.outerHeight());
                sticked.push({
                    topSpacing: o.topSpacing,
                    bottomSpacing: o.bottomSpacing,
                    stickyElement: stickyElement,
                    currentTop: null,
                    stickyWrapper: stickyWrapper,
                    className: o.className,
                    getWidthFrom: o.getWidthFrom
                });
            });
        },
        update: scroller
    };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function () {
        setTimeout(scroller, 0);
    });
})(jQuery);
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function (jQuery) {
    var jQuerywindow = jQuery(window);
    var windowHeight = jQuerywindow.height();

    jQuerywindow.resize(function () {
        windowHeight = jQuerywindow.height();
    });

    jQuery.fn.parallax = function (xpos, speedFactor, outerHeight) {
        var jQuerythis = jQuery(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it		
        jQuerythis.each(function () {
            firstTop = jQuerythis.offset().top;
        });

        if (outerHeight) {
            getHeight = function (jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function (jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = jQuerywindow.scrollTop();

            jQuerythis.each(function () {
                var jQueryelement = jQuery(this);
                var top = jQueryelement.offset().top;
                var height = getHeight(jQueryelement);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                jQuerythis.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        jQuerywindow.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);
/*
* jQuery FlexSlider v2.2.0
* Copyright 2012 WooThemes
* Contributing Author: Tyler Smith
*/
(function (e) { e.flexslider = function (t, n) { var r = e(t); r.vars = e.extend({}, e.flexslider.defaults, n); var i = r.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch, u = "click touchend MSPointerUp", a = "", f, l = r.vars.direction === "vertical", c = r.vars.reverse, h = r.vars.itemWidth > 0, p = r.vars.animation === "fade", d = r.vars.asNavFor !== "", v = {}, m = !0; e.data(t, "flexslider", r); v = { init: function () { r.animating = !1; r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0); isNaN(r.currentSlide) && (r.currentSlide = 0); r.animatingTo = r.currentSlide; r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last; r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" ")); r.slides = e(r.vars.selector, r); r.container = e(r.containerSelector, r); r.count = r.slides.length; r.syncExists = e(r.vars.sync).length > 0; r.vars.animation === "slide" && (r.vars.animation = "swing"); r.prop = l ? "top" : "marginLeft"; r.args = {}; r.manualPause = !1; r.stopped = !1; r.started = !1; r.startTimeout = null; r.transitions = !r.vars.video && !p && r.vars.useCSS && function () { var e = document.createElement("div"), t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]; for (var n in t) if (e.style[t[n]] !== undefined) { r.pfx = t[n].replace("Perspective", "").toLowerCase(); r.prop = "-" + r.pfx + "-transform"; return !0 } return !1 } (); r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer)); r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls)); if (r.vars.randomize) { r.slides.sort(function () { return Math.round(Math.random()) - .5 }); r.container.empty().append(r.slides) } r.doMath(); r.setup("init"); r.vars.controlNav && v.controlNav.setup(); r.vars.directionNav && v.directionNav.setup(); r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) { var t = e.keyCode; if (!r.animating && (t === 39 || t === 37)) { var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1; r.flexAnimate(n, r.vars.pauseOnAction) } }); r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) { e.preventDefault(); var s = t < 0 ? r.getTarget("next") : r.getTarget("prev"); r.flexAnimate(s, r.vars.pauseOnAction) }); r.vars.pausePlay && v.pausePlay.setup(); r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init(); if (r.vars.slideshow) { r.vars.pauseOnHover && r.hover(function () { !r.manualPlay && !r.manualPause && r.pause() }, function () { !r.manualPause && !r.manualPlay && !r.stopped && r.play() }); if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play() } d && v.asNav.setup(); o && r.vars.touch && v.touch(); (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize); r.find("img").attr("draggable", "false"); setTimeout(function () { r.vars.start(r) }, 200) }, asNav: { setup: function () { r.asNav = !0; r.animatingTo = Math.floor(r.currentSlide / r.move); r.currentItem = r.currentSlide; r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide"); if (!s) r.slides.click(function (t) { t.preventDefault(); var n = e(this), s = n.index(), o = n.offset().left - e(r).scrollLeft(); if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0); else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) { r.direction = r.currentItem < s ? "next" : "prev"; r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0) } }); else { t._slider = r; r.slides.each(function () { var t = this; t._gesture = new MSGesture; t._gesture.target = t; t.addEventListener("MSPointerDown", function (e) { e.preventDefault(); e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId) }, !1); t.addEventListener("MSGestureTap", function (t) { t.preventDefault(); var n = e(this), i = n.index(); if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) { r.direction = r.currentItem < i ? "next" : "prev"; r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0) } }) }) } } }, controlNav: { setup: function () { r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging() }, setupPaging: function () { var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging", n = 1, s, o; r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>'); if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) { o = r.slides.eq(f); s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>"; if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) { var l = o.attr("data-thumbcaption"); "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>") } r.controlNavScaffold.append("<li>" + s + "</li>"); n++ } r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold); v.controlNav.set(); v.controlNav.active(); r.controlNavScaffold.delegate("a, img", u, function (t) { t.preventDefault(); if (a === "" || a === t.type) { var n = e(this), s = r.controlNav.index(n); if (!n.hasClass(i + "active")) { r.direction = s > r.currentSlide ? "next" : "prev"; r.flexAnimate(s, r.vars.pauseOnAction) } } a === "" && (a = t.type); v.setToClearWatchedEvent() }) }, setupManual: function () { r.controlNav = r.manualControls; v.controlNav.active(); r.controlNav.bind(u, function (t) { t.preventDefault(); if (a === "" || a === t.type) { var n = e(this), s = r.controlNav.index(n); if (!n.hasClass(i + "active")) { s > r.currentSlide ? r.direction = "next" : r.direction = "prev"; r.flexAnimate(s, r.vars.pauseOnAction) } } a === "" && (a = t.type); v.setToClearWatchedEvent() }) }, set: function () { var t = r.vars.controlNav === "thumbnails" ? "img" : "a"; r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r) }, active: function () { r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active") }, update: function (t, n) { r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove(); v.controlNav.set(); r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active() } }, directionNav: { setup: function () { var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>"); if (r.controlsContainer) { e(r.controlsContainer).append(t); r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer) } else { r.append(t); r.directionNav = e("." + i + "direction-nav li a", r) } v.directionNav.update(); r.directionNav.bind(u, function (t) { t.preventDefault(); var n; if (a === "" || a === t.type) { n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev"); r.flexAnimate(n, r.vars.pauseOnAction) } a === "" && (a = t.type); v.setToClearWatchedEvent() }) }, update: function () { var e = i + "disabled"; r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex") } }, pausePlay: { setup: function () { var t = e('<div class="' + i + 'pauseplay"><a></a></div>'); if (r.controlsContainer) { r.controlsContainer.append(t); r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer) } else { r.append(t); r.pausePlay = e("." + i + "pauseplay a", r) } v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play"); r.pausePlay.bind(u, function (t) { t.preventDefault(); if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) { r.manualPause = !0; r.manualPlay = !1; r.pause() } else { r.manualPause = !1; r.manualPlay = !0; r.play() } a === "" && (a = t.type); v.setToClearWatchedEvent() }) }, update: function (e) { e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText) } }, touch: function () { var e, n, i, o, u, a, f = !1, d = 0, v = 0, m = 0; if (!s) { t.addEventListener("touchstart", g, !1); function g(s) { if (r.animating) s.preventDefault(); else if (window.navigator.msPointerEnabled || s.touches.length === 1) { r.pause(); o = l ? r.h : r.w; a = Number(new Date); d = s.touches[0].pageX; v = s.touches[0].pageY; i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o; e = l ? v : d; n = l ? d : v; t.addEventListener("touchmove", y, !1); t.addEventListener("touchend", b, !1) } } function y(t) { d = t.touches[0].pageX; v = t.touches[0].pageY; u = l ? e - v : e - d; f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n); var s = 500; if (!f || Number(new Date) - a > s) { t.preventDefault(); if (!p && r.transitions) { r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1); r.setProps(i + u, "setTouch") } } } function b(s) { t.removeEventListener("touchmove", y, !1); if (r.animatingTo === r.currentSlide && !f && u !== null) { var l = c ? -u : u, h = l > 0 ? r.getTarget("next") : r.getTarget("prev"); r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0) } t.removeEventListener("touchend", b, !1); e = null; n = null; u = null; i = null } } else { t.style.msTouchAction = "none"; t._gesture = new MSGesture; t._gesture.target = t; t.addEventListener("MSPointerDown", w, !1); t._slider = r; t.addEventListener("MSGestureChange", E, !1); t.addEventListener("MSGestureEnd", S, !1); function w(e) { e.stopPropagation(); if (r.animating) e.preventDefault(); else { r.pause(); t._gesture.addPointer(e.pointerId); m = 0; o = l ? r.h : r.w; a = Number(new Date); i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o } } function E(e) { e.stopPropagation(); var n = e.target._slider; if (!n) return; var r = -e.translationX, s = -e.translationY; m += l ? s : r; u = m; f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s); if (e.detail === e.MSGESTURE_FLAG_INERTIA) { setImmediate(function () { t._gesture.stop() }); return } if (!f || Number(new Date) - a > 500) { e.preventDefault(); if (!p && n.transitions) { n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1)); n.setProps(i + u, "setTouch") } } } function S(t) { t.stopPropagation(); var r = t.target._slider; if (!r) return; if (r.animatingTo === r.currentSlide && !f && u !== null) { var s = c ? -u : u, l = s > 0 ? r.getTarget("next") : r.getTarget("prev"); r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0) } e = null; n = null; u = null; i = null; m = 0 } } }, resize: function () { if (!r.animating && r.is(":visible")) { h || r.doMath(); if (p) v.smoothHeight(); else if (h) { r.slides.width(r.computedW); r.update(r.pagingCount); r.setProps() } else if (l) { r.viewport.height(r.h); r.setProps(r.h, "setTotal") } else { r.vars.smoothHeight && v.smoothHeight(); r.newSlides.width(r.computedW); r.setProps(r.computedW, "setTotal") } } }, smoothHeight: function (e) { if (!l || p) { var t = p ? r : r.viewport; e ? t.animate({ height: r.slides.eq(r.animatingTo).height() }, e) : t.height(r.slides.eq(r.animatingTo).height()) } }, sync: function (t) { var n = e(r.vars.sync).data("flexslider"), i = r.animatingTo; switch (t) { case "animate": n.flexAnimate(i, r.vars.pauseOnAction, !1, !0); break; case "play": !n.playing && !n.asNav && n.play(); break; case "pause": n.pause() } }, pauseInvisible: { visProp: null, init: function () { var e = ["webkit", "moz", "ms", "o"]; if ("hidden" in document) return "hidden"; for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden"); if (v.pauseInvisible.visProp) { var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange"; document.addEventListener(n, function () { v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play() }) } }, isHidden: function () { return document[v.pauseInvisible.visProp] || !1 } }, setToClearWatchedEvent: function () { clearTimeout(f); f = setTimeout(function () { a = "" }, 3e3) } }; r.flexAnimate = function (t, n, s, u, a) { !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev"); d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev"); if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) { if (d && u) { var f = e(r.vars.asNavFor).data("flexslider"); r.atEnd = t === 0 || t === r.count - 1; f.flexAnimate(t, !0, !1, !0, a); r.direction = r.currentItem < t ? "next" : "prev"; f.direction = r.direction; if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) { r.currentItem = t; r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"); return !1 } r.currentItem = t; r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"); t = Math.floor(t / r.visible) } r.animating = !0; r.animatingTo = t; n && r.pause(); r.vars.before(r); r.syncExists && !a && v.sync("animate"); r.vars.controlNav && v.controlNav.active(); h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide"); r.atEnd = t === 0 || t === r.last; r.vars.directionNav && v.directionNav.update(); if (t === r.last) { r.vars.end(r); r.vars.animationLoop || r.pause() } if (!p) { var m = l ? r.slides.filter(":first").height() : r.computedW, g, y, b; if (h) { g = r.vars.itemMargin; b = (r.itemW + g) * r.move * r.animatingTo; y = b > r.limit && r.visible !== 1 ? r.limit : b } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m; r.setProps(y, "", r.vars.animationSpeed); if (r.transitions) { if (!r.vars.animationLoop || !r.atEnd) { r.animating = !1; r.currentSlide = r.animatingTo } r.container.unbind("webkitTransitionEnd transitionend"); r.container.bind("webkitTransitionEnd transitionend", function () { r.wrapup(m) }) } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () { r.wrapup(m) }) } else if (!o) { r.slides.eq(r.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, r.vars.animationSpeed, r.vars.easing); r.slides.eq(t).css({ zIndex: 2 }).animate({ opacity: 1 }, r.vars.animationSpeed, r.vars.easing, r.wrapup) } else { r.slides.eq(r.currentSlide).css({ opacity: 0, zIndex: 1 }); r.slides.eq(t).css({ opacity: 1, zIndex: 2 }); r.wrapup(m) } r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed) } }; r.wrapup = function (e) { !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart")); r.animating = !1; r.currentSlide = r.animatingTo; r.vars.after(r) }; r.animateSlides = function () { !r.animating && m && r.flexAnimate(r.getTarget("next")) }; r.pause = function () { clearInterval(r.animatedSlides); r.animatedSlides = null; r.playing = !1; r.vars.pausePlay && v.pausePlay.update("play"); r.syncExists && v.sync("pause") }; r.play = function () { r.playing && clearInterval(r.animatedSlides); r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed); r.started = r.playing = !0; r.vars.pausePlay && v.pausePlay.update("pause"); r.syncExists && v.sync("play") }; r.stop = function () { r.pause(); r.stopped = !0 }; r.canAdvance = function (e, t) { var n = d ? r.pagingCount - 1 : r.last; return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0 }; r.getTarget = function (e) { r.direction = e; return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1 }; r.setProps = function (e, t, n) { var i = function () { var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo, i = function () { if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n; switch (t) { case "setTotal": return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e; case "setTouch": return c ? e : e; case "jumpEnd": return c ? e : r.count * e; case "jumpStart": return c ? r.count * e : e; default: return e } } (); return i * -1 + "px" } (); if (r.transitions) { i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)"; n = n !== undefined ? n / 1e3 + "s" : "0s"; r.container.css("-" + r.pfx + "-transition-duration", n) } r.args[r.prop] = i; (r.transitions || n === undefined) && r.container.css(r.args) }; r.setup = function (t) { if (!p) { var n, s; if (t === "init") { r.viewport = e('<div class="' + i + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(r).append(r.container); r.cloneCount = 0; r.cloneOffset = 0; if (c) { s = e.makeArray(r.slides).reverse(); r.slides = e(s); r.container.empty().append(r.slides) } } if (r.vars.animationLoop && !h) { r.cloneCount = 2; r.cloneOffset = 1; t !== "init" && r.container.find(".clone").remove(); r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true")) } r.newSlides = e(r.vars.selector, r); n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset; if (l && !h) { r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%"); setTimeout(function () { r.newSlides.css({ display: "block" }); r.doMath(); r.viewport.height(r.h); r.setProps(n * r.h, "init") }, t === "init" ? 100 : 0) } else { r.container.width((r.count + r.cloneCount) * 200 + "%"); r.setProps(n * r.computedW, "init"); setTimeout(function () { r.doMath(); r.newSlides.css({ width: r.computedW, "float": "left", display: "block" }); r.vars.smoothHeight && v.smoothHeight() }, t === "init" ? 100 : 0) } } else { r.slides.css({ width: "100%", "float": "left", marginRight: "-100%", position: "relative" }); t === "init" && (o ? r.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(r.currentSlide).css({ opacity: 1, zIndex: 2 }) : r.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(r.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, r.vars.animationSpeed, r.vars.easing)); r.vars.smoothHeight && v.smoothHeight() } h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide") }; r.doMath = function () { var e = r.slides.first(), t = r.vars.itemMargin, n = r.vars.minItems, i = r.vars.maxItems; r.w = r.viewport === undefined ? r.width() : r.viewport.width(); r.h = e.height(); r.boxPadding = e.outerWidth() - e.width(); if (h) { r.itemT = r.vars.itemWidth + t; r.minW = n ? n * r.itemT : r.w; r.maxW = i ? i * r.itemT - t : r.w; r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth; r.visible = Math.floor(r.w / r.itemW); r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible; r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1); r.last = r.pagingCount - 1; r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t } else { r.itemW = r.w; r.pagingCount = r.count; r.last = r.count - 1 } r.computedW = r.itemW - r.boxPadding }; r.update = function (e, t) { r.doMath(); if (!h) { e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1); r.animatingTo = r.currentSlide } if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add"); else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) { if (h && r.currentSlide > r.last) { r.currentSlide -= 1; r.animatingTo -= 1 } v.controlNav.update("remove", r.last) } r.vars.directionNav && v.directionNav.update() }; r.addSlide = function (t, n) { var i = e(t); r.count += 1; r.last = r.count - 1; l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i); r.update(n, "add"); r.slides = e(r.vars.selector + ":not(.clone)", r); r.setup(); r.vars.added(r) }; r.removeSlide = function (t) { var n = isNaN(t) ? r.slides.index(e(t)) : t; r.count -= 1; r.last = r.count - 1; isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove(); r.doMath(); r.update(n, "remove"); r.slides = e(r.vars.selector + ":not(.clone)", r); r.setup(); r.vars.removed(r) }; v.init() }; e(window).blur(function (e) { focused = !1 }).focus(function (e) { focused = !0 }); e.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "", nextText: "", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function () { }, before: function () { }, after: function () { }, end: function () { }, added: function () { }, removed: function () { } }; e.fn.flexslider = function (t) { t === undefined && (t = {}); if (typeof t == "object") return this.each(function () { var n = e(this), r = t.selector ? t.selector : ".slides > li", i = n.find(r); if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) { i.fadeIn(400); t.start && t.start(n) } else n.data("flexslider") === undefined && new e.flexslider(this, t) }); var n = e(this).data("flexslider"); switch (t) { case "play": n.play(); break; case "pause": n.pause(); break; case "stop": n.stop(); break; case "next": n.flexAnimate(n.getTarget("next"), !0); break; case "prev": case "previous": n.flexAnimate(n.getTarget("prev"), !0); break; default: typeof t == "number" && n.flexAnimate(t, !0) } } })(jQuery);
/*! jCarousel - v0.3.0 - 2013-11-22
* http://sorgalla.com/jcarousel
* Copyright (c) 2013 Jan Sorgalla; Licensed MIT */
(function (t) { "use strict"; var i = t.jCarousel = {}; i.version = "0.3.0"; var s = /^([+\-]=)?(.+)$/; i.parseTarget = function (t) { var i = !1, e = "object" != typeof t ? s.exec(t) : null; return e ? (t = parseInt(e[2], 10) || 0, e[1] && (i = !0, "-=" === e[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0), { target: t, relative: i} }, i.detectCarousel = function (t) { for (var i; t.length > 0; ) { if (i = t.filter("[data-jcarousel]"), i.length > 0) return i; if (i = t.find("[data-jcarousel]"), i.length > 0) return i; t = t.parent() } return null }, i.base = function (s) { return { version: i.version, _options: {}, _element: null, _carousel: null, _init: t.noop, _create: t.noop, _destroy: t.noop, _reload: t.noop, create: function () { return this._element.attr("data-" + s.toLowerCase(), !0).data(s, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this) }, destroy: function () { return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(s).removeAttr("data-" + s.toLowerCase()), this) }, reload: function (t) { return !1 === this._trigger("reload") ? this : (t && this.options(t), this._reload(), this._trigger("reloadend"), this) }, element: function () { return this._element }, options: function (i, s) { if (0 === arguments.length) return t.extend({}, this._options); if ("string" == typeof i) { if (s === void 0) return this._options[i] === void 0 ? null : this._options[i]; this._options[i] = s } else this._options = t.extend({}, this._options, i); return this }, carousel: function () { return this._carousel || (this._carousel = i.detectCarousel(this.options("carousel") || this._element), this._carousel || t.error('Could not detect carousel for plugin "' + s + '"')), this._carousel }, _trigger: function (i, e, r) { var n, o = !1; return r = [this].concat(r || []), (e || this._element).each(function () { n = t.Event((s + ":" + i).toLowerCase()), t(this).trigger(n, r), n.isDefaultPrevented() && (o = !0) }), !o } } }, i.plugin = function (s, e) { var r = t[s] = function (i, s) { this._element = t(i), this.options(s), this._init(), this.create() }; return r.fn = r.prototype = t.extend({}, i.base(s), e), t.fn[s] = function (i) { var e = Array.prototype.slice.call(arguments, 1), n = this; return "string" == typeof i ? this.each(function () { var r = t(this).data(s); if (!r) return t.error("Cannot call methods on " + s + " prior to initialization; " + 'attempted to call method "' + i + '"'); if (!t.isFunction(r[i]) || "_" === i.charAt(0)) return t.error('No such method "' + i + '" for ' + s + " instance"); var o = r[i].apply(r, e); return o !== r && o !== void 0 ? (n = o, !1) : void 0 }) : this.each(function () { var e = t(this).data(s); e instanceof r ? e.reload(i) : new r(this, i) }), n }, r } })(jQuery), function (t, i) { "use strict"; var s = function (t) { return parseFloat(t) || 0 }; t.jCarousel.plugin("jcarousel", { animating: !1, tail: 0, inTail: !1, resizeTimer: null, lt: null, vertical: !1, rtl: !1, circular: !1, underflow: !1, relative: !1, _options: { list: function () { return this.element().children().eq(0) }, items: function () { return this.list().children() }, animation: 400, transitions: !1, wrap: null, vertical: null, rtl: null, center: !1 }, _list: null, _items: null, _target: null, _first: null, _last: null, _visible: null, _fullyvisible: null, _init: function () { var t = this; return this.onWindowResize = function () { t.resizeTimer && clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function () { t.reload() }, 100) }, this }, _create: function () { this._reload(), t(i).on("resize.jcarousel", this.onWindowResize) }, _destroy: function () { t(i).off("resize.jcarousel", this.onWindowResize) }, _reload: function () { this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function (i) { if ("rtl" === ("" + i.attr("dir")).toLowerCase()) return !0; var s = !1; return i.parents("[dir]").each(function () { return /rtl/i.test(t(this).attr("dir")) ? (s = !0, !1) : void 0 }), s } (this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null; var i = this._target && this.index(this._target) >= 0 ? this._target : this.closest(); this.circular = "circular" === this.options("wrap"), this.underflow = !1; var s = { left: 0, top: 0 }; return i.length > 0 && (this._prepare(i), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, s[this.lt] = this._position(i) + "px"), this.move(s), this }, list: function () { if (null === this._list) { var i = this.options("list"); this._list = t.isFunction(i) ? i.call(this) : this._element.find(i) } return this._list }, items: function () { if (null === this._items) { var i = this.options("items"); this._items = (t.isFunction(i) ? i.call(this) : this.list().find(i)).not("[data-jcarousel-clone]") } return this._items }, index: function (t) { return this.items().index(t) }, closest: function () { var i, e = this, r = this.list().position()[this.lt], n = t(), o = !1, l = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right"; return this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.items().each(function () { if (n = t(this), o) return !1; var a = e.dimension(n); if (r += a, r >= 0) { if (i = a - s(n.css("margin-" + l)), !(0 >= Math.abs(r) - a + i / 2)) return !1; o = !0 } }), n }, target: function () { return this._target }, first: function () { return this._first }, last: function () { return this._last }, visible: function () { return this._visible }, fullyvisible: function () { return this._fullyvisible }, hasNext: function () { if (!1 === this._trigger("hasnext")) return !0; var t = this.options("wrap"), i = this.items().length - 1; return i >= 0 && (t && "first" !== t || i > this.index(this._last) || this.tail && !this.inTail) ? !0 : !1 }, hasPrev: function () { if (!1 === this._trigger("hasprev")) return !0; var t = this.options("wrap"); return this.items().length > 0 && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1 }, clipping: function () { return this._element["inner" + (this.vertical ? "Height" : "Width")]() }, dimension: function (t) { return t["outer" + (this.vertical ? "Height" : "Width")](!0) }, scroll: function (i, s, e) { if (this.animating) return this; if (!1 === this._trigger("scroll", null, [i, s])) return this; t.isFunction(s) && (e = s, s = !0); var r = t.jCarousel.parseTarget(i); if (r.relative) { var n, o, l, a, h, u, c, f, d = this.items().length - 1, _ = Math.abs(r.target), p = this.options("wrap"); if (r.target > 0) { var v = this.index(this._last); if (v >= d && this.tail) this.inTail ? "both" === p || "last" === p ? this._scroll(0, s, e) : t.isFunction(e) && e.call(this, !1) : this._scrollTail(s, e); else if (n = this.index(this._target), this.underflow && n === d && ("circular" === p || "both" === p || "last" === p) || !this.underflow && v === d && ("both" === p || "last" === p)) this._scroll(0, s, e); else if (l = n + _, this.circular && l > d) { for (f = d, h = this.items().get(-1); l > f++; ) h = this.items().eq(0), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(h), u || (c = {}, c[this.lt] = this.dimension(h), this.moveBy(c)), this._items = null; this._scroll(h, s, e) } else this._scroll(Math.min(l, d), s, e) } else if (this.inTail) this._scroll(Math.max(this.index(this._first) - _ + 1, 0), s, e); else if (o = this.index(this._first), n = this.index(this._target), a = this.underflow ? n : o, l = a - _, 0 >= a && (this.underflow && "circular" === p || "both" === p || "first" === p)) this._scroll(d, s, e); else if (this.circular && 0 > l) { for (f = l, h = this.items().get(0); 0 > f++; ) { h = this.items().eq(-1), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(h), this._items = null; var g = this.dimension(h); c = {}, c[this.lt] = -g, this.moveBy(c) } this._scroll(h, s, e) } else this._scroll(Math.max(l, 0), s, e) } else this._scroll(r.target, s, e); return this._trigger("scrollend"), this }, moveBy: function (t, i) { var e = this.list().position(), r = 1, n = 0; return this.rtl && !this.vertical && (r = -1, this.relative && (n = this.list().width() - this.clipping())), t.left && (t.left = e.left + n + s(t.left) * r + "px"), t.top && (t.top = e.top + n + s(t.top) * r + "px"), this.move(t, i) }, move: function (i, s) { s = s || {}; var e = this.options("transitions"), r = !!e, n = !!e.transforms, o = !!e.transforms3d, l = s.duration || 0, a = this.list(); if (!r && l > 0) return a.animate(i, s), void 0; var h = s.complete || t.noop, u = {}; if (r) { var c = a.css(["transitionDuration", "transitionTimingFunction", "transitionProperty"]), f = h; h = function () { t(this).css(c), f.call(this) }, u = { transitionDuration: (l > 0 ? l / 1e3 : 0) + "s", transitionTimingFunction: e.easing || s.easing, transitionProperty: l > 0 ? function () { return n || o ? "all" : i.left ? "left" : "top" } () : "none", transform: "none"} } o ? u.transform = "translate3d(" + (i.left || 0) + "," + (i.top || 0) + ",0)" : n ? u.transform = "translate(" + (i.left || 0) + "," + (i.top || 0) + ")" : t.extend(u, i), r && l > 0 && a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", h), a.css(u), 0 >= l && a.each(function () { h.call(this) }) }, _scroll: function (i, s, e) { if (this.animating) return t.isFunction(e) && e.call(this, !1), this; if ("object" != typeof i ? i = this.items().eq(i) : i.jquery === void 0 && (i = t(i)), 0 === i.length) return t.isFunction(e) && e.call(this, !1), this; this.inTail = !1, this._prepare(i); var r = this._position(i), n = this.list().position()[this.lt]; if (r === n) return t.isFunction(e) && e.call(this, !1), this; var o = {}; return o[this.lt] = r + "px", this._animate(o, s, e), this }, _scrollTail: function (i, s) { if (this.animating || !this.tail) return t.isFunction(s) && s.call(this, !1), this; var e = this.list().position()[this.lt]; this.rtl && this.relative && !this.vertical && (e += this.list().width() - this.clipping()), this.rtl && !this.vertical ? e += this.tail : e -= this.tail, this.inTail = !0; var r = {}; return r[this.lt] = e + "px", this._update({ target: this._target.next(), fullyvisible: this._fullyvisible.slice(1).add(this._visible.last()) }), this._animate(r, i, s), this }, _animate: function (i, s, e) { if (e = e || t.noop, !1 === this._trigger("animate")) return e.call(this, !1), this; this.animating = !0; var r = this.options("animation"), n = t.proxy(function () { this.animating = !1; var t = this.list().find("[data-jcarousel-clone]"); t.length > 0 && (t.remove(), this._reload()), this._trigger("animateend"), e.call(this, !0) }, this), o = "object" == typeof r ? t.extend({}, r) : { duration: r }, l = o.complete || t.noop; return s === !1 ? o.duration = 0 : t.fx.speeds[o.duration] !== void 0 && (o.duration = t.fx.speeds[o.duration]), o.complete = function () { n(), l.call(this) }, this.move(i, o), this }, _prepare: function (i) { var e, r, n, o, l = this.index(i), a = l, h = this.dimension(i), u = this.clipping(), c = this.vertical ? "bottom" : this.rtl ? "left" : "right", f = this.options("center"), d = { target: i, first: i, last: i, visible: i, fullyvisible: u >= h ? i : t() }; if (f && (h /= 2, u /= 2), u > h) for (; ; ) { if (e = this.items().eq(++a), 0 === e.length) { if (!this.circular) break; if (e = this.items().eq(0), i.get(0) === e.get(0)) break; if (r = this._visible.index(e) >= 0, r && e.after(e.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(e), !r) { var _ = {}; _[this.lt] = this.dimension(e), this.moveBy(_) } this._items = null } if (o = this.dimension(e), 0 === o) break; if (h += o, d.last = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u) break } if (!this.circular && !f && u > h) for (a = l; ; ) { if (0 > --a) break; if (e = this.items().eq(a), 0 === e.length) break; if (o = this.dimension(e), 0 === o) break; if (h += o, d.first = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u) break } return this._update(d), this.tail = 0, f || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(d.last) !== this.items().length - 1 || (h -= s(d.last.css("margin-" + c)), h > u && (this.tail = h - u)), this }, _position: function (t) { var i = this._first, s = i.position()[this.lt], e = this.options("center"), r = e ? this.clipping() / 2 - this.dimension(i) / 2 : 0; return this.rtl && !this.vertical ? (s -= this.relative ? this.list().width() - this.dimension(i) : this.clipping() - this.dimension(i), s += r) : s -= r, !e && (this.index(t) > this.index(i) || this.inTail) && this.tail ? (s = this.rtl && !this.vertical ? s - this.tail : s + this.tail, this.inTail = !0) : this.inTail = !1, -s }, _update: function (i) { var s, e = this, r = { target: this._target || t(), first: this._first || t(), last: this._last || t(), visible: this._visible || t(), fullyvisible: this._fullyvisible || t() }, n = this.index(i.first || r.first) < this.index(r.first), o = function (s) { var o = [], l = []; i[s].each(function () { 0 > r[s].index(this) && o.push(this) }), r[s].each(function () { 0 > i[s].index(this) && l.push(this) }), n ? o = o.reverse() : l = l.reverse(), e._trigger(s + "in", t(o)), e._trigger(s + "out", t(l)), e["_" + s] = i[s] }; for (s in i) o(s); return this } }) } (jQuery, window), function (t) { "use strict"; t.jcarousel.fn.scrollIntoView = function (i, s, e) { var r, n = t.jCarousel.parseTarget(i), o = this.index(this._fullyvisible.first()), l = this.index(this._fullyvisible.last()); if (r = n.relative ? 0 > n.target ? Math.max(0, o + n.target) : l + n.target : "object" != typeof n.target ? n.target : this.index(n.target), o > r) return this.scroll(r, s, e); if (r >= o && l >= r) return t.isFunction(e) && e.call(this, !1), this; for (var a, h = this.items(), u = this.clipping(), c = this.vertical ? "bottom" : this.rtl ? "left" : "right", f = 0; ; ) { if (a = h.eq(r), 0 === a.length) break; if (f += this.dimension(a), f >= u) { var d = parseFloat(a.css("margin-" + c)) || 0; f - d !== u && r++; break } if (0 >= r) break; r-- } return this.scroll(r, s, e) } } (jQuery), function (t) { "use strict"; t.jCarousel.plugin("jcarouselControl", { _options: { target: "+=1", event: "click", method: "scroll" }, _active: null, _init: function () { this.onDestroy = t.proxy(function () { this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this)) }, this), this.onReload = t.proxy(this._reload, this), this.onEvent = t.proxy(function (i) { i.preventDefault(); var s = this.options("method"); t.isFunction(s) ? s.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target")) }, this) }, _create: function () { this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload() }, _destroy: function () { this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload) }, _reload: function () { var i, s = t.jCarousel.parseTarget(this.options("target")), e = this.carousel(); if (s.relative) i = e.jcarousel(s.target > 0 ? "hasNext" : "hasPrev"); else { var r = "object" != typeof s.target ? e.jcarousel("items").eq(s.target) : s.target; i = e.jcarousel("target").index(r) >= 0 } return this._active !== i && (this._trigger(i ? "active" : "inactive"), this._active = i), this } }) } (jQuery), function (t) { "use strict"; t.jCarousel.plugin("jcarouselPagination", { _options: { perPage: null, item: function (t) { return '<a href="#' + t + '">' + t + "</a>" }, event: "click", method: "scroll" }, _pages: {}, _items: {}, _currentPage: null, _init: function () { this.onDestroy = t.proxy(function () { this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this)) }, this), this.onReload = t.proxy(this._reload, this), this.onScroll = t.proxy(this._update, this) }, _create: function () { this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload() }, _destroy: function () { this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll) }, _reload: function () { var i = this.options("perPage"); if (this._pages = {}, this._items = {}, t.isFunction(i) && (i = i.call(this)), null == i) this._pages = this._calculatePages(); else for (var s, e = parseInt(i, 10) || 0, r = this.carousel().jcarousel("items"), n = 1, o = 0; ; ) { if (s = r.eq(o++), 0 === s.length) break; this._pages[n] = this._pages[n] ? this._pages[n].add(s) : s, 0 === o % e && n++ } this._clear(); var l = this, a = this.carousel().data("jcarousel"), h = this._element, u = this.options("item"); t.each(this._pages, function (i, s) { var e = l._items[i] = t(u.call(l, i, s)); e.on(l.options("event") + ".jcarouselpagination", t.proxy(function () { var t = s.eq(0); if (a.circular) { var e = a.index(a.target()), r = a.index(t); parseFloat(i) > parseFloat(l._currentPage) ? e > r && (t = "+=" + (a.items().length - e + r)) : r > e && (t = "-=" + (e + (a.items().length - r))) } a[this.options("method")](t) }, l)), h.append(e) }), this._update() }, _update: function () { var i, s = this.carousel().jcarousel("target"); t.each(this._pages, function (t, e) { return e.each(function () { return s.is(this) ? (i = t, !1) : void 0 }), i ? !1 : void 0 }), this._currentPage !== i && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[i])), this._currentPage = i }, items: function () { return this._items }, _clear: function () { this._element.empty(), this._currentPage = null }, _calculatePages: function () { for (var t, i = this.carousel().data("jcarousel"), s = i.items(), e = i.clipping(), r = 0, n = 0, o = 1, l = {}; ; ) { if (t = s.eq(n++), 0 === t.length) break; l[o] = l[o] ? l[o].add(t) : t, r += i.dimension(t), r >= e && (o++, r = 0) } return l } }) } (jQuery), function (t) { "use strict"; t.jCarousel.plugin("jcarouselAutoscroll", { _options: { target: "+=1", interval: 3e3, autostart: !0 }, _timer: null, _init: function () { this.onDestroy = t.proxy(function () { this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this)) }, this), this.onAnimateEnd = t.proxy(this.start, this) }, _create: function () { this.carousel().one("jcarousel:destroy", this.onDestroy), this.options("autostart") && this.start() }, _destroy: function () { this.stop(), this.carousel().off("jcarousel:destroy", this.onDestroy) }, start: function () { return this.stop(), this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(t.proxy(function () { this.carousel().jcarousel("scroll", this.options("target")) }, this), this.options("interval")), this }, stop: function () { return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this } }) } (jQuery);

(function ($) {
    $(function () {
        $('.jcarousel').jcarousel();

        if ($(window).width() >= 768) {
            $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=3'
            });

            $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=3'
            });
        } else {
            $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

            $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        }


        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
/*! jQuery UI - v1.10.0 - 2013-02-01
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function ($) { $(".increase-value").click(function () { var $button = $(this); var oldValue = $button.parent().find("input").val(); var newVal = parseFloat(oldValue) + 1; $button.parent().find("input").val(newVal); }); })(jQuery);
(function (e, t) { function i(t, n) { var r, i, o, u = t.nodeName.toLowerCase(); return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t) } function s(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return e.css(this, "visibility") === "hidden" }).length } var n = 0, r = /^ui-id-\d+$/; e.ui = e.ui || {}; if (e.ui.version) return; e.extend(e.ui, { version: "1.10.0", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38} }), e.fn.extend({ _focus: e.fn.focus, focus: function (t, n) { return typeof t == "number" ? this.each(function () { var r = this; setTimeout(function () { e(r).focus(), n && n.call(r) }, t) }) : this._focus.apply(this, arguments) }, scrollParent: function () { var t; return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () { return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0) : t = this.parents().filter(function () { return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t }, zIndex: function (n) { if (n !== t) return this.css("zIndex", n); if (this.length) { var r = e(this[0]), i, s; while (r.length && r[0] !== document) { i = r.css("position"); if (i === "absolute" || i === "relative" || i === "fixed") { s = parseInt(r.css("zIndex"), 10); if (!isNaN(s) && s !== 0) return s } r = r.parent() } } return 0 }, uniqueId: function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++n) }) }, removeUniqueId: function () { return this.each(function () { r.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (n) { return !!e.data(n, t) } }) : function (t, n, r) { return !!e.data(t, r[3]) }, focusable: function (t) { return i(t, !isNaN(e.attr(t, "tabindex"))) }, tabbable: function (t) { var n = e.attr(t, "tabindex"), r = isNaN(n); return (r || n >= 0) && i(t, !r) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) { function u(t, n, r, s) { return e.each(i, function () { n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0) }), n } var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], s = r.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + r] = function (n) { return n === t ? o["inner" + r].call(this) : this.each(function () { e(this).css(s, u(this, n) + "px") }) }, e.fn["outer" + r] = function (t, n) { return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () { e(this).css(s, u(this, t, !0, n) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (n) { return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this) } } (e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({ disableSelection: function () { return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) { e.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } }), e.extend(e.ui, { plugin: { add: function (t, n, r) { var i, s = e.ui[t].prototype; for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]]) }, call: function (e, t, n) { var r, i = e.plugins[t]; if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return; for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n) } }, hasScroll: function (t, n) { if (e(t).css("overflow") === "hidden") return !1; var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1; return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i) } }) })(jQuery); (function (e, t) { var n = 0, r = Array.prototype.slice, i = e.cleanData; e.cleanData = function (t) { for (var n = 0, r; (r = t[n]) != null; n++) try { e(r).triggerHandler("remove") } catch (s) { } i(t) }, e.widget = function (t, n, r) { var i, s, o, u, a = {}, f = t.split(".")[0]; t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) { return !!e.data(t, i) }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function (e, t) { if (!this._createWidget) return new o(e, t); arguments.length && this._createWidget(e, t) }, e.extend(o, s, { version: r.version, _proto: e.extend({}, r), _childConstructors: [] }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, r) { if (!e.isFunction(r)) { a[t] = r; return } a[t] = function () { var e = function () { return n.prototype[t].apply(this, arguments) }, i = function (e) { return n.prototype[t].apply(this, e) }; return function () { var t = this._super, n = this._superApply, s; return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s } } () }), o.prototype = e.widget.extend(u, { widgetEventPrefix: s ? u.widgetEventPrefix : t }, a, { constructor: o, namespace: f, widgetName: t, widgetFullName: i }), s ? (e.each(s._childConstructors, function (t, n) { var r = n.prototype; e.widget(r.namespace + "." + r.widgetName, o, n._proto) }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o) }, e.widget.extend = function (n) { var i = r.call(arguments, 1), s = 0, o = i.length, u, a; for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a); return n }, e.widget.bridge = function (n, i) { var s = i.prototype.widgetFullName || n; e.fn[n] = function (o) { var u = typeof o == "string", a = r.call(arguments, 1), f = this; return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () { var r, i = e.data(this, s); if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'"); if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance"); r = i[o].apply(i, a); if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1 }) : this.each(function () { var t = e.data(this, s); t ? t.option(o || {})._init() : e.data(this, s, new i(o, this)) }), f } }, e.Widget = function () { }, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, r) { r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, { remove: function (e) { e.target === r && this.destroy() } }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (n, r) { var i = n, s, o, u; if (arguments.length === 0) return e.widget.extend({}, this.options); if (typeof n == "string") { i = {}, s = n.split("."), n = s.shift(); if (s.length) { o = i[n] = e.widget.extend({}, this.options[n]); for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]]; n = s.pop(); if (r === t) return o[n] === t ? null : o[n]; o[n] = r } else { if (r === t) return this.options[n] === t ? null : this.options[n]; i[n] = r } } return this._setOptions(i), this }, _setOptions: function (e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function (e, t) { return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this }, enable: function () { return this._setOption("disabled", !1) }, disable: function () { return this._setOption("disabled", !0) }, _on: function (t, n, r) { var i, s = this; typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function (r, o) { function u() { if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return; return (typeof o == "string" ? s[o] : o).apply(s, arguments) } typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++); var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2]; l ? i.delegate(l, f, u) : n.bind(f, u) }) }, _off: function (e, t) { t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t) }, _delay: function (e, t) { function n() { return (typeof e == "string" ? r[e] : e).apply(r, arguments) } var r = this; return setTimeout(n, t || 0) }, _hoverable: function (t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function (t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function (t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function (t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function (t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (t, n, r) { var i, s, o = this.options[t]; r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent; if (s) for (i in s) i in n || (n[i] = s[i]); return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, n) { e.Widget.prototype["_" + t] = function (r, i, s) { typeof i == "string" && (i = { effect: i }); var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t; i = i || {}, typeof i == "number" && (i = { duration: i }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) { e(this)[t](), s && s.call(r[0]), n() }) } }) })(jQuery); (function (e, t) { var n = !1; e(document).mouseup(function () { n = !1 }), e.widget("ui.mouse", { version: "1.10.0", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () { var t = this; this.element.bind("mousedown." + this.widgetName, function (e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function (n) { if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1 }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (t) { if (n) return; this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; if (!i || s || !this._mouseCapture(t)) return !0; this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { r.mouseDelayMet = !0 }, this.options.delay)); if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) { this._mouseStarted = this._mouseStart(t) !== !1; if (!this._mouseStarted) return t.preventDefault(), !0 } return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) { return r._mouseMove(e) }, this._mouseUpDelegate = function (e) { return r._mouseUp(e) }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0 }, _mouseMove: function (t) { return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function (t) { return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1 }, _mouseDistanceMet: function (e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }) })(jQuery); (function (e, t) { var n = 5; e.widget("ui.slider", e.ui.mouse, { version: "1.10.0", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, _create: function () { var t, n, r = this.options, i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = []; this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this.range = e([]), r.range && (r.range === !0 && (r.values ? r.values.length && r.values.length !== 2 ? r.values = [r.values[0], r.values[0]] : e.isArray(r.values) && (r.values = r.values.slice(0)) : r.values = [this._valueMin(), this._valueMin()]), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))), n = r.values && r.values.length || 1; for (t = i.length; t < n; t++) o.push(s); this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) { e.preventDefault() }).mouseenter(function () { r.disabled || e(this).addClass("ui-state-hover") }).mouseleave(function () { e(this).removeClass("ui-state-hover") }).focus(function () { r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus")) }).blur(function () { e(this).removeClass("ui-state-focus") }), this.handles.each(function (t) { e(this).data("ui-slider-handle-index", t) }), this._setOption("disabled", r.disabled), this._on(this.handles, this._handleEvents), this._refreshValue(), this._animateOff = !1 }, _destroy: function () { this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() }, _mouseCapture: function (t) { var n, r, i, s, o, u, a, f, l = this, c = this.options; return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), n = { x: t.pageX, y: t.pageY }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) { var n = Math.abs(r - l.values(t)); if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) i = n, s = e(this), o = t }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? { left: 0, top: 0} : { left: t.pageX - a.left - s.width() / 2, top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (e) { var t = { x: e.pageX, y: e.pageY }, n = this._normValueFromMouse(t); return this._slide(e, this._handleIndex, n), !1 }, _mouseStop: function (e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal" }, _normValueFromMouse: function (e) { var t, n, r, i, s; return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s) }, _start: function (e, t) { var n = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n) }, _slide: function (e, t, n) { var r, i, s; this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, { handle: this.handles[t], value: n, values: i }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, { handle: this.handles[t], value: n }), s !== !1 && this.value(n)) }, _stop: function (e, t) { var n = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n) }, _change: function (e, t) { if (!this._keySliding && !this._mouseSliding) { var n = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n) } }, value: function (e) { if (arguments.length) { this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0); return } return this._value() }, values: function (t, n) { var r, i, s; if (arguments.length > 1) { this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t); return } if (!arguments.length) return this._values(); if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value(); r = this.options.values, i = arguments[0]; for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s); this._refreshValue() }, _setOption: function (t, n) { var r, i = 0; e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments); switch (t) { case "disabled": n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0)) : this.handles.prop("disabled", !1); break; case "orientation": this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": this._animateOff = !0, this._refreshValue(); for (r = 0; r < i; r += 1) this._change(null, r); this._animateOff = !1; break; case "min": case "max": this._animateOff = !0, this._refreshValue(), this._animateOff = !1 } }, _value: function () { var e = this.options.value; return e = this._trimAlignValue(e), e }, _values: function (e) { var t, n, r; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t; n = this.options.values.slice(); for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]); return n }, _trimAlignValue: function (e) { if (e <= this._valueMin()) return this._valueMin(); if (e >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1, n = (e - this._valueMin()) % t, r = e - n; return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () { var t, n, r, i, s, o = this.options.range, u = this.options, a = this, f = this._animateOff ? !1 : u.animate, l = {}; this.options.values && this.options.values.length ? this.handles.each(function (r) { n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({ left: n + "%" }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({ width: n - t + "%" }, { queue: !1, duration: u.animate })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({ bottom: n + "%" }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({ height: n - t + "%" }, { queue: !1, duration: u.animate }))), t = n }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({ width: n + "%" }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({ width: 100 - n + "%" }, { queue: !1, duration: u.animate }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({ height: n + "%" }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({ height: 100 - n + "%" }, { queue: !1, duration: u.animate })) }, _handleEvents: { keydown: function (t) { var r, i, s, o, u = e(t.target).data("ui-slider-handle-index"); switch (t.keyCode) { case e.ui.keyCode.HOME: case e.ui.keyCode.END: case e.ui.keyCode.PAGE_UP: case e.ui.keyCode.PAGE_DOWN: case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: t.preventDefault(); if (!this._keySliding) { this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u); if (r === !1) return } } o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value(); switch (t.keyCode) { case e.ui.keyCode.HOME: s = this._valueMin(); break; case e.ui.keyCode.END: s = this._valueMax(); break; case e.ui.keyCode.PAGE_UP: s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n); break; case e.ui.keyCode.PAGE_DOWN: s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n); break; case e.ui.keyCode.UP: case e.ui.keyCode.RIGHT: if (i === this._valueMax()) return; s = this._trimAlignValue(i + o); break; case e.ui.keyCode.DOWN: case e.ui.keyCode.LEFT: if (i === this._valueMin()) return; s = this._trimAlignValue(i - o) } this._slide(t, u, s) }, keyup: function (t) { var n = e(t.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active")) } } }) })(jQuery);
(function ($) { $("#slider-range").slider({ range: true, min: 0, max: 1500, values: [0, 1500], slide: function (event, ui) { $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]); } }); $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1)); })(jQuery); /*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function (jQuery) {
    var jQuerywindow = jQuery(window);
    var windowHeight = jQuerywindow.height();

    jQuerywindow.resize(function () {
        windowHeight = jQuerywindow.height();
    });

    jQuery.fn.parallax = function (xpos, speedFactor, outerHeight) {
        var jQuerythis = jQuery(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it		
        jQuerythis.each(function () {
            firstTop = jQuerythis.offset().top;
        });

        if (outerHeight) {
            getHeight = function (jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function (jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = jQuerywindow.scrollTop();

            jQuerythis.each(function () {
                var jQueryelement = jQuery(this);
                var top = jQueryelement.offset().top;
                var height = getHeight(jQueryelement);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                jQuerythis.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        jQuerywindow.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);
// Generated by CoffeeScript 1.4.0
(function () {
    var $;

    $ = window.jQuery || window.Zepto || window.$;

    $.fn.fancySelect = function (opts) {
        var isiOS, settings;
        if (opts == null) {
            opts = {};
        }
        settings = $.extend({
            forceiOS: false,
            includeBlank: false,
            optionTemplate: function (optionEl) {
                return optionEl.text();
            },
            triggerTemplate: function (optionEl) {
                return optionEl.text();
            }
        }, opts);
        isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
        return this.each(function () {
            var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
            sel = $(this);
            if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
                return;
            }
            sel.addClass('fancified');
            sel.css({
                width: 1,
                height: 1,
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0
            });
            sel.wrap('<div class="fancy-select">');
            wrapper = sel.parent();
            if (sel.data('class')) {
                wrapper.addClass(sel.data('class'));
            }
            wrapper.append('<div class="trigger">');
            if (!(isiOS && !settings.forceiOS)) {
                wrapper.append('<ul class="options">');
            }
            trigger = wrapper.find('.trigger');
            options = wrapper.find('.options');
            disabled = sel.prop('disabled');
            if (disabled) {
                wrapper.addClass('disabled');
            }
            updateTriggerText = function () {
                var triggerHtml;
                triggerHtml = settings.triggerTemplate(sel.find(':selected'));
                return trigger.html(triggerHtml);
            };
            sel.on('blur.fs', function () {
                if (trigger.hasClass('open')) {
                    return setTimeout(function () {
                        return trigger.trigger('close.fs');
                    }, 120);
                }
            });
            trigger.on('close.fs', function () {
                trigger.removeClass('open');
                return options.removeClass('open');
            });
            trigger.on('click.fs', function () {
                var offParent, parent;
                if (!disabled) {
                    trigger.toggleClass('open');
                    if (isiOS && !settings.forceiOS) {
                        if (trigger.hasClass('open')) {
                            return sel.focus();
                        }
                    } else {
                        if (trigger.hasClass('open')) {
                            parent = trigger.parent();
                            offParent = parent.offsetParent();
                            if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
                                options.addClass('overflowing');
                            } else {
                                options.removeClass('overflowing');
                            }
                        }
                        options.toggleClass('open');
                        if (!isiOS) {
                            return sel.focus();
                        }
                    }
                }
            });
            sel.on('enable', function () {
                sel.prop('disabled', false);
                wrapper.removeClass('disabled');
                disabled = false;
                return copyOptionsToList();
            });
            sel.on('disable', function () {
                sel.prop('disabled', true);
                wrapper.addClass('disabled');
                return disabled = true;
            });
            sel.on('change.fs', function (e) {
                if (e.originalEvent && e.originalEvent.isTrusted) {
                    return e.stopPropagation();
                } else {
                    return updateTriggerText();
                }
            });
            sel.on('keydown', function (e) {
                var hovered, newHovered, w;
                w = e.which;
                hovered = options.find('.hover');
                hovered.removeClass('hover');
                if (!options.hasClass('open')) {
                    if (w === 13 || w === 32 || w === 38 || w === 40) {
                        e.preventDefault();
                        return trigger.trigger('click.fs');
                    }
                } else {
                    if (w === 38) {
                        e.preventDefault();
                        if (hovered.length && hovered.index() > 0) {
                            hovered.prev().addClass('hover');
                        } else {
                            options.find('li:last-child').addClass('hover');
                        }
                    } else if (w === 40) {
                        e.preventDefault();
                        if (hovered.length && hovered.index() < options.find('li').length - 1) {
                            hovered.next().addClass('hover');
                        } else {
                            options.find('li:first-child').addClass('hover');
                        }
                    } else if (w === 27) {
                        e.preventDefault();
                        trigger.trigger('click.fs');
                    } else if (w === 13 || w === 32) {
                        e.preventDefault();
                        hovered.trigger('click.fs');
                    } else if (w === 9) {
                        if (trigger.hasClass('open')) {
                            trigger.trigger('close.fs');
                        }
                    }
                    newHovered = options.find('.hover');
                    if (newHovered.length) {
                        options.scrollTop(0);
                        return options.scrollTop(newHovered.position().top - 12);
                    }
                }
            });
            options.on('click.fs', 'li', function (e) {
                var clicked;
                clicked = $(this);
                sel.val(clicked.data('raw-value'));
                if (!isiOS) {
                    sel.trigger('blur.fs').trigger('focus.fs');
                }
                options.find('.selected').removeClass('selected');
                clicked.addClass('selected');
                return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
            });
            options.on('mouseenter.fs', 'li', function () {
                var hovered, nowHovered;
                nowHovered = $(this);
                hovered = options.find('.hover');
                hovered.removeClass('hover');
                return nowHovered.addClass('hover');
            });
            options.on('mouseleave.fs', 'li', function () {
                return options.find('.hover').removeClass('hover');
            });
            copyOptionsToList = function () {
                var selOpts;
                updateTriggerText();
                if (isiOS && !settings.forceiOS) {
                    return;
                }
                selOpts = sel.find('option');
                return sel.find('option').each(function (i, opt) {
                    var optHtml;
                    opt = $(opt);
                    if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
                        optHtml = settings.optionTemplate(opt);
                        if (opt.prop('selected')) {
                            return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
                        } else {
                            return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
                        }
                    }
                });
            };
            sel.on('update.fs', function () {
                wrapper.find('.options').empty();
                return copyOptionsToList();
            });
            return copyOptionsToList();
        });
    };

}).call(this);
/*
* jQuery appear plugin
*
* Copyright (c) 2012 Andrey Sidorov
* licensed under MIT license.
*
* https://github.com/morr/jquery.appear/
*
* Version: 0.3.3
*/
(function ($) {
    if ($(window).width() > 1024) {


        var selectors = [];

        var check_binded = false;
        var check_lock = false;
        var defaults = {
            interval: 250,
            force_process: false
        }
        var $window = $(window);

        var $prior_appeared;

        function process() {
            check_lock = false;
            for (var index = 0; index < selectors.length; index++) {
                var $appeared = $(selectors[index]).filter(function () {
                    return $(this).is(':appeared');
                });

                $appeared.trigger('appear', [$appeared]);

                if ($prior_appeared) {
                    var $disappeared = $prior_appeared.not($appeared);
                    $disappeared.trigger('disappear', [$disappeared]);
                }
                $prior_appeared = $appeared;
            }
        }

        // "appeared" custom filter
        $.expr[':']['appeared'] = function (element) {
            var $element = $(element);
            if (!$element.is(':visible')) {
                return false;
            }

            var window_left = $window.scrollLeft();
            var window_top = $window.scrollTop();
            var offset = $element.offset();
            var left = offset.left;
            var top = offset.top;

            if (top + $element.height() >= window_top &&
            top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
            left + $element.width() >= window_left &&
            left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
                return true;
            } else {
                return false;
            }
        }

        $.fn.extend({
            // watching for element's appearance in browser viewport
            appear: function (options) {
                var opts = $.extend({}, defaults, options || {});
                var selector = this.selector || this;
                if (!check_binded) {
                    var on_check = function () {
                        if (check_lock) {
                            return;
                        }
                        check_lock = true;

                        setTimeout(process, opts.interval);
                    };

                    $(window).scroll(on_check).resize(on_check);
                    check_binded = true;
                }

                if (opts.force_process) {
                    setTimeout(process, opts.interval);
                }
                selectors.push(selector);
                return $(selector);
            }
        });

        $.extend({
            // force elements's appearance check
            force_appear: function () {
                if (check_binded) {
                    process();
                    return true;
                };
                return false;
            }
        });


        var isMobile = false;

        (function ($) {
            "use strict";

            $(function () {

                /* --- MOBILE DETECT --- */
                if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i)) {
                    isMobile = true;
                }

                /* --- ADD NECESSARY CLASS --- */
                if (isMobile == true) {
                    $('.animated').removeClass('animated');
                    $('.op0').removeClass('op0');
                }

                /* --- ANIMATE CONTENT --- */
                if (isMobile == false) {
                    $('*[data-animated]').addClass('animated');
                }

                function animated_contents() {
                    $(".animated:appeared").each(function (i) {
                        var $this = $(this),
                    animated = $(this).data('animated');

                        setTimeout(function () {
                            $this.addClass(animated);
                        }, 100 * i);

                    });
                }

                if (isMobile == false) {
                    animated_contents();
                    $(window).scroll(function () {
                        animated_contents();
                    });
                }
            });

        } (jQuery));

    }
})(jQuery);
// ==UserScript==
// @name         segmentfault | 简书 免登录复制  复制去除版权信息
// @namespace    http://tampermonkey.net/
// @version      0.15
// @description  无
// @author       Peace&Love
// @include        *://segmentfault.com/*
// @include        *://www.jianshu.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

      if (window.location.href.indexOf("segmentfault") != -1) {
        sf();
      }

      function sf() {
        var fakeLogin = document.createElement("span");
        fakeLogin.id = "SFUserId";
        document.body.appendChild(fakeLogin);

        document.querySelectorAll("article.article").forEach(function(t) {
          t.addEventListener(
            "copy",
            function(e) {
              e.stopPropagation();
            },
            true
          );
        });
      }


    document.addEventListener(
        "copy",
        function (e) {
            e.stopPropagation();
        },
        true
    );
})();
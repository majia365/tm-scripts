// ==UserScript==
// @name         simple zhihu
// @name:zh-CN   移除知乎外链重定向
// @namespace    https://github.com/majia365/tm-scripts
// @version      0.1
// @description  remove redirection from zhihu
// @author       @zhihaofans
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @match        https://*.zhihu.com/*
// @license      CC0
// @noframes
// ==/UserScript==

(function () {
    console.log("zhihu link fix:Start");
    $(document).ready(function () {
        var l_n = $("a").length;
        for (var a = 0; a < l_n; a++) {
            if ($("a").eq(a).attr("href").startsWith("https://link.zhihu.com/?target=")) {
                console.log($("a").eq(a).attr("href"));
                console.log($("a").eq(a).attr("href").startsWith("https://link.zhihu.com/?target="));
                var new_link = decodeURIComponent($("a").eq(a).attr("href").replace("https://link.zhihu.com/?target=", ""));
                $("a").eq(a).attr("href", new_link);
                console.log(new_link);
                console.log("======");
            }
        }
        console.log("zhihu link fix:End");
    });
})();

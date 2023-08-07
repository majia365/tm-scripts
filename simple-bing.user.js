// ==UserScript==
// @name         simple bing
// @namespace    https://github.com/majia365/tm-scripts
// @version      0.1
// @description  remove redirection from bing
// @author       @HuangZhan
// @match        https://*.bing.com/*
// @license      CC0
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    function rmRedir() {
        const res = document.querySelector("ol#b_results");
        if (!res) {
            return;
        }
        for (var i = 0; i < res.childElementCount; i++) {
            const curNode = res.childNodes[i];
            var anodes = curNode.querySelectorAll("a");
            var j;
            for (j = 0; j < anodes.length; j++) {
                var anode = anodes[j];
                if (anode.href) {
                    var url = new URL(anode.href);
                    if (url.pathname == "/ck/a") {
                        var u = url.searchParams.get("u").slice(2).replace(/-/g, '+').replace(/_/g, '/');
                        var nurl = atob(u);
                        if (nurl) {
                            anode.href = nurl;
                        }
                    }
                }
            }
        }
    }

    rmRedir();

    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            for (let node of mutation.addedNodes) {
                if (node.id === "b_content") {
                    rmRedir();
                }
            }
        }
    };

    const observer = new MutationObserver(callback);

    observer.observe(document.body, { childList: true});
})();

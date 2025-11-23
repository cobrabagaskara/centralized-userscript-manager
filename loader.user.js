// ==UserScript==
// @name         Centralized Userscript Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Load modules from centralized GitHub Pages
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addScript
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    const base = "https://cobrabagaskara.github.io/centralized-userscript-manager/modules/modules.json";

    GM_xmlhttpRequest({
        method: "GET",
        url: base,
        onload: function(r) {
            const modules = JSON.parse(r.responseText);
            modules.forEach(m => load(m.url));
        }
    });

    function load(path) {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://cobrabagaskara.github.io/centralized-userscript-manager/" + path,
            onload: function(r) {
                const s = document.createElement("script");
                s.textContent = r.responseText;
                document.body.appendChild(s);
            }
        });
    }
})();

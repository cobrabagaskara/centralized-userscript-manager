// ==UserScript==
// @name         Centralized Userscript Loader
// @namespace    centralized.userscript.manager
// @version      1.0
// @description  Loader untuk semua userscript modular
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-start
// ==/UserScript==

(function() {
    const BASE = "https://raw.githubusercontent.com/cobrabagaskara/centralized-userscript-manager/main/modules/";

    const modules = [
        "auto-close-notification.js",
        // tambahkan modul lain di sini
    ];

    modules.forEach(m => loadModule(BASE + m));

    function loadModule(url) {
        GM_xmlhttpRequest({
            method: "GET",
            url,
            onload: r => {
                try {
                    eval(r.responseText);
                    console.log("[CentralizedLoader] Loaded:", url);
                } catch (e) {
                    console.error("[CentralizedLoader] Error:", url, e);
                }
            }
        });
    }
})();

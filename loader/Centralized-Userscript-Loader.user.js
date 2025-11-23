// ==UserScript==
// @name         Centralized Userscript Loader
// @namespace    https://github.com/cobrabagaskara
// @version      1.0
// @description  Loader untuk semua modul userscript dari GitHub.
// @match        *://*/*
// @grant        GM.xmlHttpRequest
// @grant        GM.info
// @grant        GM.getResourceText
// @grant        GM.addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    "use strict";

    const CONFIG_URL = "https://raw.githubusercontent.com/cobrabagaskara/centralized-userscript-manager/main/config.json";

    console.log("[Loader] Memulai Centralized Userscript Loader...");

    GM.xmlHttpRequest({
        method: "GET",
        url: CONFIG_URL,
        onload: function(response) {
            let config;
            try {
                config = JSON.parse(response.responseText);
                console.log("[Loader] config.json berhasil dimuat:", config);
            } catch (e) {
                console.error("[Loader] Gagal parsing config.json:", e);
                return;
            }

            if (!config.modules || !Array.isArray(config.modules)) {
                console.error("[Loader] Format config.json salah!");
                return;
            }

            config.modules.forEach(module => {
                if (!module.enabled) {
                    console.log(`[Loader] Modul ${module.name} dinonaktifkan, skip.`);
                    return;
                }

                console.log(`[Loader] Mengambil modul: ${module.name}`);

                GM.xmlHttpRequest({
                    method: "GET",
                    url: module.url,
                    onload: function(res) {
                        try {
                            console.log(`[Loader] Menjalankan modul: ${module.name}`);
                            eval(res.responseText);
                        } catch (e) {
                            console.error(`[Loader] Error menjalankan modul ${module.name}:`, e);
                        }
                    },
                    onerror: function() {
                        console.error(`[Loader] Gagal memuat modul ${module.name}`);
                    }
                });
            });
        },
        onerror: function() {
            console.error("[Loader] Gagal mengambil config.json");
        }
    });
})();

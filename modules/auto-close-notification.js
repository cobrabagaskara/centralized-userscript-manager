// Auto Close Notification Module
// Safe for SPA / React / jQuery / vanilla DOM

(function () {
    'use strict';

    console.log("[BillingClose] Pure JS version aktif.");

    const TARGET_KEYWORDS = [
        "Pembayaran Layanan Telah Melewati Jatuh Tempo",
        "e-Puskesmas Pemberitahuan"
    ];

    function isBillingNotification(element) {
        if (!element) return false;

        const txt = element.textContent?.toLowerCase() || "";
        return TARGET_KEYWORDS.some(k =>
            txt.includes(k.toLowerCase())
        );
    }

    function closeBillingModal(root) {
        const modal = root.closest(".modal-content, .modal, .modal-dialog");
        if (!modal) return;

        const btn = modal.querySelector("#btn_close_suspend");
        if (btn) {
            console.log("[BillingClose] Klik tombol close.");
            btn.click();
        }

        setTimeout(() => {
            console.log("[BillingClose] Menghapus modal & backdrop.");
            modal.remove();
            document.querySelectorAll(".modal-backdrop").forEach(b => b.remove());
        }, 100);
    }

    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (!node || node.nodeType !== 1) continue;

                if (isBillingNotification(node)) {
                    closeBillingModal(node);
                    continue;
                }

                // Cek jika elemennya berisi modal dengan teks target
                const textCheck = node.innerText?.toLowerCase() || "";
                if (TARGET_KEYWORDS.some(k => textCheck.includes(k.toLowerCase()))) {
                    closeBillingModal(node);
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();

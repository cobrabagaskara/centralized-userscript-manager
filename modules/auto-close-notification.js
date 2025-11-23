console.log("[Module] auto-close-notification aktif!");

(function() {
    const observer = new MutationObserver(() => {
        const notif = document.querySelector(".v-dialog .v-btn--icon");

        if (notif) {
            console.log("[Module] Menutup notifikasi...");
            notif.click();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();


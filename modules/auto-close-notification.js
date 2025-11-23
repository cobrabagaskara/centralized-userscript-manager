// Auto Close Notification Module
// Safe for SPA / React / jQuery / vanilla DOM

(function() {
    console.log("[AutoCloseNotification] Module loaded.");

    function closeNotifications() {
        const selectors = [
            '.noty_bar',            // Noty notification
            '.alert',               // Bootstrap alert
            '.swal2-container',     // SweetAlert2
            '.toast',               // Bootstrap/Toast
            '#notif',               // EPuskesmas notif
        ];

        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                // fade-out effect
                el.style.transition = "opacity 0.5s";
                el.style.opacity = "0";

                setTimeout(() => {
                    if (el && el.parentNode) {
                        el.remove();
                    }
                }, 500);
            });
        });
    }

    // Run every 2 seconds (SPA friendly)
    setInterval(closeNotifications, 2000);
})();

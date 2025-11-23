console.log("Module loaded: auto-close-notification");

setInterval(() => {
    const notif = document.querySelector(".iziToast-close");
    if (notif) notif.click();
}, 800);

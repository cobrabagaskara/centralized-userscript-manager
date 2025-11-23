const RAW_URL = "https://raw.githubusercontent.com/cobrabagaskara/centralized-userscript-manager/main/loader/Centralized-Userscript-Loader.user.js";

// UI elements
const statusBox = document.getElementById("tm-status");
const installBtn = document.getElementById("install-btn");

// Step 1 — Detect Tampermonkey
async function detectTampermonkey() {
    try {
        const res = await fetch("https://tampermonkey.net/favicon.ico", { mode: "no-cors" });

        statusBox.textContent = "✔ Tampermonkey Detected";
        statusBox.style.background = "#1f6feb";
        installBtn.classList.remove("hidden");
    } catch (e) {
        statusBox.textContent = "❌ Tampermonkey Not Installed";
        statusBox.style.background = "#b91c1c";

        installBtn.textContent = "Install Tampermonkey First";
        installBtn.classList.remove("hidden");

        installBtn.onclick = () => {
            window.open("https://tampermonkey.net", "_blank");
        };
    }
}

detectTampermonkey();

// Step 2 — Install Loader Automatically
installBtn.addEventListener("click", () => {
    statusBox.textContent = "Starting installation...";

    window.location.href = RAW_URL;

    setTimeout(() => {
        statusBox.textContent = "If installation does not start, ensure Tampermonkey is enabled.";
    }, 3000);
});

// ============================================================
// Module: hello-world v1.0.0
// Hosted on GitHub — injected by ModLoader
// __meta__ is provided by the loader: { id, version, name }
// ============================================================

(function (meta) {
  "use strict";

  console.log(`[${meta.name}] v${meta.version} loaded`);

  const banner = document.createElement("div");
  banner.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0d0f12;
    color: #00d4aa;
    border: 1px solid #00d4aa;
    padding: 10px 16px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 13px;
    z-index: 999999;
    box-shadow: 0 4px 20px rgba(0,212,170,0.2);
    cursor: pointer;
  `;
  banner.textContent = `[ModLoader] ${meta.name} v${meta.version} ✓`;
  banner.onclick = () => banner.remove();

  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 5000);
})(__meta__);

// test-banner.js — module untuk Jamu Loader
// Tampilkan banner kecil di pojok kanan bawah selama 5 detik

(function (meta) {
  "use strict";

  const el = document.createElement("div");
  el.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0d0f12;
    color: #00d4aa;
    border: 1px solid #00d4aa33;
    border-left: 3px solid #00d4aa;
    padding: 10px 14px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace, monospace;
    font-size: 12px;
    z-index: 2147483647;
    box-shadow: 0 8px 24px rgba(0,212,170,0.15);
    cursor: pointer;
    line-height: 1.5;
    max-width: 260px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s, transform 0.3s;
  `;
  el.innerHTML = `
    <div style="font-weight:700;margin-bottom:2px;">🍵 Jamu Loader</div>
    <div style="color:#8ba0b5;font-size:11px;">${meta.name} v${meta.version} aktif</div>
    <div style="color:#5a6472;font-size:10px;margin-top:4px;">Klik untuk tutup</div>
  `;
  el.onclick = () => el.remove();
  document.body.appendChild(el);

  // Animate in
  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });

  // Auto-remove after 5s
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => el.remove(), 300);
  }, 5000);
})(__meta__);

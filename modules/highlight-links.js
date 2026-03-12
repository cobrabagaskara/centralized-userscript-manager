// highlight-links.js — module untuk Jamu Loader
// Highlight semua link di halaman dengan outline teal
// Bisa di-toggle dengan klik ikon di pojok

(function (meta) {
  "use strict";

  let active = false;
  const STYLE_ID = "__jamu_highlight_style__";

  function enable() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      a:not([data-jamu-skip]) {
        outline: 1.5px solid rgba(0, 212, 170, 0.6) !important;
        outline-offset: 2px !important;
        border-radius: 2px !important;
      }
      a:hover:not([data-jamu-skip]) {
        outline-color: #00d4aa !important;
        background: rgba(0,212,170,0.08) !important;
      }
    `;
    document.head.appendChild(style);
    active = true;
    btn.textContent = "🔗 ON";
    btn.style.borderColor = "#00d4aa";
    btn.style.color = "#00d4aa";
  }

  function disable() {
    const s = document.getElementById(STYLE_ID);
    if (s) s.remove();
    active = false;
    btn.textContent = "🔗 OFF";
    btn.style.borderColor = "#252a31";
    btn.style.color = "#5a6472";
  }

  // Toggle button
  const btn = document.createElement("button");
  btn.setAttribute("data-jamu-skip", "1");
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #0d0f12;
    border: 1px solid #252a31;
    color: #5a6472;
    padding: 5px 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 11px;
    cursor: pointer;
    z-index: 2147483647;
    transition: all 0.2s;
  `;
  btn.textContent = "🔗 OFF";
  btn.title = `${meta.name} v${meta.version} — klik untuk toggle`;
  btn.onclick = () => active ? disable() : enable();
  document.body.appendChild(btn);

})(__meta__);

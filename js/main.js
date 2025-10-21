// ===== GLOBAL PARTIAL LOADER =====
async function loadPartial(id, file) {
  try {
    const res = await fetch(file + ".html"); // load partial HTML file
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const html = await res.text();
    const container = document.getElementById(id);
    if (container) container.innerHTML = html;
  } catch (err) {
    console.error("Partial load error:", err);
  }
}

// Load header and footer once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "assets/partials/header");
  loadPartial("footer", "assets/partials/footer");
});

// ===== GLOBAL HAMBURGER TOGGLE =====
window.toggleMenu = function () {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("show");
  }
};

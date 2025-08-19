// particlesControl.js
document.addEventListener("DOMContentLoaded", () => {
  try {
    const settings = JSON.parse(localStorage.getItem("uvSettings"));
    if (settings?.disableParticles) {
      // Hide particle canvases
      document.querySelectorAll("canvas, #particles, #particles-js").forEach(c => {
        c.style.display = "none";
      });

      // Optional: stop particles.js if it's running
      if (window.pJSDom) {
        window.pJSDom.forEach(instance => instance.pJS.particles.move.enable = false);
      }

      // Optional: stop any custom particle animation loop
      if (window.particlesArray && Array.isArray(window.particlesArray)) {
        window.particlesArray = [];
      }
    }
  } catch(e) {
    console.warn("Error checking particle settings:", e);
  }
});

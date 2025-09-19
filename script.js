// Theme toggle
const togglebutton = document.getElementById("btnToggle");
if (togglebutton) {
    togglebutton.addEventListener("click", () => {
        if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("netlify.app")) {
            window.location.href = "dark.html";
        } else {
            window.location.href = "index.html";
        }
    });
}

// Loader
const loader = document.getElementById("preloader");

function stopLoader() {
    // Fade out loader
    loader.style.transition = "opacity 0.9s ease";
    loader.style.opacity = "0";

    // Hide completely after fade-out
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
}

// Wait 4 seconds before hiding loader
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(stopLoader, 4000);
});

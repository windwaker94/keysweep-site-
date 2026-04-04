const body = document.body;
const toggle = document.getElementById("themeToggle");
const moon = document.getElementById("iconMoon");
const sun = document.getElementById("iconSun");

function applyTheme(dark) {
  if (dark) {
    body.classList.add("dark");
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    body.classList.remove("dark");
    moon.style.display = "block";
    sun.style.display = "none";
  }
  try { localStorage.setItem("keysweep-theme", dark ? "dark" : "light"); } catch(e) {}
}

// Default: dark (class already on body)
try {
  const saved = localStorage.getItem("keysweep-theme");
  if (saved === "light") applyTheme(false);
} catch(e) {}

toggle.addEventListener("click", () => {
  applyTheme(!body.classList.contains("dark"));
});

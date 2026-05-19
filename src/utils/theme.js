const STORAGE_KEY = "portfolio-theme";

export function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#121c16" : "#c4eea5");
  }
}

export function setStoredTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function initTheme() {
  applyTheme(getStoredTheme());
}

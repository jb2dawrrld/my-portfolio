import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
    </button>
  );
}

export default ThemeToggle;

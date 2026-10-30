import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const divStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: theme === "light" ? "#FFF" : "#000",
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div style={divStyle} className={`theme-page ${theme}`}>
      <div className="theme-card">

        <div className="theme-content">

          <div className={`theme-icon ${theme}`}>
            {theme === "light" ? (
              <Sun size={45} strokeWidth={2.5} />
            ) : (
              <Moon size={45} fill="currentColor" strokeWidth={2} />
            )}
          </div>

          <div className="theme-details">
            <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>

            <p>
              {theme === "light"
                ? "Switch to light theme for a cleaner and brighter experience."
                : "Switch to dark theme for a better viewing experience."}
            </p>
          </div>

          <button
            className={`theme-toggle ${theme}`}
            onClick={changeTheme}
            aria-label="Toggle theme"
          >
            <span></span>
          </button>

        </div>

        <div className={`theme-wave wave-one ${theme}`}></div>
        <div className={`theme-wave wave-two ${theme}`}></div>

      </div>
    </div>
  );
}

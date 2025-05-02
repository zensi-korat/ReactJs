import { createContext, useState } from "react";
import ChildA from "./ChildA";

export const ThemeContext = createContext();

export function ThemeParentContext() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="theme-container"
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

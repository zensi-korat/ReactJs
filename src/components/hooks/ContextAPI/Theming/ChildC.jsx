import { useContext } from "react";
import { ThemeContext } from ".";

function ChildC() {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleClick() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");

    // setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <button onClick={handleClick}>Change theme</button>
      {theme}
    </>
  );
}

export default ChildC;

import { useTheme } from "../hooks/useTheme";

function NavBar() {

  const { theme, themeChange } = useTheme();

  return (

    <div>

      <h1>Current Theme: {theme}</h1>

      <button
        onClick={themeChange}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          border: "none"
        }}
      >
        Change Theme
      </button>

    </div>

  );

}

export default NavBar;
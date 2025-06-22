import  { useState, useEffect } from "react";
import AttendanceDashboard from "./components/AttendanceDashboard";
import AttendanceTable from "./components/AttendanceTable";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="transition duration-300">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 dark:bg-slate-800 dark:text-white rounded shadow hover:scale-105 transition"
      >
        Toggle {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      <AttendanceDashboard theme={theme} />
      <AttendanceTable/>
    </div>
  );
}

export default App;

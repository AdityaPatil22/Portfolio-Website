import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
}

export default ThemeToggle;

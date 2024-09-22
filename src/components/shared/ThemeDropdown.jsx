import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { FaDesktop } from "react-icons/fa";

const THEME_OPTIONS = [
  {
    id: 1,
    title: "System",
    value: "system",
    icon: <FaDesktop />,
  },

  {
    id: 2,
    title: "Light",
    value: "light",
    icon: <LuSun />,
  },

  {
    id: 3,
    title: "Dark",
    value: "dark",
    icon: <FiMoon />,
  },
];

export const ThemeDropdown = () => {
  const [theme, setTheme] = useState("dark");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleSetCurrentTheme = (value) => {
    setTheme(value);
    setShowDropdown(false);
  };

  const THEME_ICON = THEME_OPTIONS?.find(
    (option) => option.value === theme
  ).icon;
  return (
    <div className="relative inline-block text-left">
      <div
        className="bg-primary text-primary-foreground cursor-pointer rounded-md border-gray-50 p-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {THEME_ICON}
      </div>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white dark:bg-black z-50">
          <div className="p-2" role="none">
            {THEME_OPTIONS?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSetCurrentTheme(option.value)}
                className="dark:hover:bg-background group flex w-full items-center rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

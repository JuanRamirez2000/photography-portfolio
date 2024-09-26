"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    setTheme(theme == "nord" ? "night" : "nord");
  };

  return (
    <div>
      <label className="swap swap-rotate btn btn-secondary ">
        <input
          type="checkbox"
          value="nord"
          className="theme-controller"
          checked={theme == "nord"}
          onChange={updateTheme}
        />
        <SunIcon className="swap-off size-8 text-secondary-content" />
        <MoonIcon className="swap-on size-8 text-secondary-content" />
      </label>
    </div>
  );
}

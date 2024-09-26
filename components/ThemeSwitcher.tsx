"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    setTheme(theme == "pastel" ? "sunset" : "pastel");
  };

  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          value="pastel"
          className="theme-controller"
          checked={theme == "pastel"}
          onChange={updateTheme}
        />
        <SunIcon className="swap-off size-8 text-current" />
        <MoonIcon className="swap-on size-8 text-current" />
      </label>
    </div>
  );
}

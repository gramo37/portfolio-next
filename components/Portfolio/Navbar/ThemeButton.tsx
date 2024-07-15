"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={toggleTheme}>
          {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

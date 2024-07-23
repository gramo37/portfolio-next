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

export default function ThemeButton({
  type = "symbol",
  className = "",
  onClickFunc,
}: {
  type?: string;
  className?: string;
  onClickFunc?: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
    if (onClickFunc) onClickFunc();
  };

  if (type === "text") {
    return (
      <div className={className} onClick={toggleTheme}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </div>
    );
  }

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

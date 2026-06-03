"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./Context";

type ThemeProviderProps = {
  children: ReactNode;
};

// theme light dark + functin, childern reactndoe
// state value mode
//effect theme
//function toggle
//return provider theme ,function, {children}
//use context i header button onclick tggletheme
//provider -> layout

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
  baseColor: string;
  highlightColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME = "light";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeState, setThemeState] = useState({
    theme: "light",
    isThemeLoaded: false,
  });

  useEffect(() => {
    const initializeTheme = () => {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      const initialTheme = storedTheme || DEFAULT_THEME;
      
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(initialTheme);
      
      setThemeState({
        theme: initialTheme,
        isThemeLoaded: true,
      });
    };

    initializeTheme();
  }, []); 

  const toggleTheme = useCallback(() => {
    setThemeState((prevState) => {
      const newTheme = prevState.theme === "light" ? "dark" : "light";
      
      document.documentElement.classList.remove(prevState.theme);
      document.documentElement.classList.add(newTheme);
      
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      
      return {
        ...prevState,
        theme: newTheme,
      };
    });
  }, []);

  
  const baseColor = themeState.theme === "dark" ? "#585858" : "#f0f0f0";
  const highlightColor = themeState.theme === "dark" ? "#646464" : "#ddd";

  if (!themeState.isThemeLoaded) {
    return <div className="theme-loading"></div>;
  }

  const value = {
    theme: themeState.theme,
    toggleTheme,
    isThemeLoaded: themeState.isThemeLoaded,
    baseColor,       
    highlightColor,  
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

import React, { createContext, useContext, useState } from "react";

// Stap 1: Nieuwe instantie van een context
const DarkModeContext = createContext();

// Stap 2: Aanmaken van onze ContextProvider
const DarkModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

// Custom hook -> hook start altijd met use
export const useDarkMode = () => useContext(DarkModeContext);

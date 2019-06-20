import React from "react";
import { blue, deepPurple } from "@material-ui/core/colors";
export const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
    appBar: {
      background: blue[800]
    }
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#222222",
    appBar: {
      background: deepPurple[800]
    }
  }
  // bgColorTransition: "background-color 2s ease-in" For some reason this does not work
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});

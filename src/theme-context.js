import React from "react";
import { blue, deepPurple } from "@material-ui/core/colors";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    appBar: {
      background: blue[400]
    }
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    appBar: {
      background: deepPurple[800]
    }
  }
  // bgColorTransition: "background-color 2s ease-in" For some reason this does not work
};

export const ThemeContext = React.createContext(themes.light);

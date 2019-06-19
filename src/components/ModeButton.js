import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../theme-context";

class ModeButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <Button color="inherit" onClick={toggleTheme}>
            {theme.name === "light" ? "dark" : "light"} mode
          </Button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ModeButton;

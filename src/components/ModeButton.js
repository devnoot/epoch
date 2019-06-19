import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../theme-context";

class ModeButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <Button color="inherit" onClick={toggleTheme}>
            Toggle mode
          </Button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ModeButton;

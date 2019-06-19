import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { ThemeContext } from "../theme-context";
import ModeButton from "./ModeButton";

class MainAppBar extends Component {
  render() {
    const ctx = this.context;

    const AppBarStyles = {
      backgroundColor: ctx.theme.appBar.background,
      transition: "background-color 0.25s ease-in, color 0.25s ease-in",
      marginBottom: "32px",
      flexGrow: 1
    };

    const TitleStyles = { flexGrow: 1 };
    return (
      <AppBar position="static" style={AppBarStyles}>
        <Toolbar>
          <Typography style={TitleStyles} variant="h6" color="inherit">
            Epoch
          </Typography>
          <ModeButton />
        </Toolbar>
      </AppBar>
    );
  }
}

MainAppBar.contextType = ThemeContext;
export default MainAppBar;

import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const appBarStyles = {
  marginBottom: "32px"
};

const MainAppBar = props => (
  <AppBar color="primary" position="static" style={appBarStyles}>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Epoch
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MainAppBar;

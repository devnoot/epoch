import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import { ThemeContext } from "../../theme-context";

class Footer extends Component {
  render() {
    const theme = this.context;

    const containerStyles = {
      backgroundColor: theme.background,
      color: theme.foreground,
      transition: "background-color 0.5s ease-in, color 0.5s ease-in"
    };

    return (
      <Container maxWidth="xl" style={containerStyles}>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ marginTop: "32px" }}
        >
          Copyright &copy; 2019
        </Typography>
      </Container>
    );
  }
}

Footer.contextType = ThemeContext;
export default Footer;

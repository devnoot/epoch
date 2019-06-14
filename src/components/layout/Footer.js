import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer = () => (
  <>
    <Container maxWidth="xl">
      <Typography
        variant="subtitle1"
        align="center"
        style={{ marginTop: "32px" }}
      >
        Copyright &copy; 2019
      </Typography>
    </Container>
  </>
);

export default Footer;

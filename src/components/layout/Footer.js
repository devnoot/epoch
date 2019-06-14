import React from "react";
import { Container } from "@material-ui/core";

const Footer = ({ children }) => (
  <>
    <hr />
    <Container maxWidth="xl">{children}</Container>
  </>
);

export default Footer;

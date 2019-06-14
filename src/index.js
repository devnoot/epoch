import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

ReactDOM.render(
  <App
    header={<Header>Header</Header>}
    main={<Main>Main</Main>}
    footer={<Footer>Footer</Footer>}
  />,
  document.getElementById("root")
);

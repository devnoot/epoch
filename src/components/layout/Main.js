import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ElementsGrid from "../ElementsGrid";
import Element from "../Element";
import data from "./PeriodicTableJSON.json";

const elWidth = "64px";
const elHeight = "64px";

class Main extends Component {
  state = {
    error: "",
    elements: ""
  };

  render() {
    return (
      <>
        <Container maxWidth="xl">
          <ElementsGrid>
            {data.elements.map((el, i) => (
              <Element
                key={i}
                width={elWidth}
                height={elHeight}
                number={el.number}
                symbol={el.symbol}
                mass={el.atomic_mass}
                xpos={el.xpos}
                ypos={el.ypos}
                name={el.name}
              />
            ))}
          </ElementsGrid>
        </Container>
      </>
    );
  }
}

export default Main;

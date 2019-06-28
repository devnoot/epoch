import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ElementsGrid from "../ElementsGrid";
import Element from "../Element";
import Legend from "../Legend";
import data from "./PeriodicTableJSON.json";
import {
  blue,
  brown,
  cyan,
  green,
  grey,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} from "@material-ui/core/colors";
import { ThemeContext } from "../../theme-context";

const mapStylesToElementTypes = {
  // non metals
  "diatomic nonmetal": blue[200],
  "polyatomic nonmetal": blue[200],
  "noble gas": cyan[400],

  // metals
  "alkali metal": red[400],
  "alkaline earth metal": orange[400],
  metalloid: brown[200],
  "post-transition metal": brown[200],
  "transition metal": pink[200],
  lanthanide: purple[200],

  //unknowns
  "unknown, probably transition metal": grey[400],
  "unknown, probably post-transition metal": grey[400],
  "unknown, probably metalloid": grey[400],
  "unknown, predicted to be noble gas": grey[400],
  "unknown, but predicted to be an alkali metal": grey[400]
};

const elWidth = "64px";
const elHeight = "64px";

class Main extends Component {
  state = {
    error: "",
    elements: ""
  };

  render() {
    let theme = this.context;

    const containerStyles = {
      backgroundColor: theme.background,
      color: theme.foreground,
      transition: "background-color 0.25s ease-in, color 0.25s ease-in"
    };

    const getRandomFromArray = arr =>
      arr[Math.floor(Math.random() * arr.length)];

    return (
      <>
        <Container style={containerStyles}>
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
                bgColor={mapStylesToElementTypes[el.category]}
              />
            ))}
          </ElementsGrid>
        </Container>
      </>
    );
  }
}

Main.contextType = ThemeContext;
export default Main;

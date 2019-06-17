import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ElementsGrid from "../ElementsGrid";
import Element from "../Element";
import data from "./PeriodicTableJSON.json";
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from "@material-ui/core/colors";

const elWidth = "64px";
const elHeight = "64px";

class Main extends Component {
  state = {
    error: "",
    elements: ""
  };

  render() {

    const colors = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange]

    const getUniqueCategories = elements => ([...new Set(elements.map(el => el.category))])

    const generateCategoryColors = categories => {
      const bgColors = [];
      
      for (let i=0; i<categories.length; i++) {
        const randomColor = getRandomFromArray(colors)
        console.log(randomColor)
        bgColors.push(randomColor[400])
      }

      return bgColors;
    }

    const getRandomFromArray = arr => (arr[Math.floor(Math.random() * arr.length)])

    const bgColors = generateCategoryColors(getUniqueCategories(data.elements))

    console.log(bgColors);

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
                bgColor={bgColors[i] ? bgColors[i] : "#cccccc"}
              />
            ))}
          </ElementsGrid>
        </Container>
      </>
    );
  }
}

export default Main;

import React, { Component } from "react";
import {
  Container,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import data from "./PeriodicTableJSON.json";

class Main extends Component {
  state = {
    error: "",
    elements: ""
  };

  render() {
    return (
      <>
        <Container maxWidth="xl">
          <table>
            <tbody>
              {data.elements.map((element, i) => (
                <tr key={i}>
                  <td>{element.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </>
    );
  }
}

export default Main;

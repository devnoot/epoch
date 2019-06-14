import React, { Component } from "react";
import { Container, Box, Typography, Paper } from "@material-ui/core";
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
                  <td>
                    <Box>
                      <Paper>
                        <Typography variant="h4" align="center">
                          {element.symbol}
                        </Typography>

                        <Typography variant="subtitle1" align="center">
                          {element.atomic_mass}
                        </Typography>
                      </Paper>
                    </Box>
                  </td>
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

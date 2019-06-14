/**
 * @description An element container
 */

import React, { Component } from "react";
import { Box, Paper, Typography, Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

class Element extends Component {
  state = {
    isActive: false,
    elevation: 1
  };

  render() {
    const {
      width,
      height,
      number,
      symbol,
      mass,
      name,
      xpos,
      ypos
    } = this.props;

    const boxStyles = {
      width,
      height,
      gridColumnStart: xpos,
      gridColumnEnd: xpos + 1,
      gridRowStart: ypos,
      gridRowEnd: ypos + 1,
      cursor: "pointer"
    };

    return (
      <Tooltip title={name} placement="top">
        <Box
          style={boxStyles}
          onMouseOver={e => {
            this.setState({
              isActive: true,
              elevation: 16
            });
          }}
          onMouseOut={e => {
            this.setState({
              isActive: false,
              elevation: 1
            });
          }}
        >
          <Paper elevation={this.state.elevation}>
            <Typography variant="caption">{number}</Typography>

            <Typography variant="h6" align="center">
              {symbol}
            </Typography>

            <Typography variant="body2" align="center">
              {round(mass, 3)}
            </Typography>
          </Paper>
        </Box>
      </Tooltip>
    );
  }
}

function round(val, dec) {
  return Number(Math.round(val + "e" + dec) + "e-" + dec);
}

Element.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  mass: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  xpos: PropTypes.number.isRequired,
  ypos: PropTypes.number.isRequired
};

export default Element;

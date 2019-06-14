/**
 * @description An element container
 */

import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Element = props => {
  const { width, height, number, symbol, mass, onClick, xpos, ypos } = props;
  const boxStyles = {
    width,
    height,
    gridColumnStart: xpos,
    gridColumnEnd: xpos + 1,
    gridRowStart: ypos,
    gridRowEnd: ypos + 1
  };

  return (
    <Box style={boxStyles} onClick={onClick}>
      <Paper>
        <Typography variant="caption">{number}</Typography>

        <Typography variant="h6" align="center">
          {symbol}
        </Typography>

        <Typography variant="caption" align="center">
          {round(mass, 3)}
        </Typography>
      </Paper>
    </Box>
  );
};

function round(val, dec) {
  return Number(Math.round(val + "e" + dec) + "e-" + dec);
}

Element.propTypes = {
  number: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  mass: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  xpos: PropTypes.number.isRequired,
  ypos: PropTypes.number.isRequired
};

export default Element;

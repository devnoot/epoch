import React from "react";
import { Paper, Box, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Legend = ({ colormap }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {Object.keys(colormap).map((key, i) => (
        <Button
          key={i}
          className={classes.button}
          style={{ backgroundColor: colormap[key] }}
        >
          {key}
        </Button>
      ))}
    </Container>
  );
};

export default Legend;

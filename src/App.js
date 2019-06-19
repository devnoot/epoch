import React, { Component } from "react";
import { ThemeContext, themes } from "./theme-context";
import "./App.css";
import { Button } from "@material-ui/core";

const ChangeThemeButton = props => (
  <Button variant="contained" onClick={props.changeTheme}>
    Change Theme
  </Button>
);
class App extends Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    const { header, main, footer } = this.props;

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App">
          <header className="App-header">{header}</header>
          <ChangeThemeButton changeTheme={this.toggleTheme} />
          <main className="App-main">{main}</main>
          <footer className="App-footer">{footer}</footer>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

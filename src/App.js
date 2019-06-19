import React, { Component } from "react";
import { ThemeContext, themes } from "./theme-context";
import "./App.css";
import { Button } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    const { header, main, footer } = this.props;
    const appStyles = {
      backgroundColor: this.state.theme.background,
      color: this.state.theme.foreground,
      transition: "background-color 0.25s ease-in"
    };

    return (
      <ThemeContext.Provider value={this.state}>
        <div className="App" style={appStyles}>
          <header className="App-header">{header}</header>
          <main className="App-main">{main}</main>
          <footer className="App-footer">{footer}</footer>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

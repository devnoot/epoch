import React from "react";
import "./App.css";

const App = ({ header, main, footer }) => {
  return (
    <div className="App">
      <header className="App-header">{header}</header>
      <main className="App-main">{main}</main>
      <footer className="App-footer">{footer}</footer>
    </div>
  );
};

export default App;

import React from "react";
import Data from "./components/Data";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>GitHub Users!</h1>
        <Data />
      </div>
    );
  }
}

export default App;

import React from "react";
import MyData from "./components/MyData";
import FollowersData from "./components/FollowersData";
import "./App.css";

const App = () => {
  // Title and Display Data
  return (
    <div className="App">
      <h1>GitHub Users!</h1>
      <MyData />
      <FollowersData />
    </div>
  );
};

export default App;

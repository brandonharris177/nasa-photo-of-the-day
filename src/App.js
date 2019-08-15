import React from "react";
import "./App.css";
import Display from "./components/component-parts/goGetPicture";
import Title from "./components/component-parts/goGetTitle";
import Date from "./components/component-parts/goGetDate"

function App() {
  return (
    <div className = "App">
      <div className = "header">
        <Title/>
      </div>
      <div className = "image-container">
        <Display/>
      </div>
      <div>
      <div className = "blank">
      </div>
        <Date/>
      </div>
    </div>
  );
}

export default App;
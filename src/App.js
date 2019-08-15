import React from "react";
import "./App.scss";
import Display from "./components/component-parts/goGetPicture";
import Title from "./components/component-parts/goGetTitle";
import Date from "./components/component-parts/goGetDate"
import styled from "styled-components";
import 'semantic-ui-css/semantic.min.css'
import MenuExampleBasic from "./components/Menu"

const SubscribeButton = styled.button`
  color: white;
  padding: 20px;
  border radius: 10%;
  background-color: blue;
  `;


function App() {
  return (
    <div className = "App">
      <div className = "menu">
        <MenuExampleBasic/>
        <Title/>
      </div>
      <div className = "image-container">
        <Display/>
      </div>
      <div>
        <SubscribeButton>Subscribe</SubscribeButton>
        <Date/>
      </div>
    </div>
  );
}

export default App;
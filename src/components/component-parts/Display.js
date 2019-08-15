import React from "react";
import "./Display.css"

const Display = (props) => {
  // console.log(props.url);
  return (
    <>
      <img className = "image" src = {props.picture} alt = {props.title}/>
    </>
  );
};

export default Display;
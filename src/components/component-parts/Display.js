import React from "react";

const Display = (props) => {
  // console.log(props.url);
  return (
    <>
    <div className = "header">
      <h1>{props.title}</h1>
    </div>
    <img className = "image" src = {props.picture} alt = {props.title}/>
    </>
  );
};

export default Display;
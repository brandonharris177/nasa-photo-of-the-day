import React from "react";

const DisplayPicture = (props) => {
  // console.log(props.url);
  return (
    <>
    <h1>{props.title}</h1>
    <img className = "image" src = {props.picture} alt = {props.title}/>
    </>
  );
};

export default DisplayPicture;
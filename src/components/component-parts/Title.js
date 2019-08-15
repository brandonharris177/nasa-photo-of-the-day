import React from "react";
import "./Title.css"

const TitleCreator = (props) => {
  // console.log(props.url);
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export default TitleCreator;
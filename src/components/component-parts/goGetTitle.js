import React, {useState, useEffect} from "react";
import axios from "axios";

//import any components needed

import TitleCreator from "./Title"

export default function Title () {
    // STEP 2 - add the imported data to state
    const [titleState, setTitle] = useState();
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=uzeRVscCfa8BTM5kyf8tI0jTf5nWgcegcugkPqFd`)
        .then(response => {
          const titleUrl = response.data.title;
        //   console.log(titleUrl);
          setTitle(titleUrl);
        });
    }, [] )
    return (
        <>
        <TitleCreator title = {titleState}/>
        </>
    );
  };
import React, {useState, useEffect} from "react";
import axios from "axios";

//import any components needed

import DateCreator from "./Date"

export default function Date () {
    // STEP 2 - add the imported data to state
    const [dateState, setDate] = useState();
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=uzeRVscCfa8BTM5kyf8tI0jTf5nWgcegcugkPqFd`)
        .then(response => {
          const date = response.data.date;
        //   console.log(titleUrl);
          setDate(date);
        });
    }, [] )
    return (
        <>
        <DateCreator date = {dateState}/>
        </>
    );
  };
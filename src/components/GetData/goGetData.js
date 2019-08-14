import React, {useState, useEffect} from "react";
import axios from "axios";

//import any components needed

import DisplayPicture from "./DisplayPicture"

//Import your array data to from the provided data file



export default function Picture () {
    // STEP 2 - add the imported data to state
    const [pictureState, setPicture] = useState();
    const [titleState, setTitle] = useState();
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=uzeRVscCfa8BTM5kyf8tI0jTf5nWgcegcugkPqFd`)
        .then(response => {
          const imageUrl = response.data.url;
          const titleUrl = response.data.title;
          console.log(imageUrl);
        //   console.log(titleUrl);
          setPicture(imageUrl);
          setTitle(titleUrl)
        });
    }, [] )
    return (
        <DisplayPicture picture = {pictureState} title = {titleState}/>
    );
  };

// const Picture = () => {
//     // STEP 2 - add the imported data to state
//     const [pictureState, setPicture] = useState();
//     return (
//       <div>
//     {useEffect(() => {
//       axios
//         .get(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
//         .then(response => {
//           const imageUrl = response.data.url;
//           const titleUrl = response.data.title;
//           console.log(imageUrl);
//           console.log(titleUrl);
//           setPicture(imageUrl);
//         });
//     }, [])};
//         {/* {pictureState.map(data => {
//             return <DisplayPicture key = {data.data.date} source = {data.data.url}/>;
//           })} */}
//      </div>
//     );
//   };
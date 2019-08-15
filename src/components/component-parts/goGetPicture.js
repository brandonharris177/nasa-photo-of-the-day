import React, {useState, useEffect} from "react";
import axios from "axios";

//import any components needed

import Display from "./Display"

export default function Picture () {
    // STEP 2 - add the imported data to state
    const [pictureState, setPicture] = useState();
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=uzeRVscCfa8BTM5kyf8tI0jTf5nWgcegcugkPqFd`)
        .then(response => {
          const imageUrl = response.data.url;
          // console.log(imageUrl);
          setPicture(imageUrl);
        });
    }, [] )
    return (
        <>
        <Display picture = {pictureState}/>
        </>
    );
  };

//   import React, {useState, useEffect} from "react";
// import axios from "axios";

// //import any components needed

// import Display from "./Display"
// import Title from "./Title"

// export default function Picture () {
//     // STEP 2 - add the imported data to state
//     const [pictureState, setPicture] = useState();
//     const [titleState, setTitle] = useState();
//     useEffect(() => {
//       axios
//         .get(`https://api.nasa.gov/planetary/apod?api_key=uzeRVscCfa8BTM5kyf8tI0jTf5nWgcegcugkPqFd`)
//         .then(response => {
//           const imageUrl = response.data.url;
//           const titleUrl = response.data.title;
//           // console.log(imageUrl);
//         //   console.log(titleUrl);
//           setPicture(imageUrl);
//           setTitle(titleUrl)
//         });
//     }, [] )
//     return (
//         <>
//         <Display picture = {pictureState}/>
//         <Title title = {titleState}/>
//         </>
//     );
//   };
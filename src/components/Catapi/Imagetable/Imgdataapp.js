import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/Navbar/Navbar";

// import requests from "./request";
// import Datatable from "./components/datatable";
// import Dataimagetable from "./components/imagetable/Dataimagetable";

import Dataimagetable from "./Imgindex";
function Imgdataapp() {
  const [imgdata, setImgData] = useState([
    {
      id: "",
      name: "",
      origin: "",
      Life_span: "",
      Description: "",
      Temperament: "",
      url: "",
    },
  ]);

  const [isLoadingg, setIsLoadingg] = useState(false);
  const [isErrorr, setIsErrorr] = useState(false);

  useEffect(() => {
    const fetchImageData = async () => {
      setIsErrorr(false);
      setIsLoadingg(true);

      try {
        const resultt = await axios.get(
          `https://api.thecatapi.com/v1/breeds?attach_breed=0&api_key=${process.env.REACT_APP_API_kEY}`
        );

        let datainforr = [];
        let catData = resultt.data;

        for (let infoo in catData) {
          let imgul = "";
          !catData[infoo].image
            ? (imgul = "")
            : (imgul = catData[infoo].image.url);

          // if (!catData[infoo].image) {
          //   imgul = "";
          // } else {
          //   imgul = catData[infoo].image.url;
          // }
          datainforr.push({
            id: catData[infoo].id,
            name: catData[infoo].name,
            origin: catData[infoo].origin,
            Life_span: catData[infoo].life_span,
            Description: catData[infoo].description,
            Temperament: catData[infoo].temperament,
            url: imgul,
          });
        }
        setImgData(datainforr);

        // console.log(imgdata);
        setIsLoadingg(false);
      } catch (error) {
        setIsErrorr(true);
      }
      setIsLoadingg(false);
    };
    fetchImageData();
    // return clearTimeout(fetchImageData);
  }, []);

  return (
    <Fragment>
      <h1>Database on cat's characteristics</h1>

      {/* Error message */}
      {isErrorr && <div>Something went wrong ...</div>}

      {/* loading data  */}
      {isLoadingg ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Dataimagetable dataimg={imgdata} />
        </div>
      )}
    </Fragment>
  );
}

export default Imgdataapp;

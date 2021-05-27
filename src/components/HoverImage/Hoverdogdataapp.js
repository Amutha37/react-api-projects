import axios from "axios";
import React, { useState, useEffect } from "react";

import Hoverdatatable from "./Hoverdatatable";
function Hoverdogdataapp() {
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
    const fetchData = async () => {
      setIsErrorr(false);
      setIsLoadingg(true);

      try {
        const resultt = await axios.get(
          `https://api.thecatapi.com/v1/breeds?attach_breed=0&api_key=${process.env.REACT_APP_API_kEY}`
        );

        let datainforr = [];
        let cathoverData = resultt.data;

        for (let infoo in cathoverData) {
          let imgul = "";
          if (!cathoverData[infoo].image) {
            imgul = "";
          } else {
            imgul = cathoverData[infoo].image.url;
          }
          datainforr.push({
            id: cathoverData[infoo].id,
            name: cathoverData[infoo].name,
            origin: cathoverData[infoo].origin,
            Life_span: cathoverData[infoo].life_span,
            Description: cathoverData[infoo].description,
            Temperament: cathoverData[infoo].temperament,
            //   Image: {
            //     url:"",

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
    fetchData();
    return clearTimeout(fetchData);
  }, [imgdata]);

  return (
    <>
      <h1>Cat API </h1>

      {/* Error message */}
      {isErrorr && <div>Something went wrong ...</div>}

      {/* loading data  */}
      {isLoadingg ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Hoverdatatable dataimg={imgdata} />
        </div>
      )}
    </>
  );
}

export default Hoverdogdataapp;

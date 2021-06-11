import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "./components/navigation/Navbar";

import { Allcatimgtable } from "./Allcatimgtable";

function Catimgdata() {
  const [isErrorr, setIsErrorr] = useState(false);
  const [isLoadingg, setIsLoadingg] = useState(false);
  const [apicatData, setApiapicatData] = useState([
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

  useEffect(() => {
    const fetchData = async () => {
      setIsErrorr(false);
      //   setIsLoadingg(true);

      try {
        const resultt = await axios.get(
          `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY_CAT}`
          //   `https://api.thecatapi.com/v1/breeds?attach_breed=0&api_key=${process.env.REACT_APP_API_KEY_CAT}`
        );

        let datainforr = [];
        let cathoverimgdata = resultt.data;
        console.log(resultt.data);
        for (let infoo in cathoverimgdata) {
          // check if origin or country code availabe
          let imgul = "";
          !cathoverimgdata[infoo].image
            ? (imgul = "")
            : (imgul = cathoverimgdata[infoo].image.url);

          datainforr.push({
            id: cathoverimgdata[infoo].id,
            name: cathoverimgdata[infoo].name,
            origin: cathoverimgdata[infoo].origin,
            Life_span: cathoverimgdata[infoo].life_span,
            Description: cathoverimgdata[infoo].description,
            Temperament: cathoverimgdata[infoo].temperament,
            url: imgul,
          });
        }
        console.log(datainforr);
        setApiapicatData(datainforr);
        setIsLoadingg(false);
      } catch (error) {
        setIsErrorr(true);
      }
      setIsLoadingg(false);
    };
    fetchData();
    return clearTimeout(fetchData);
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Cats Characteristics</h1>
      </div>
      {/* <br /> */}
      {/* Error message */}
      {isErrorr && <div>Something went wrong ...</div>}
      {/* loading data  */}
      {isLoadingg ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Allcatimgtable apicatData={apicatData} />
        </div>
      )}
    </>
  );
}
export default Catimgdata;

import axios from "axios";
import React, { useState, useEffect } from "react";

import Hoverdogimgtable from "./Hoverdogimgtable";
function Hoverdogdataapp() {
  const [hoverimgdata, sethoverimgdata] = useState([
    {
      id: "",
      bred_for: "",
      breed_group: "",
      height: "",
      name: "",
      origin: "",
      life_span: "",
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
          `https://api.thedogapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_kEY_DOG}`
        );

        let datainforr = [];
        let doghoverimgdata = resultt.data;
        // console.log(resultt.data);
        for (let infor in doghoverimgdata) {
          // check if origin or country code availabe

          let oricontry = "";
          if (
            !doghoverimgdata[infor].origin &&
            !doghoverimgdata[infor].country_code
          ) {
            oricontry = "";
          } else {
            doghoverimgdata[infor].origin
              ? (oricontry = doghoverimgdata[infor].origin)
              : (oricontry = doghoverimgdata[infor].country_code);
          }
          // check if image available

          let dogimg = "";
          if (!doghoverimgdata[infor].image) {
            dogimg = "";
          } else {
            dogimg = doghoverimgdata[infor].image.url;
          }

          datainforr.push({
            id: doghoverimgdata[infor].id,
            bred_for: doghoverimgdata[infor].bred_for,
            breed_group: doghoverimgdata[infor].breed_group,
            height: doghoverimgdata[infor].height.metric,
            name: doghoverimgdata[infor].name,
            origin: oricontry,
            life_span: doghoverimgdata[infor].life_span,
            temperament: doghoverimgdata[infor].temperament,
            //   Image: {
            //     url:"",

            url: dogimg,
          });
        }
        // console.log(datainforr);
        sethoverimgdata(datainforr);

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
      <h1>Database on dog's characteristics</h1>

      {/* Error message */}
      {isErrorr && <div>Something went wrong ...</div>}

      {/* loading data  */}
      {isLoadingg ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Hoverdogimgtable hoverimgdata={hoverimgdata} />
        </div>
      )}
    </>
  );
}

export default Hoverdogdataapp;

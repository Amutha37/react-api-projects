import React, { useState } from "react";
import "./hoverdogimgtable.css";

// npm install --save react-jsx

const Hoverdogimgtable = ({ hoverimgdata }) => {
  const [show, setShow] = useState(false);
  const mouseOver = () => {
    setShow(true);
  };
  const mouseOut = () => {
    setShow(false);
  };

  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name & Image</th>
          <th>Origin</th>
          <th>Breed_for</th>
          <th>Breed_group</th>
          <th>Life_span</th>
          <th>Height</th>
          <th>Temperament</th>
        </tr>
      </thead>
      <tbody>
        {hoverimgdata.map((row, url) => (
          <tr key={url}>
            <td>{row.id}</td>

            <td onMouseOver={mouseOver} onMouseOut={mouseOut}>
              <a href="/">
                {" "}
                {row.name} {show ? <img src={row.url} alt="dog" /> : null}
              </a>
            </td>

            <td>{row.origin}</td>
            <td>{row.bred_for}</td>
            <td>{row.breed_group}</td>
            <td>{row.life_span}</td>
            <td>{row.height}</td>
            <td>{row.temperament}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Hoverdogimgtable;

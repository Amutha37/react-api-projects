import React, { useState } from "react";
import "./hoverdata.css";

// npm install --save react-jsx

const Hoverdatatable = ({ dataimg }) => {
  const [show, setShow] = useState(false);
  const mouseOver = () => {
    setShow(true);
  };
  const mouseOut = () => {
    setShow(false);
  };

  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <thead className="sticky-thc">
        <tr>
          <th>Id</th>
          <th>Name & Image</th>
          <th>Origin</th>
          <th>Life_span</th>
          <th>Description</th>
          <th>Temperament</th>
        </tr>
      </thead>
      <tbody>
        {dataimg.map((row, url) => (
          <tr key={url}>
            <td>{row.id}</td>
            <td onMouseOver={mouseOver} onMouseOut={mouseOut}>
              <a href="/">
                {" "}
                {row.name} {show ? <img src={row.url} alt="cat" /> : null}
              </a>
            </td>
            <td>{row.origin}</td>
            <td>{row.Life_span}</td>
            <td>{row.Description}</td>
            <td>{row.Temperament}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Hoverdatatable;

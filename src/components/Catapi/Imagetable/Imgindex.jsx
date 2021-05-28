import React from "react";
// import "./imgindex.css";

// npm install --save react-jsx

const Dataimagetable = ({ dataimg }) => {
  return (
    <>
      <table className="dml_table" cellPadding={0} cellSpacing={0}>
        <thead className="sticky-thc">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Origin</th>
            <th>Life_span</th>
            <th>Description</th>
            <th>Temperament</th>
          </tr>
        </thead>
        <tbody>
          {dataimg.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>
                <img src={row.url} alt="cat" />
              </td>
              <td>{row.name}</td>
              <td>{row.origin}</td>
              <td>{row.Life_span}</td>
              <td>{row.Description}</td>
              <td>{row.Temperament}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="space"></div>
    </>
  );
};

export default Dataimagetable;

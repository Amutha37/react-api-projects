import React from "react";
// import "./alldogimgtable.css";

// npm install --save react-jsx

const Alldogimgtable = ({ allimgdata }) => {
  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <thead className="sticky-thc">
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Origin</th>
          <th>Breed_for</th>
          <th>Breed_group</th>
          <th>Life_span</th>
          <th>Height</th>
          <th>Temperament</th>
        </tr>
      </thead>
      <tbody>
        {allimgdata.map((row, url) => (
          <tr key={url}>
            <td>{row.id}</td>
            <td>
              <img src={row.url} alt="dog" />
            </td>
            <td>{row.name}</td>

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
export default Alldogimgtable;

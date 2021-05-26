import React from "react";
import "./tablestyles.css";

// npm install --save react-jsx

const Datatable = ({ dataa }) => {
  const columns = dataa[0] && Object.keys(dataa[0]);
  // console.log(dataa);
  return (
    <table className="dml_table" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {dataa[0] &&
            columns.map((heading, index) => <th key={index}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataa.map((row, index) => (
          <tr key={index}>
            {columns.map((column, id) => (
              <td key={id}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;

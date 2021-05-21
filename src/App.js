import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
// import requests from "./request";
import Datatable from "./datatable";

function App() {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      origin: "",
      Life_span: "",
      Description: "",
      Temperament: "",
    },
  ]);
  const [query, setQuery] = useState("");
  const [searchColumns, setSearchColumns] = useState(["name", "origin"]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.get(
          `https://api.thecatapi.com/v1/breeds?attach_breed=0&api_key=${process.env.REACT_APP_API_kEY}`
        );
        let datainfo = [];
        let catData = result.data;
        // console.log(catData);
        for (let info in catData) {
          datainfo.push({
            id: catData[info].id,
            name: catData[info].name,
            origin: catData[info].origin,
            Life_span: catData[info].life_span,
            Description: catData[info].description,
            Temperament: catData[info].temperament,
          });
        }

        setData(datainfo);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // not all data is string
  const dataFilter = (rows) => {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };
  const columns = data[0] && Object.keys(data[0]);

  return (
    <Fragment>
      <h1>Cat API </h1>

      <form>
        <label>Search :</label>
        <input
          type="text"
          placeholder="search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {columns &&
          columns.map((column, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          ))}
      </form>

      {/* Error message */}
      {isError && <div>Something went wrong ...</div>}

      {/* loading data  */}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <Datatable dataa={dataFilter(data)} />
        </div>
      )}
    </Fragment>
  );
}

export default App;

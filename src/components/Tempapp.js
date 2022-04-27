import React from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = React.useState(null);
  const [search, setSearch] = React.useState("Delhi");

  React.useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=99f3592c5c37f6a1cf22fd185196c983`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            placeholder="search here"
            className="inputField"
            value={search.toUpperCase()}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {!city ? (
          <h1 className="errorMsg">
            No Data Found <br />
            Please search <br />
            valid data
          </h1>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search.toUpperCase()}</h2>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_max">
                {" "}
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel{" "}
              </h3>
              <h3 className="tempmin_max">
                {" "}
                humidity: {city.humidity} % | pressure: {city.pressure} hPa{" "}
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;

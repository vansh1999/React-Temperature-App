import { useState, useEffect } from "react";

const Temperature = () => {
  const [query, setQuery] = useState("mumbai");

  const [currentCity, setcurrentCity] = useState("");

  const [country, setCountry] = useState("IND");

  const apiKey = "bbcf8d6b286458ad4ea994cb2a9af5f6";

  var fetchApi;

  useEffect(() => {
    fetchApi = fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcurrentCity(data.main);
        setCountry(data.sys);
      });
  }, [query]);

  console.log(fetchApi);

  return (
    <div className="App">
      <div class="temp-container">
        <br />
        <input
          type="search"
          className="search"
          placeholder="Search City..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Go</button>
        {currentCity == undefined || country == undefined ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="city-name">
              {query} ({country.country})
            </div>

            <div className="city-temp">Temperature - {currentCity.temp} K</div>

            <div className="city-temp">
              Temperature - {Math.ceil(currentCity.temp - 273.15)} C
            </div>

            <div className="city-temp">Pressure - {currentCity.pressure}</div>

            <div className="city-temp">Humidity - {currentCity.humidity}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temperature;

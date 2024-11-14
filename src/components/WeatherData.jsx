import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import TempToggle from "../components/TempToggle";
import DisplayWeather from "../components/DisplayWeather";

function WeatherData() {
  const [weatherInfo, setWeatherInfo] = useState(""); // api retreival
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(""); // what the user types
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  const handleLocationSubmit = (searchValue) => {
    setLocation(searchValue);
  };

  // const weatherImg = document.querySelector("weatherImg");

  async function getWeather(location) {
    setIsLoading(true);
    setError(null); // reset error
    try {
      const response =
        await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=66335529NH8DXDCDHH6X2KXW3&contentType=json
`);
      const data = await response.json();
      console.log("Weather data", data);
      setWeatherInfo(data);
    } catch (err) {
      setError("failed to fetch weather data");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (location) {
      getWeather(location);
    }
  }, [location]);

  return (
    <div>
      <Header
        onHandleToggle={handleToggle}
        isCelsius={isCelsius}
        onLocationSubmit={handleLocationSubmit}
      />
      <DisplayWeather
        weatherData={weatherInfo}
        isLoading={isLoading}
        error={error}
        isCelsius={isCelsius}
      />
    </div>
  );
}

export default WeatherData;

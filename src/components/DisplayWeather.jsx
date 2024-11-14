import "../styles/DisplayWeather.css";

function DisplayWeather({ weatherData, isLoading, error, isCelsius }) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!weatherData) return <div>No weather data available</div>;

  let celsius = weatherData.currentConditions.temp;
  let fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="weatherContainer">
      <section className="GeneralWeatherInfo">
        <p>Current Conditon: {weatherData.currentConditions.conditions}</p>
        <h2>{weatherData.address}</h2>
      </section>
      <section className="SpecificWeatherInfo">
        <p>{isCelsius ? celsius : fahrenheit}</p>
        <p>Feels Like: {weatherData.currentConditions.feelslike}</p>
        <p>Wind: {weatherData.currentConditions.windspeed}</p>
        <p>Humidity: {weatherData.currentConditions.humidity}</p>
      </section>
    </div>
  );
}

export default DisplayWeather;

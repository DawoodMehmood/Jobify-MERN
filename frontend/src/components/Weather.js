import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { WiThunderstorm, WiSprinkle, WiRain, WiSnow, WiFog, WiDaySunny, WiCloud, WiCloudy, WiShowers, WiNightClear } from "react-icons/wi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${"b782dc7d89fdade8e3fa58ee18d66ee8"}`);
        setWeatherData(response.data);
      });
    }
    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      const weatherId = weatherData.weather[0].id;
      let icon = '';

      if (weatherId >= 200 && weatherId < 300) {
        icon = <WiThunderstorm />;
      } else if (weatherId >= 300 && weatherId < 400) {
        icon = <WiSprinkle />;
      } else if (weatherId >= 500 && weatherId < 600) {
        icon = <WiRain />;
      } else if (weatherId >= 600 && weatherId < 700) {
        icon = <WiSnow />;
      } else if (weatherId >= 700 && weatherId < 800) {
        icon = <WiFog />;
      } else if (weatherId === 800) {
        const currentTime = new Date().getHours();
        icon = currentTime >= 18 || currentTime <= 6 ? <WiNightClear /> : <WiDaySunny />;
      } else if (weatherId === 801) {
        icon = <WiCloud />;
      } else if(weatherId === 311 || weatherId === 312 || weatherId === 313 || weatherId === 314 || weatherId === 321){
        icon = <WiShowers />;
      } else if (weatherId > 801 && weatherId < 900) {
        icon = <WiCloudy />;
      }
      setWeatherIcon(icon);
    }
  }, [weatherData]);

  return (
    <IconContext.Provider value={{ size: '2.7em', }} >
      <li className="navbar__item, weather-icon">
        {weatherIcon}
      </li>
      <li className="navbar__item, weather-data">
      {weatherData && <p>{weatherData.main.temp}°C</p>}
      </li>
    </IconContext.Provider>
  );
};

export default Weather;

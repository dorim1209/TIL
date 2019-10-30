import React, { useState, useEffect } from "react";
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";

import "./App.css";

const App = () => {
  const APPID = "8572430805097218f9162f19c2fd699a";
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;
    const res = await Axios.get(url);
    const { data } = res;
    setCurrent(data);
  };
  const getHourlyTemp = async () => {};

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch {
      alert("위치 제발 동의해주세요ㅠㅠ");
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header className="header-padding">
        <h1>일기예보</h1>
      </header>
      <main className="container">
        {!current ? <Spinner /> : <Current current={current} />}

        <Forecast />
      </main>
    </>
  );
};

export default App;

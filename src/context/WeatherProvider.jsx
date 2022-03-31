import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const dataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchWeather = async (datos) => {
    setIsLoading(true);
    try {
      const { ciudad, pais } = datos;

      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      // console.log(data[0]);
      const { lat, lon } = data[0];
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      //Destructuring permite renombrar una variable
      const { data: weather } = await axios(urlWeather);
      setResult(weather);
      // También se puede colocar el setIsLoading aquí:
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, dataSearch, searchWeather, result, isLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;

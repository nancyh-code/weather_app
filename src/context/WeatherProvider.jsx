import { useState, createContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });

  const dataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchWeather = (data) => {
    console.log(data);
  };
  return (
    <WeatherContext.Provider value={{ search, dataSearch, searchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;

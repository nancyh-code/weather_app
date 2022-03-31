import useWeather from "../hooks/useWeather";

const Result = () => {
  const { result } = useWeather();

  const { name, main } = result;

  const kelvin = 273.15;
  return (
    <div className="contenedor clima">
      <h2>El Clima en {name} actualmente:</h2>
      <p>{parseInt(main.temp - kelvin)} °C </p>
      <div className="temp_min_max">
        <p>Máxima: {parseInt(main.temp_max - kelvin)} °C </p>
        <p>Mínima: {parseInt(main.temp_min - kelvin)} °C </p>
      </div>
    </div>
  );
};

export default Result;

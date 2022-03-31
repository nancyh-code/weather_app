import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {
  const [alert, setAlert] = useState("");

  const { search, dataSearch, searchWeather } = useWeather();
  console.log(search);

  const { ciudad, pais } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
  };

  return (
    <div className="contenedor">
      {alert && <p className="alert">{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="city"
            name="ciudad"
            placeholder="Ciudad a consultar"
            onChange={dataSearch}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select id="country" name="pais" onChange={dataSearch} value={pais}>
            <option value="">-Selecciona un país-</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="RU">Rusia</option>
            <option value="CA">Canadá</option>
            <option value="IT">Italia</option>
            <option value="GE">Alemania</option>
            <option value="CL">Chile</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};

export default Form;

import React from "react";

const Form = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ciudad a consultar"
          />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select id="country" name="country">
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

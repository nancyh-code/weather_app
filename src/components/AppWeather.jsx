import React from "react";
import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";
import useWeather from "../hooks/useWeather";

const AppWeather = () => {
  const { result, isLoading } = useWeather();
  return (
    <>
      <main className="dos-columnas">
        <Form />
        {isLoading ? <Spinner /> : result?.name && <Result />}
      </main>
    </>
  );
};

export default AppWeather;

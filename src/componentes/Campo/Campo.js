import { useState } from "react";
import "./Campo.css";

const Campo= (props) => {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  if (props.titulo.toLowerCase() === "foto") {
    var placeholderModificado = `Ingresar url de la ${props.titulo.toLowerCase()}`;
  } else {
    placeholderModificado = `Ingresar ${props.titulo.toLowerCase()}`;
  }

  const {type="text"} = props;

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;

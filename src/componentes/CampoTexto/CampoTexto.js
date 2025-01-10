import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  if (props.titulo.toLowerCase() === "foto") {
    var placeholderModificado = `Ingresar url de la ${props.titulo.toLowerCase()}`;
  } else {
    placeholderModificado = `Ingresar ${props.titulo.toLowerCase()}`;
  }

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;

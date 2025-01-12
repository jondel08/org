import { useState } from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="campo-lista">
      <label>{props.titulo}</label>
      <select
        id="options"
        name="options"
        value={props.valor}
        onChange={manejarCambio}
      >
        <option className="disabled" value="" defaultValue="" disabled>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => {
          return (
            <option key={index} value={equipo}>
              {equipo}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;

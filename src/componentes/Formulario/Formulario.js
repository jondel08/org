import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Boton/Boton";
import ListaOpciones from "../ListaOpciones/ListaOpciones";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const { registrarColaborador } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>

        <CampoTexto
          titulo="Nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />

        <CampoTexto
          titulo="Puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />

        <CampoTexto titulo="Foto" required valor={foto} setValor={setFoto} />

        <ListaOpciones
          titulo="Equipo"
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        />

        <Boton texto="Crear" />
      </form>
    </section>
  );
};

export default Formulario;

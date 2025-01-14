import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import ListaOpciones from "../ListaOpciones/ListaOpciones";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [nombreEquipo, setNombreEquipo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

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

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ equipo: nombreEquipo, destaque: color, fondo: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>

        <Campo
          titulo="Nombre"
          required
          valor={nombre}
          setValor={setNombre}
        />

        <Campo
          titulo="Puesto"
          required
          valor={puesto}
          setValor={setPuesto}
        />

        <Campo titulo="Foto" required valor={foto} setValor={setFoto} />

        <ListaOpciones
          titulo="Equipo"
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos}
        />

        <Boton texto="Crear" />
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el Equipo</h2>

        <Campo
          titulo="Nombre de Equipo"
          required
          valor={nombreEquipo}
          setValor={setNombreEquipo}
        />

        <Campo
          titulo="Color"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />

        <Boton texto="Registrar" />
      </form>
    </section>
  );
};

export default Formulario;

import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Boton/Boton";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" type="text" />
        <CampoTexto
          titulo="Puesto"
          type="email"
        />
        <CampoTexto
          titulo="Foto"
          type="url"
        />
        <CampoTexto
          titulo="Equipo"
          type="select"
        />
        <Boton />
      </form>
    </section>
  );
};

export default Formulario;

import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
  const { equipo, destaque, fondo } = props.datos;
  const colorSecundario = {
    backgroundColor: fondo,
  };
  const colorPrimario = {
    borderColor: destaque,
  };

  const { colaboradores } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={colorSecundario}>
          <h3 style={colorPrimario}>{equipo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={destaque}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

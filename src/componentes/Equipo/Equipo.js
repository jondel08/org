import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { equipo, destaque, fondo, id } = props.datos;
  const colorSecundario = {
    // backgroundColor: fondo,
    backgroundColor: hexToRgba(destaque,0.5),
  };
  const colorPrimario = {
    borderColor: destaque,
  };
  // console.log(fondo);
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={colorSecundario}>
          <input 
            type="color" 
            className="input-color" 
            value={destaque} 
            onChange={(e) => {
              //console.log(e.target.value);
              actualizarColor(e.target.value, id);
            }}
            />
          <h3 style={colorPrimario}>{equipo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={destaque}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

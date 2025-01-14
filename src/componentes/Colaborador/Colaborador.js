import "./Colaborador.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  return (
    <div className="colaborador">
      <RiDeleteBinLine
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <FaHeart color="red" onClick={() => like(id)} />
        ) : (
          <FaRegHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;

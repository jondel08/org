import "./CampoTexto.css";

const CampoTexto = (props) => {
          if (props.titulo.toLowerCase() === "foto") {
                    var placeholderModificado = `Ingresar url de la ${props.titulo.toLowerCase()}`;
          } else {
                    placeholderModificado = `Ingresar ${props.titulo.toLowerCase()}`;
          }
          
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={placeholderModificado} />
    </div>
  );
};

export default CampoTexto;

import "./Boton.css";

const Boton = (props) =>{
          return (
            <div className="btn">
              <button>{props.texto}</button>
            </div>
          );
}

export default Boton;
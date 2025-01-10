import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg/MiOrg";

function App() {
  const [mostrarForm, setMostrarForm] = useState(true);

  const handleToggleForm = () => {
    setMostrarForm(!mostrarForm);
  };

  return (
    <div>
      <Header />
      {mostrarForm ? <Formulario /> : <div></div>}
      <MiOrg mostrar={mostrarForm} toggleMostrar={handleToggleForm} />
    </div>
  );
}

export default App;

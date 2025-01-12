import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [mostrarForm, setMostrarForm] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: 1,
      equipo: "Front-End",
      foto: "https://github.com/jondel08.png",
      nombre: "Joam Delgado",
      puesto: "Desarrollador Front-End",
    },
  ]);

  const handleToggleForm = () => {
    setMostrarForm(!mostrarForm);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  //Lista de equipos
  const equipos = [
    {
      equipo: "Programación",
      destaque: "#57C278",
      fondo: "#D9F7E9",
    },
    {
      equipo: "Front-End",
      destaque: "#82CFFA",
      fondo: "#E8F8FF",
    },
    {
      equipo: "Data Science",
      destaque: "#A6D157",
      fondo: "#F0F8E2",
    },
    {
      equipo: "Devops",
      destaque: "#E06B69",
      fondo: "#FDE7E8",
    },
    {
      equipo: "UX y Diseño",
      destaque: "#DB6EBF",
      fondo: "#FAE9F5",
    },
    {
      equipo: "Móvil",
      destaque: "#FFBA05",
      fondo: "#FFF5D9",
    },
    {
      equipo: "Innovación y Gestión",
      destaque: "#FF8A29",
      fondo: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {mostrarForm ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.equipo)}
          registrarColaborador={registrarColaborador}
        />
      ) : (
        <div></div>
      )}
      <MiOrg mostrar={mostrarForm} toggleMostrar={handleToggleForm} />

      {equipos.map((equipo, index) => (
        <Equipo
          datos={equipo}
          key={equipo.equipo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.equipo
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

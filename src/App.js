import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      id: uuidv4(),
      equipo: "Front-End",
      foto: "https://github.com/jondel08.png",
      nombre: "Joam Delgado",
      puesto: "Desarrollador Front-End",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXe-MYcEZHrpw0-0hNO1mSdlcAORQoJmOJxKwmBZxrkRf9iP4H",
      nombre: "Ruben Dario",
      puesto: "Analista",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXDzjv-IAKTyErirX6SyziQCl2Cq3dmO__Q&s",
      nombre: "Ignacio Delgado",
      puesto: "Diseñador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZSk618A7EkSPgHYq3cyTELPPblm8qnB2hw&s",
      nombre: "Coromoto Cabriles",
      puesto: "Instructora",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOy5z90iLbiRND-3MHN7sCb7pV45Db0wY9g&s",
      nombre: "Ninoska Escalona",
      puesto: "Lider",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Móvil",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnwLZoB9-ToHL_TFUbyXzANw4hcSWTfw98g&s",
      nombre: "Eiker Escalona",
      puesto: "Coordinador",
      fav: true,
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      id: uuidv4(),
      equipo: "Programación",
      destaque: "#57C278",
      fondo: "#D9F7E9",
    },
    {
      id: uuidv4(),
      equipo: "Front-End",
      destaque: "#82CFFA",
      fondo: "#E8F8FF",
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      destaque: "#A6D157",
      fondo: "#F0F8E2",
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      destaque: "#E06B69",
      fondo: "#FDE7E8",
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      destaque: "#DB6EBF",
      fondo: "#FAE9F5",
    },
    {
      id: uuidv4(),
      equipo: "Móvil",
      destaque: "#FFBA05",
      fondo: "#FFF5D9",
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      destaque: "#FF8A29",
      fondo: "#FFEEDF",
    },
  ]);

  const handleToggleForm = () => {
    setMostrarForm(!mostrarForm);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    // console.log("Eliminando colaborador con id: " + id);
    setColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.destaque = color;
      }
      return equipo;
    });

    setEquipos(equiposActualizados);
  };

  //Lista de equipos
  // const equipos = [
  //   {
  //     equipo: "Programación",
  //     destaque: "#57C278",
  //     fondo: "#D9F7E9",
  //   },
  //   {
  //     equipo: "Front-End",
  //     destaque: "#82CFFA",
  //     fondo: "#E8F8FF",
  //   },
  //   {
  //     equipo: "Data Science",
  //     destaque: "#A6D157",
  //     fondo: "#F0F8E2",
  //   },
  //   {
  //     equipo: "Devops",
  //     destaque: "#E06B69",
  //     fondo: "#FDE7E8",
  //   },
  //   {
  //     equipo: "UX y Diseño",
  //     destaque: "#DB6EBF",
  //     fondo: "#FAE9F5",
  //   },
  //   {
  //     equipo: "Móvil",
  //     destaque: "#FFBA05",
  //     fondo: "#FFF5D9",
  //   },
  //   {
  //     equipo: "Innovación y Gestión",
  //     destaque: "#FF8A29",
  //     fondo: "#FFEEDF",
  //   },
  // ];

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
    console.log(equipos);
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    setColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarForm ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.equipo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
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
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

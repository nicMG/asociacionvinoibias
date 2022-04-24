import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { API_URL } from "./config";
import { useContext, useState } from "react";
import { UserContext } from "./context/app.context";
import { EditorContext } from "./context/editor.context";

import "./App.css";

// import routes
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Feria from "./components/Feria";
import Projects from "./components/Projects";
import Private from "./components/Private";
import Join from "./components/Join";
import Nav from "./components/Nav";
import Actividades from "./components/Actividades";
import Vina from "./components/Vina";
import Contacto from "./components/Contacto";
import Estatutos from "./components/Estatutos";
import Junta from "./components/Junta";
/*
import CrearBlog from "./components/admin/CrearBlog";
import EditarFeria from "./components/admin/EditarFeria";
import EditarProyecto from "./components/admin/EditarProyecto";
import EditarVina from "./components/admin/EditarVina";
import CrearFeria from "./components/admin/CrearFeria";
import CrearProyecto from "./components/admin/CrearProyecto";
import CrearVina from "./components/admin/CrearVina";
import EditarBlog from "./components/admin/EditarBlog";
import AllBlogs from "./components/admin/AllBlogs";
import AllFerias from "./components/admin/AllFerias";
import AllVinas from "./components/admin/AllVinas";
import AllProjects from "./components/admin/AllProjects";
import AllAsociados from "./components/admin/AllAsociados";
import EditarAsociados from "./components/admin/EditarAsociados";
import CrearAsociados from "./components/admin/CrearAsociados";
import AdminSignUp from "./components/admin/AdminSignUp";
import AdminSignIn from "./components/admin/AdminSignIn";
*/

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const { editorText, setEditorText } = useContext(EditorContext);
  /*
  //Registro
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      let newUser = {
        nombre: event.target.nombre.value,
        apellidos: event.target.apellidos.value,
        email: event.target.email.value,
        contraseña: event.target.contraseña.value,
      };

      let response = await axios.post(`${API_URL}/signup`, newUser, {
        withCredentials: true,
      });

      navigate("/signin");
    } catch (error) {
      setError(error.response.data.errorMessage);
    }
  };

  //SignIn
  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      let newUser = {
        email: event.target.email.value,
        contraseña: event.target.contraseña.value,
      };

      let response = await axios.post(`${API_URL}/signin`, newUser, {
        withCredentials: true,
      });

      setUser(response.data);
      navigate("/admin");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  //Cerrar sesion
  const handleLogOut = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  };

  //============================================================================
  // crear entrada del blog
  const handleCreateBlog = async (event) => {
    event.preventDefault();
    try {
      let newBlog = {
        titulo: event.target.titulo.value,
        autor: event.target.autor.value,
        contenido: editorText,
      };

      let response = await axios.post(`${API_URL}/blog/crear`, newBlog, {
        withCredentials: true,
      });
      navigate("/admin/blog");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  // editar entrada del blog
  const handleEditBlog = async (event, id) => {
    event.preventDefault();

    let editedBlog = {
      titulo: event.target.titulo.value,
      autor: event.target.autor.value,
      contenido: editorText,
    };

    let response = await axios.patch(`${API_URL}/blog/${id}`, editedBlog, {
      withCredentials: true,
    });
    navigate("/admin/blog");
  };
  //====================================================================

  //crear entrada de ferias
  const handleCreateFeria = async (event) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let newFeria = {
      titulo: event.target.titulo.value,
      imagen: imgResponse.data.imagen,
      programa: event.target.programa.value,
      fecha: event.target.fecha.value,
    };

    let response = await axios.post(
      `${API_URL}/feria-del-vino/crear`,
      newFeria,
      { withCredentials: true }
    );

    navigate("/admin/feria");
  };

  //editar entrada de feria del vino
  const handleEditFeria = async (event, id) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let editedFeria = {
      titulo: event.target.titulo.value,
      imagen: imgResponse.data.imagen,
      programa: event.target.programa.value,
      fecha: event.target.fecha.value,
    };

    let response = await axios.patch(
      `${API_URL}/feria-del-vino/${id}`,
      editedFeria,
      { withCredentials: true }
    );

    navigate("/admin/feria");
  };

  //============================================================

  //crear entrada para "la viña en ibias"
  const handleCreateVina = async (event) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let newVina = {
      titulo: event.target.titulo.value,
      imagen: imgResponse.data.imagen,
      texto: event.target.texto.value,
    };

    let response = await axios.post(`${API_URL}/vina/crear`, newVina, {
      withCredentials: true,
    });

    navigate("/admin/vina");
  };

  //editar entrada de "la viña en ibias"
  const handleEditVina = async (event, id) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let editedVina = {
      titulo: event.target.titulo.value,
      imagen: imgResponse.data.imagen,
      texto: event.target.texto.value,
    };

    let response = await axios.patch(`${API_URL}/vina/${id}`, editedVina, {
      withCredentials: true,
    });

    navigate("/admin/vina");
  };

  //============================================================================

  //crear entrada para apartado de proyectos
  const handleCreateProyecto = async (event) => {
    event.preventDefault();
    try {
      let imageForm = new FormData();
      imageForm.append("imageUrl", event.target.imagen.files[0]);
      let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

      let newProyecto = {
        titulo: event.target.titulo.value,
        imagen: imgResponse.data.imagen,
        objetivos: event.target.objetivos.value,
        acciones: event.target.acciones.value,
        participantes: event.target.participantes.value,
      };
      let response = await axios.post(
        `${API_URL}/proyecto/crear`,
        newProyecto,
        {
          withCredentials: true,
        }
      );

      navigate("/admin/proyectos");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  //editar proyecto
  const handleEditProyecto = async (event, id) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let editedProyecto = {
      titulo: event.target.titulo.value,
      imagen: imgResponse.data.imagen,
      objetivos: event.target.objetivos.value,
      acciones: event.target.acciones.value,
      participantes: event.target.participantes.value,
    };

    let response = await axios.patch(
      `${API_URL}/proyecto/${id}`,
      editedProyecto,
      { withCredentials: true }
    );

    navigate("/admin/proyectos");
  };

  //============================================================================
  //crear entrada asociados
  const handleCreateAsociado = async (event) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let newAsociado = {
      nombre: event.target.nombre.value,
      imagen: imgResponse.data.imagen,
      email: event.target.email.value,
      tlf: event.target.tlf.value,
      pageLink: event.target.pageLink.value,
    };

    let response = await axios.post(`${API_URL}/asociados/crear`, newAsociado, {
      withCredentials: true,
    });

    navigate(`/admin/asociados`);
  };

  //editar entrada asociados
  const handleEditAsociado = async (event, id) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append("imageUrl", event.target.imagen.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let editedAsociado = {
      nombre: event.target.nombre.value,
      imagen: imgResponse.data.imagen,
      email: event.target.email.value,
      tlf: event.target.tlf.value,
      pageLink: event.target.pageLink.value,
    };

    let response = await axios.patch(
      `${API_URL}/asociados/${id}`,
      editedAsociado,
      { withCredentials: true }
    );
    navigate(`/admin/asociados`);
  };
*/
  return (
    <div className="App">
      <Nav />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/feria" element={<Feria />} />
        <Route path="/proyecto" element={<Projects />} />
        <Route path="/contacto" element={<Junta />} />
        {/*
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/vina" element={<Vina />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}

        {/* //Admin Routes */}
        {/*
        <Route
          path="/admin/signin"
          element={<AdminSignIn signIn={handleSignIn} error={error} />}
        />
        <Route
          path="/admin/signup"
          element={<AdminSignUp signUp={handleSignUp} error={error} />}
        />

        <Route path="/admin/feria" element={<AllFerias />} />
        <Route
          path="/admin/feria/:id/editar"
          element={<EditarFeria editFeria={handleEditFeria} />}
        />
        <Route
          path="/admin/feria/crear"
          element={<CrearFeria createFeria={handleCreateFeria} />}
        />

        <Route path="/admin/proyectos" element={<AllProjects />} />
        <Route
          path="/admin/proyectos/:id/editar"
          element={<EditarProyecto editProject={handleEditProyecto} />}
        />
        <Route
          path="/admin/proyectos/crear"
          element={<CrearProyecto createProject={handleCreateProyecto} />}
        />

        <Route path="/admin/vina" element={<AllVinas />} />
        <Route
          path="/admin/vina/:id/editar"
          element={<EditarVina editVina={handleEditVina} />}
        />
        <Route
          path="/admin/vina/crear"
          element={<CrearVina createVina={handleCreateVina} />}
        />

        <Route path="/admin/blog" element={<AllBlogs />} />
        <Route
          path="/admin/blog/:id/editar"
          element={<EditarBlog editBlog={handleEditBlog} />}
        />
        <Route
          path="/admin/blog/crear"
          element={<CrearBlog createBlog={handleCreateBlog} />}
        />

        <Route path="/admin/asociados" element={<AllAsociados />} />
        <Route
          path="/admin/asociados/:id/editar"
          element={<EditarAsociados editAsociate={handleEditAsociado} />}
        />
        <Route
          path="/admin/asociados/crear"
          element={<CrearAsociados createAsociate={handleCreateAsociado} />}
        />*/}
      </Routes>
    </div>
  );
}

export default App;

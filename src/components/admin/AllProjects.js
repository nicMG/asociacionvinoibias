import axios from 'axios';
import { API_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllProjects() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/proyectos`, {
        withCredentials: true,
      });
      setProyectos(response.data);
    };
    getData();
  }, []);

  if (!proyectos.length) {
    return <h1>Cargando...........</h1>;
  }

  return (
    <div>
      <h1>All Projects</h1>
      <Link to={'crear'}>Crear Proyecto</Link>
      <hr />
      <div>
        {proyectos.map((ele) => {
          return (
            <div>
              <Link to={`/admin/proyectos/${ele._id}/editar`}>
                <h1>{ele.titulo}</h1>
              </Link>
              <img
                src={ele.imagen}
                alt="bro"
                style={{
                  width: 300,
                }}
              />
              <ul>
                <li>{ele.objetivos}</li>
                <li>{ele.acciones}</li>
                <li>{ele.participantes}</li>
              </ul>
              <small>finalizado? {ele.finalizado}</small>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProjects;

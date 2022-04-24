import axios from 'axios';
import { API_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllAsociados() {
  const [asociados, setAsociados] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/asociados`, {
        withCredentials: true,
      });
      setAsociados(response.data);
    };
    getData();
  }, []);

  if (!asociados.length) {
    return <h1>CARGANDO...</h1>;
  }

  return (
    <div>
      <h1>Asociados</h1>
      <Link to={'crear'}>Crear Entrada</Link>
      <div>
        {asociados.map((ele) => {
          return (
            <div>
              <Link to={`/admin/asociados/${ele._id}/editar`}>
                <h1>{ele.nombre}</h1>
              </Link>
              <img
                src={ele.imagen}
                alt="imagen"
                style={{
                  width: 300,
                }}
              />
              <p>{ele.email}</p>
              <p>By {ele.tlf}</p>
              <p>By {ele.pageLink}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllAsociados;

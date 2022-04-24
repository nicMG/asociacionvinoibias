import axios from 'axios';
import { API_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllFerias() {
  const [ferias, setFerias] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/feria-del-vino`, {
        withCredentials: true,
      });
      setFerias(response.data);
    };
    getData();
  }, []);

  if (!ferias.length) {
    return <h1>CARGANDO BRO...</h1>;
  }

  return (
    <div>
      <h1>All Ferias</h1>
      <Link to={'crear'}>Crear Entrada</Link>
      <hr />
      <div>
        {ferias.map((ele) => {
          return (
            <div>
              <Link to={`/admin/feria/${ele._id}/editar`}>
                <h1>{ele.titulo}</h1>
              </Link>
              <img
                src={ele.imagen}
                alt="bro"
                style={{
                  width: 300,
                }}
              />
              <p>{ele.texto}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllFerias;

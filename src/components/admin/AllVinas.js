import axios from 'axios';
import { API_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllVinas() {
  const [vinas, setVinas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/vinas`, {
        withCredentials: true,
      });
      setVinas(response.data);
    };
    getData();
  }, []);

  if (!vinas.length) {
    return <h1>Cargando cargando...</h1>;
  }

  return (
    <div>
      <h1>La viña</h1>
      <Link to={'crear'}>Crear Entrada</Link>
      <hr />
      <div>
        {vinas.map((ele) => {
          return (
            <div>
              <Link to={`/admin/vina/${ele._id}/editar`}>
                <h1>{ele.titulo}</h1>
              </Link>
              <img
                src={ele.imagen}
                alt="bro"
                style={{
                  width: 300,
                }}
              />
              <p>{ele.programa}</p>
              <p>{ele.texto}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllVinas;

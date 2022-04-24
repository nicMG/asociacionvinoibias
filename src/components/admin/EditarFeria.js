import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';

function EditarFeria(props) {
  const { editFeria } = props;
  const { id } = useParams();
  const [feria, setFeria] = useState('cargando');

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/feria-del-vino/${id}`, {
        withCredentials: true,
      });
      setFeria(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Editar Blog</h1>
      <form
        onSubmit={(event) => {
          editFeria(event, id);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
            defaultValue={feria.titulo}
          />
        </div>
        <div class="form-group">
          {/* <label for="fileInput">Inserta imagen</label> */}
          <input
            type="file"
            name="imagen"
            id="fileInput"
            class="form-control-file"
            accept="image/png, image/jpg"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control-lg"
            name="programa"
            placeholder="programa"
            defaultValue={feria.programa}
          />
        </div>
        <div class="form-group">
          <input
            type="date"
            class="form-control-lg"
            name="fecha"
            placeholder="fecha"
            //conseguir mantener el valor por defecto=========
            value={feria.fecha}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditarFeria;

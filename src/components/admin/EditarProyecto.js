import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';

function EditarProyecto(props) {
  const { editProject } = props;
  const { id } = useParams();
  const [proyecto, setProyecto] = useState('cargando');

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/proyecto/${id}`, {
        withCredentials: true,
      });
      setProyecto(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Editar Proyecto</h1>
      <form
        onSubmit={(event) => {
          editProject(event, id);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
            defaultValue={proyecto.titulo}
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
          <input
            class="form-control-lg"
            name="objetivos"
            placeholder="objetivos"
            defaultValue={proyecto.objetivos}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="acciones"
            placeholder="acciones"
            defaultValue={proyecto.acciones}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="participantes"
            placeholder="participantes"
            defaultValue={proyecto.participantes}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditarProyecto;

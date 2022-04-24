import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';

function EditarAsociados(props) {
  const { editAsociate } = props;
  const { id } = useParams();
  const [asociado, setAsociado] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/asociado/${id}`, {
        withCredentials: true,
      });
      setAsociado(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Editar Asociado</h1>
      <form
        onSubmit={(event) => {
          editAsociate(event, id);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="nombre"
            placeholder="nombre"
            defaultValue={asociado.nombre}
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
            type="email"
            class="form-control-lg"
            name="email"
            placeholder="email"
            defaultValue={asociado.email}
          />
        </div>
        <div class="form-group">
          <input
            type="tel"
            class="form-control-lg"
            name="tlf"
            placeholder="Teléfono"
            pattern="[0-9]{9}"
            maxLength="9"
            value={asociado.tlf}
          />
        </div>
        <div class="form-group">
          <input
            type="url"
            class="form-control-lg"
            name="pageLink"
            placeholder="introduce url"
            value={asociado.pageLink}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditarAsociados;

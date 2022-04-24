import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';

function EditarVina(props) {
  const { editVina } = props;
  const { id } = useParams();
  const [entrada, setEntrada] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/vina/${id}`, {
        withCredentials: true,
      });
      setEntrada(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Editar Vina</h1>
      <form
        onSubmit={(event) => {
          editVina(event, id);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
            defaultValue={entrada.titulo}
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control-lg"
            name="texto"
            placeholder="texto"
            defaultValue={entrada.texto}
          />
        </div>
        <img
          src={entrada.imagen}
          alt="bro"
          style={{
            width: 300,
          }}
        />
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
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditarVina;

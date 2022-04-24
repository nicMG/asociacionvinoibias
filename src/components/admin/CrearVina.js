import React from 'react';

function CrearVina(props) {
  const { createVina } = props;
  return (
    <div>
      <h1>Crear Entrada Viña</h1>
      <form onSubmit={createVina}>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="texto"
            placeholder="texto"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrearVina;

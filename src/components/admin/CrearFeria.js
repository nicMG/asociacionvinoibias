import React from 'react';

function CrearFeria(props) {
  const { createFeria } = props;
  return (
    <div>
      <h1>Crear Blog</h1>
      <form onSubmit={createFeria}>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
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
          />
        </div>
        <div class="form-group">
          <input type="date" class="form-control-lg" name="fecha" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrearFeria;

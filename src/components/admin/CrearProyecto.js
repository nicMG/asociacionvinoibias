import React from 'react';

function CrearProyecto(props) {
  const { createProject } = props;

  return (
    <div>
      <h1>Crear Proyecto</h1>
      <form onSubmit={createProject}>
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
          <input
            type="text"
            class="form-control-lg"
            name="objetivos"
            placeholder="objetivos"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="acciones"
            placeholder="acciones"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="participantes"
            placeholder="participantes"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrearProyecto;

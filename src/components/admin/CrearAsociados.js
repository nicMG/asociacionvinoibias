import React from 'react';

function CrearAsociados(props) {
  const { createAsociate } = props;

  return (
    <div>
      <h1>Añadir asociado</h1>
      <form onSubmit={createAsociate}>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="nombre"
            placeholder="nombre"
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
          />
        </div>
        <div class="form-group">
          <input
            type="url"
            class="form-control-lg"
            name="pageLink"
            placeholder="introduce url"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrearAsociados;

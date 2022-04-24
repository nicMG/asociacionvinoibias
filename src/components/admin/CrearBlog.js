import React from 'react';
import TextEditor from './TextEditor';

function CrearBlog(props) {
  const { createBlog } = props;
  return (
    <div>
      <h1>Crear Blog</h1>
      <form onSubmit={createBlog}>
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
          />
        </div>
        <TextEditor />
        {/* <div class="form-group">
          <textarea
            class="form-control-lg"
            name="contenido"
            placeholder="contenido"
          />
        </div> */}
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="autor"
            placeholder="autor"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CrearBlog;

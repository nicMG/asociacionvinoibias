import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import TextEditor from './TextEditor';

function EditarBlog(props) {
  const { editBlog } = props;
  const { id } = useParams();
  const [blog, setBlog] = useState('cargando');

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/blog/${id}`, {
        withCredentials: true,
      });
      setBlog(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Editar Blog</h1>
      <form
        onSubmit={(event) => {
          editBlog(event, id);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="titulo"
            placeholder="Titulo"
            defaultValue={blog.titulo}
          />
        </div>

        <div>
          <TextEditor contenido={blog.contenido} />
        </div>

        {/* <div class="form-group">
          <textarea
            class="form-control-lg"
            name="contenido"
            placeholder="contenido"
            defaultValue={blog.contenido}
          />
        </div> */}
        <div class="form-group">
          <input
            type="text"
            class="form-control-lg"
            name="autor"
            placeholder="autor"
            defaultValue={blog.autor}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditarBlog;

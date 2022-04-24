import axios from 'axios';
import { API_URL } from '../../config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/blogs`, {
        withcredentials: true,
      });
      setBlogs(response.data);
    };
    getData();
  }, []);

  if (!blogs.length) {
    return <h1>CARGANDO BRO...</h1>;
  }

  return (
    <div>
      <h1>All Blogs</h1>
      <Link to={'crear'}>Crear Entrada</Link>
      <div>
        {blogs.map((ele) => {
          return (
            <div>
              <Link to={`/admin/blog/${ele._id}/editar`}>
                <h1>{ele.titulo}</h1>
              </Link>
              <p>{parse(ele.contenido)}</p>
              <p>By {ele.autor}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBlogs;

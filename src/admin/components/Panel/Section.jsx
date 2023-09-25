import React from 'react'
import { Link } from "react-router-dom";

import './section.css'

const Section = () => {
  return (
    <div className="section-admin">
      <div className="box-category">
        <h3>Categorias</h3>

        <button>
          <Link to={`/admin/crear-categoria`}>Crear categoria</Link>
        </button>
        <br />
        <a href="">
          <button>Editar categoria</button>
        </a>
      </div>
      <hr />
      <div className="box-sizes">
        <h3>Talles</h3>
        <a href="">
          <button>Crear talle</button>
        </a>
        <br />
        <a href="">
          <button>Editar talle</button>
        </a>
      </div>
    </div>
  );
}

export default Section
import React from "react";
import "./Junta.css";

function Junta() {
  return (
    <div className="junta-main">
      <div className="junta-box">
        <div className="junta-names">
          <h1>JUNTA DIRECTIVA</h1>
          <hr></hr>
          <ul>
            <li>
              <h3>PRESIDENTE:</h3>
              <h5>-David Barrero Ron</h5>
            </li>
            <li>
              <h3>SECRETARIO:</h3>
              <h5>-Víctor Méndez Fernández</h5>
            </li>
            <li>
              <h3>TESORERO:</h3>
              <h5>-David Oviaño Pérez</h5>
            </li>
            <li>
              <h3>VOCALES:</h3>
              <h5>-José Álvarez Rodríguez</h5>
              <h5>-Aniceto Vega Poso</h5>
            </li>
          </ul>
        </div>
        <img src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650802245/solidVIMO.png_dwazj7.png" />
      </div>
      <div className="junta-contacto">
        <h1>Contacta con nosotros:</h1>
        <ul>
          <li>Email: viticultoresybodegasibias@gmail.com</li>
          <li>Ubicación:</li>
        </ul>
      </div>
    </div>
  );
}

export default Junta;

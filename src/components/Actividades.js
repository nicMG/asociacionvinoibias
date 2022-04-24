import React from 'react';
import './Actividades.css';

function Actividades() {
  return (
    <div className="actividades-body">
      <div className="actividades-actual">
        <h1>Actuales</h1>
        <div className="actividades-card">
          <div className="box">
            <img alt="1" />
            <h2>Objetivos</h2>
            <h2>Acciones</h2>
            <h2>Participantes</h2>
          </div>
          <div className="box">
            <img alt="2" />
          </div>
          <div className="box">
            <img alt="3" />
          </div>
        </div>
      </div>
      <div className="actividades-finalizadas">
        <h1>Finalizadas</h1>
        <div className="actividades-card">
          <div className="box">
            <img alt="1" />
            <h2>Objetivos</h2>
            <h2>Acciones</h2>
            <h2>Participantes</h2>
          </div>
          <div className="box">
            <img alt="2" />
          </div>
          <div className="box">
            <img alt="3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actividades;

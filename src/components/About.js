import React from 'react';
// import './About.css';

function About() {
  return (
    <div className="about-main">
      <div className="header">
        <img
          src="https://i.guim.co.uk/img/media/ae4637c5bdca3e3c7f0f86a741f43ecbe897852e/0_132_3545_2127/master/3545.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fa7442eb6602af03e57f71f33207e0c4"
          alt="foto"
        />
      </div>
      <div className="about-cards-div">
        <div className="about-card">Estatutos</div>
        <div className="about-card">Junta Directiva</div>
        <div className="about-card">Asociados</div>
      </div>
      <div className="asociados">
        <h3>Descubre nuestras bodegas</h3>
        <div className="asociados-name">
          <img
            alt="foto"
            src="https://static-abcblogs.abc.es/wp-content/uploads/sites/185/2015/01/0daae2ef0badaa3d7f8c0a51ab9579db-560x315.png"
          />
          <img
            alt="foto"
            src="https://static-abcblogs.abc.es/wp-content/uploads/sites/185/2015/01/0daae2ef0badaa3d7f8c0a51ab9579db-560x315.png"
          />
          <img
            alt="foto"
            src="https://static-abcblogs.abc.es/wp-content/uploads/sites/185/2015/01/0daae2ef0badaa3d7f8c0a51ab9579db-560x315.png"
          />
          <img
            alt="foto"
            src="https://static-abcblogs.abc.es/wp-content/uploads/sites/185/2015/01/0daae2ef0badaa3d7f8c0a51ab9579db-560x315.png"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

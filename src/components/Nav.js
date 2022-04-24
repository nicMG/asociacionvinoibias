import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { HashLink as Links } from "react-router-hash-link";

function Nav() {
  return (
    <div className="nav">
      <Link to={"/"} className="link">
        <img
          src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650815672/LOGOGRNDE_zkaifm.png"
          className="nav-img"
          alt="logo"
        />
      </Link>

      <div className="nav-inside">
        {/* <Link to={"/"} className="link">
          Home
        </Link> */}
        {/* <Link to={"/about"} className="link">
          Quienes somos
        </Link> */}
        <Links to={"/#Sobre-nosotros"} className="link">
          Sobre nosotros
        </Links>
        <Links to={"/#La-viña"} className="link">
          La viña en Ibias
        </Links>
        <Links to={"/#Feria"} className="link">
          Feria del vino
        </Links>

        {/* <Link to={"/actividades"} className="link">
          Actividades
        </Link> */}

        <Link to={"/contacto"} className="link">
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default Nav;

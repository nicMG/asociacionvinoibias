import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink as Links } from "react-router-hash-link";
import Feria from "./Feria";
import Footer from "./Footer";
import "./Main.css";
import Map from "./Map";
import Vina from "./Vina";

function Main() {
  return (
    <div className="mainbody">
      <div className="main-main">
        <img
          src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650807190/UVAS_MADURAS_PRIMER_PLANO_lev2q3.jpg"
          alt="no img"
          className="imgContainer"
        />
        <img
          src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650800151/vibo_3_blanco_xnzkpe.png"
          className="overlay"
          alt="logo"
        />
        <div className="main-text" id="Sobre-nosotros">
          <h3>
            La Asociación de Vitucultores y Bodegueros del valle del Rio Ibias
            estamos empeñados en:
          </h3>
          <hr></hr>
          <ul>
            <li>Promover el EMPLEO Y LA ACTIVIDAD VITIVINICOLA EN Ibias</li>
            <li>
              Mejorar la PRODUCCIÓN, COMERCIALIZACIÓN Y CALIDAD de nuestros
              vinos
            </li>
            <li>
              Contribuir a la PROFESIONALIZACIÓN, FORMACIÓN Y RECLIJE de los
              profesionales del sector
            </li>
            <li>
              Recuperar las VARIEDADES AUTOCTONAS Y promover NUEVAS PLANTACIONES
            </li>
            <li>
              Fomentar la INVESTIGACIÓN científico-tecnologia en el sector
            </li>
            <li>
              Preservar y difundir el conocimiento del PATRIMONIO ETNOGRÁFICO
              vitivinícolas de Ibias
            </li>
          </ul>
          <Link to="/contacto" className="socio-button">
            <button className="socio-button-inside">Hazte Socio</button>
          </Link>
        </div>
        <hr></hr>
      </div>
      <div className="about-main">
        <div className="about-cards-div">
          <a
            href="https://docs.google.com/document/d/1yXO-VB68uUi06kPQ1Atzu-VdHEBKg-id/edit?usp=sharing&ouid=111441627035588512524&rtpof=true&sd=true"
            className="about-link"
          >
            <div className="about-card estatutos">Estatutos</div>
          </a>
          <Link to="/contacto" className="about-link">
            <div className="about-card junta">Junta Directiva</div>
          </Link>
          <Links to="/#Bodegas-asociadas" className="about-link">
            <div className="about-card asociados">Asociados</div>
          </Links>
        </div>
        <div className="asociados-main" id="Bodegas-asociadas">
          <h3>DESCUBRE NUESTRAS BODEGAS ASOCIADAS</h3>
          <div className="asociados-name">
            <a href="http://www.bodegavc.es/es/inicio/">
              <img
                alt="foto"
                src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650793888/LOGO_VI%C3%91A_CUEDO_mqvxcj.jpg"
              />
            </a>
            <a href="https://siluvio.com/">
              <img
                alt="foto"
                src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650793888/SILUVIO.JPG_fqsvrw.png"
              />
            </a>
            <a href="/">
              <img
                alt="foto"
                src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650793888/SE%C3%91ORIO_DE_IBIAS_zyqa3b.jpg"
              />
            </a>
          </div>
          <img
            src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650807134/ibiasmap_fqwc7t.jpg"
            alt="mapa"
            className="mapa-ibias"
          />
        </div>
      </div>
      <Vina />
      <Feria />
      <Footer />
    </div>
  );
}
export default Main;

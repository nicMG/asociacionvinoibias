import React from "react";
import "./Feria.css";

function Feria() {
  return (
    <div>
      <h1 id="Feria">LA FERIA</h1>
      <div className="feria-main">
        <img
          src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650793888/FIESTA_DEL_VINO_wmiypi.jpg"
          alt="main"
        />
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </p>
        </div>
      </div>
      {/*
      <div className="feria-media">
        <div>
          <h3>Fotos</h3>
          <img alt="foto" />
        </div>
        <div>
          <h3>Video</h3>
          <img alt="foto" />
        </div>
      </div>
      */}
    </div>
  );
}

export default Feria;

import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <Link to="/contacto">
          <img src="https://res.cloudinary.com/dlccskpp5/image/upload/v1650802245/solidVIMO.png_dwazj7.png" />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;

import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="componente">
        <div className="perrito-titulo">
          <div className="titulito-boton">
            <h1 className="logo">hundy</h1>

            <Link to="/home">
              <button className="boton">Descarga la App</button>
            </Link>
          </div>
          <div className="perrito">
            <Player
              src="https://assets5.lottiefiles.com/packages/lf20_sYVZ3n.json"
              loop
              autoplay
              style={{ height: "500px", width: "500px" }}
            />
          </div>
        </div>

        <Player
          src="https://assets7.lottiefiles.com/packages/lf20_eY3C4Nr1cT.json"
          loop
          autoplay
          style={{ height: "100px", width: "100px" }}
        />
      </div>
    </>
  );
}

export default Landing;

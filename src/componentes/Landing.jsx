import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function Landing() {
  // useEffect(() => {
  //   const tiempo = setTimeout(() => {
  //     <Link to="home"></Link>;
  //   }, 4000);

  //   return tiempo;
  // }, []);

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
      <div className="segundo">
        <Parallax pages={4}>
          <ParallaxLayer offset={0} speed={4}>
            <div className="segundo-fondo">
              <h1>hundy</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={10}>
            <div className="pepe">
              <h1>pepe</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer></ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default Landing;

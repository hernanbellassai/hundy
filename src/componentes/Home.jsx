import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Home.css";
import verde from "../assets/verde.png";
import ciudad from "../assets/ciudad.png";
import prado from "../assets/prado.png";
function Home() {
  return (
    <div>
      <Parallax
        pages={4}
        style={{
          display: "flex",
          backgroundColor: "#87CEEB",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "100%",
            backgroundImage: `url(${ciudad})`,
            backgroundSize: "100%",
            paddingBottom: "60%", // Ajustar este valor
          }}
        >
          {/* <div className="pepe">
            <h1>pepe</h1>
          </div> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={5}
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Ajustar este valor
            width: "100vw",
            height: "150vh",
            backgroundImage: `url(${verde})`,
            backgroundSize: "100%",
            marginTop: "7%",
          }}
        >
          {/* <div className="segundo-fondo">
            <h1>hundy</h1>
          </div> */}
        </ParallaxLayer>
        {/* el offset es para indicar desde que pagina quiero que este */}

        <ParallaxLayer
          offset={0.99}
          speed={5}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#80B725",
            backgroundSize: "cover",
          }}
        />
      </Parallax>
    </div>
  );
}

export default Home;

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Home.css";
import verde from "../assets/verde.png";
import ciudad from "../assets/ciudad.png";
import prado from "../assets/prado.png";

function Home() {
  return (
    <div>
      <Parallax className="contenedor" pages={4}>
        <ParallaxLayer
          className="logo"
          offset={0}
          speed={1}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   fontSize: "80px",
          //   alignItems: "center",
          //   alignContent: "center",
          //   fontFamily: "Lilita One",

          //   color: "#FF7B00",
          //   height: "5%",
          //   marginTop: "3%",
          //   paddingBottom: "2%",
          //   // Ajustar este valor
          // }}
        >
          <h1>hundy</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
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
        ></ParallaxLayer>

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
            backgroundImage: "linear-gradient(to bottom, #78B422, #371B01)",
            backgroundSize: "cover",
            "@media (max-width: 600px)": {
              backgroundImage: "linear-gradient(to bottom, #ffff, #371B01)",
              // Otros estilos específicos para pantallas pequeñas
            },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: "90px",

              borderRadius: "30px",
              marginTop: "8%",
              marginRight: "50%",
              padding: "1%",
              paddingTop: "1%",
              fontFamily: "Bebas Neue",
            }}
          >
            Encuentra a tu amigo peludo perdido con Hundy:
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;

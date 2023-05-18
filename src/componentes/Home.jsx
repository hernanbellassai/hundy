import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Home.css";
import verde from "../assets/verde.png";
import ciudad from "../assets/ciudad.png";
import prado from "../assets/prado.png";
import NavBar from "./NavBar";
import Modal from "./Modal";
import useState from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="coner">
      <Parallax
        style={{
          display: "flex",
          backgroundColor: "#87CEEB",
          width: "100vw",
          height: " 100vh",
        }}
        pages={2}
      >
        <NavBar />
        <dir>
          <ParallaxLayer className="hundy" offset={0} speed={1}>
            <h1 className="parallax" style={{ fontSize: "9vw" }}>
              hundy
            </h1>
          </ParallaxLayer>
        </dir>
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            height: "100%",

            backgroundSize: "100%",
            paddingBottom: "60%", // Ajustar este valor
          }}
        >
          <img src={ciudad} alt="ciudad" style={{ width: "100%" }} />{" "}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={5}
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            marginTop: "3%",
          }}
        >
          <img
            src={verde}
            alt="verde"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </ParallaxLayer>

        {/* el offset es para indicar desde que pagina quiero que este */}

        <ParallaxLayer
          offset={0}
          speed={5}
          style={{
            display: "flex",
            left: 0,
            top: 0,
            justifyContent: "center",
            width: "100vw",
            height: "100vh",

            marginTop: "51%",
          }}
        >
          <div
            className="contenedor-verde"
            style={{
              display: "flex",
              width: "100vw",
              height: "100vh",
              backgroundColor: "green",
            }}
          >
            <div
              className="text-center text-white display-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "linear-gradient(to bottom, #78B422, #371B01)",
                width: "20vw",
                height: "10vh",
                padding: "1vw",
                paddingTop: "1vw",
                paddingLeft: "1vw",
                fontFamily: "Bebas Neue",
                backgroundColor: "#2c2c2c",
              }}
            >
              con Hundy
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={0}
          speed={5}
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Ajusta el valor según tus necesidades
          }}
        >
          <div
            className="barra-negra"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              height: "2vh",
              backgroundColor: "#2c2c2c",
            }}
          ></div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default Home;

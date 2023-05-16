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
    <div className="con">
      <Parallax className="contenedor" pages={2}>
        <NavBar />

        <ParallaxLayer className="hundy" offset={0} speed={1}>
          <h1 style={{ fontSize: "120px" }}>hundy</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "75%",
            height: "100%",
            backgroundImage: `url(${ciudad})`,
            backgroundSize: "100%",
            paddingBottom: "60%", // Ajustar este valor
          }}
        >
          {" "}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={5}
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Ajustar este valor
            width: "100%",
            height: "100%",
            backgroundImage: `url(${verde})`,
            backgroundSize: "100%",
            marginTop: "3%",
          }}
        >
          {/* <div className="segundo-fondo">
            <h1>hundy</h1>
          </div> */}
        </ParallaxLayer>

        {/* el offset es para indicar desde que pagina quiero que este */}

        <ParallaxLayer
          offset={0}
          speed={5}
          style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(to bottom, #78B422, #371B01)",

            marginTop: "51%",
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

        <ParallaxLayer
          offset={0}
          speed={5}
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // Ajustar este valor
            width: "100%",
            height: "3%",
            backgroundColor: "#ffff",
            backgroundSize: "100%",
            marginTop: "50%",
          }}
        >
          {/* <div className="segundo-fondo">
            <h1>hundy</h1>
          </div> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;

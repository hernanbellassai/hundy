import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from "styled-components";
import verde from "../assets/verde.png";
import ciudad from "../assets/ciudad.png";
import NavBar from "./NavBar";
import "../styles/Hoome.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 10vw;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const GreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 100%;
  height: 100%;
`;

const GreenText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #78b422, #371b01);
  width: 20vw;
  height: 10vh;
  padding: 1vw;
  font-family: "Bebas Neue";
  background-color: #2c2c2c;

  @media (max-width: 768px) {
    font-size: 3vw;
    width: 60vw;
    height: 30vh;
  }
`;

function Hoome() {
  return (
    <Container>
      <Parallax
        style={{
          display: "flex",
          backgroundColor: "#87CEEB",
          width: "100vw",
          height: "100vh",
        }}
        pages={2}
      >
        <NavBar />
        <Content>
          <ParallaxLayer className="hundy" offset={0} speed={1}>
            <Title>hundy</Title>
          </ParallaxLayer>
        </Content>
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
            paddingBottom: "60%",
          }}
        >
          <Image className="ciudad" src={ciudad} alt="ciudad" />
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
          <Image src={verde} alt="verde" className="img-fluid" />
        </ParallaxLayer>

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
          <GreenContainer className="green">
            <GreenText>con Hundy</GreenText>
          </GreenContainer>
        </ParallaxLayer>
      </Parallax>
    </Container>
  );
}

export default Hoome;

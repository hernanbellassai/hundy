import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Player } from "@lottiefiles/react-lottie-player";

function Landing() {
  
  
  useEffect(()=>{
    

  },[]);
  
  
  
  return (
    <div className="componente">
      <h1 className="logo">hundy</h1>

        
   
       
      <div>
        {" "}
        <Player
          src="https://assets5.lottiefiles.com/packages/lf20_sYVZ3n.json"
          loop
          autoplay
          style={{ height: "500px", width: "500px" }}
        />
      </div>
    </div>
  );
}

export default Landing;

import React from "react";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg " style={{ background: "#ffff" }}>
      <a
        className="navbar-brand"
        href="#"
        style={{
          fontFamily: "Lilita One",
          paddingLeft: "30px",
        }}
      >
        hundy
      </a>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {" "}
        <span className="navbar-toggler-icon"></span>
      </motion.button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <div className="buttons ">
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary"
          >
            Download App
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

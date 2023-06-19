import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const NavLocker = () => {
  return (
    <div className="position-fixed navlocker" style={{ background: "white" }}>
      <div className="navlockerPadding">
        <div className="d-flex flex-column gap-5 gap-lg-4">
          <div className="d-lg-none">
            <h1 className="space display-4" style={{ color: "#ccf381" }}>
              Fasasi Foyin
            </h1>
            <h4 style={{ color: "rgb(255, 19, 5)" }}>
              Full-Stack Web Developer
            </h4>
          </div>
          <div>
            <h3 style={{ color: "#6d528c" }} className="fw-bold space mb-3">
              SAY HELLO
            </h3>
            <a href="mailto:fasasifoyin@gmail.com">
              <p style={{ color: "#543172" }} className="footText">
                fasasifoyin@gmail.com
              </p>
            </a>
            <Link to="https://wa.link/b5zn3u" target="_blank" rel="noreferrer">
              <p className="footText" style={{ color: "#543172" }}>
                wa.link/b5zn3u
              </p>
            </Link>
          </div>
          <div>
            {" "}
            <a
              href="OLUWAFOYINKANLA FASASI.pdf"
              download="OLUWAFOYINKANLA FASASI.pdf"
            >
              <p style={{ color: "#543172" }} className="footText">
                Download My Resume
              </p>
            </a>
          </div>
          <div className="d-flex gap-3">
            <Link to="https://github.com/Fasasifoyin">
              <AiFillGithub color="#543172" size="2rem" />
            </Link>
            <Link to="https://www.linkedin.com/in/foyinfasasi/">
              <AiFillLinkedin color="#543172" size="2rem" />
            </Link>
            <Link to="https://twitter.com/FoyinJohn">
              <AiFillTwitterCircle color="#543172" size="2rem" />
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavLocker;

import React from "react";
import PageLayout from "./PageLayout";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="box pb-3" style={{ background: "#3d155f" }}>
      <PageLayout>
        <div className="mb-5 d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <h1
            className="space display-4 text-center "
            style={{ color: "#ccf381" }}
          >
            Fasasi Foyin
          </h1>
          <h4 style={{ color: "rgb(255, 19, 5)" }} className="text-center">
            Full-Stack Web Developer
          </h4>
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <h3 style={{ color: "#6d528c" }} className="fw-bold space mb-3">
            SAY HELLO
          </h3>
          <div className="d-lg-flex" style={{ gap: "150px" }}>
            <div
              style={{ color: "#ccf381" }}
              className="text-center text-lg-start"
            >
              <a href="mailto:fasasifoyin@gmail.com">
                <p style={{ color: "#ccf381" }} className="footText">
                  fasasifoyin@gmail.com
                </p>
              </a>
              <Link
                to="https://wa.link/b5zn3u"
                target="_blank"
                rel="noreferrer"
              >
                <p className="footText" style={{ color: "#ccf381" }}>
                  wa.link/b5zn3u
                </p>
              </Link>
            </div>
            <div
              style={{ color: "#ccf381" }}
              className="text-center text-lg-start"
            >
              <a
                href="OLUWAFOYINKANLA FASASI.pdf"
                download="OLUWAFOYINKANLA FASASI.pdf"
              >
                <p style={{ color: "#ccf381" }} className="footText">
                  Download My Resume
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="hr" style={{ border: "1px solid #ccf381" }} />
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <span className="text-white footText mb-3 mb-lg-0">
            INSPIRED BY{" "}
            <Link to="https://olaolu.dev/" target="_blank" rel="noreferrer">
              <strong style={{ color: "rgb(255, 19, 5)" }}>
                Olaolu Olawuyi
              </strong>
            </Link>
          </span>
          <div className="d-flex gap-3">
            <Link to="https://github.com/Fasasifoyin">
              <AiFillGithub color="#ccf381" size="2rem" />
            </Link>
            <Link to="https://www.linkedin.com/in/foyinfasasi/">
              <AiFillLinkedin color="#ccf381" size="2rem" />
            </Link>
            <Link to="https://twitter.com/FoyinJohn">
              <AiFillTwitterCircle color="#ccf381" size="2rem" />
            </Link>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Footer;

import React from "react";
import PageLayout from "./PageLayout";
import { Frontend, Backend } from "../utils.jsx/Skills";
import { Image } from "react-bootstrap";

const SecondPage = () => {
  return (
    <div className="box pb-3" style={{ background: "rgb(249, 249,249)" }}>
      <PageLayout>
        <div className="mb-4">
          <h1 style={{ color: "#4831d4" }} className="display-3 fw-bold mb-0">
            What I Can Do
          </h1>
          <h4>Service offers</h4>
          <div style={{ width: "150px" }} className="d-flex align-items-center">
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "red",
              }}
            />
            <div style={{ width: "143px", height: "3px", background: "red" }} />
          </div>
        </div>

        <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center mb-5">
          <div className="secondPage d-flex flex-wrap justify-content-center gap-4 gap-lg-5">
            {Frontend.map((each, index) => (
              <div
                className="d-flex flex-column gap-1 align-items-center"
                key={index}
              >
                <div style={{ width: "50px", height: "40px" }}>
                  <Image
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src={each.image}
                  />
                </div>
                <p className="small text-center mb-0">{each.name}</p>
              </div>
            ))}
          </div>
          <div className="secondPage">
            <h1
              className="text-center display-4 fw-bold"
              style={{ color: "#ccf381" }}
            >
              Front-end
            </h1>
            <p style={{ color: "#543172" }}>
              Build visually appealing, responsive and mobile-friendly websites
              with modern tools like CSS, Bootstrap and Tailwind. Use React and
              Javascript to create dynamic and interactive user interfaces,
              making websites more engaging and user-friendly
            </p>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="secondPage">
            <h1
              className="text-center display-4 fw-bold"
              style={{ color: "#ccf381" }}
            >
              Back-end
            </h1>
            <p style={{ color: "#543172" }}>
              Create highly scalable, robust and efficient server applications
              using powerful tools such as Express, Node.js and MongoDB
            </p>
          </div>
          <div className="secondPage d-flex justify-content-center flex-wrap gap-4 gap-lg-5">
            {Backend.map((each, index) => (
              <div
                className="d-flex flex-column gap-1 align-items-center"
                key={index}
              >
                <div style={{ width: "50px", height: "40px" }}>
                  <Image
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src={each.image}
                  />
                </div>
                <p className="small text-center mb-0">{each.name}</p>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default SecondPage;

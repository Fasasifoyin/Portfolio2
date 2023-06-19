import React from "react";
import PageLayout from "./PageLayout";
import { Row, Col } from "react-bootstrap";
import WorksLayout from "./WorksLayout";
import useWindowSize from "../Hooks/useWindowSize";

const ThirdPage = () => {
  const { width } = useWindowSize();

  return (
    <div className="box pb-3" style={{ background: "#ccf381" }}>
      <PageLayout>
        <div className="mb-4">
          <h1 style={{ color: "#4831d4" }} className="display-5 fw-bold mb-0">
            My works
          </h1>
          <h4>Some of my projects</h4>
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
        <div
          className="w-100 px-3 "
          style={{ background: "#f2f0ee", boxShadow: "-30px 30px 20px rgb(84,49,114,0.2)" }}
        >
          <Row>
            <Col xs={12} md={6}>
              <WorksLayout
                image={
                  width > 992
                    ? "https://res.cloudinary.com/dbxvk3apv/image/upload/v1686920355/Languages/Movie_Image_kubq27.png"
                    : "https://res.cloudinary.com/dbxvk3apv/image/upload/v1686923154/C012E7FE-4462-4272-A95A-09F79F20817A_z7apwu.jpg"
                }
                title={"My Play Movie"}
                tools={"HTML, CSS, BOOTSTRAP, REACT"}
                link1={"https://myplaymovie.netlify.app"}
                link2={"https://github.com/Fasasifoyin/Mymovie"}
              />
            </Col>
            <Col xs={12} md={6}>
              <WorksLayout />
            </Col>
            <Col xs={12} md={6}>
              <WorksLayout />
            </Col>
            <Col xs={12} md={6}>
              <WorksLayout />
            </Col>
          </Row>
        </div>
      </PageLayout>
    </div>
  );
};

export default ThirdPage;

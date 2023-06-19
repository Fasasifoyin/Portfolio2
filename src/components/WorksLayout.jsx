import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlinePaperClip } from "react-icons/ai";

const WorksLayout = ({ image, title, tools, link1, link2 }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="worksMargin">
      <div
        className="worksDiv position-relative"
        style={{ borderRadius: "10px" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          className="w-100 h-100"
          style={{ objectFit: "cover", borderRadius: "10px" }}
          src={image}
        />
        {hover && (
          <div
            className="d-none d-lg-block position-absolute bottom-0 px-3 py-1"
            style={{
              width: "100%",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              height: "40%",
              background: "rgb(72,49,212, 0.7)",
            }}
          >
            <div className="w-100 h-100 position-relative">
              <h4 className="text-break text-wrap" style={{ color: "#ccf381" }}>
                {title}
              </h4>
              <div className="w-75">
                <p className="small text-white text-break text-wrap">{tools}</p>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{ bottom: "10px", right: "10px" }}
            >
              <div className="d-flex gap-2">
                <Link to={link1} target="_blank" rel="noreferrer">
                  <AiOutlinePaperClip size="1.5rem" color="#ccf381" />
                </Link>
                <Link to={link2} target="_blank" rel="noreferrer">
                  <AiFillGithub size="1.5rem" color="#ccf381" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex d-lg-none justify-content-between align-items-center px-2">
        <span className="text-break text-wrap" style={{ color: "crimson" }}>
          {title}
        </span>
        <div className="d-flex gap-2">
          <Link to={link1} target="_blank" rel="noreferrer">
            <AiOutlinePaperClip size="1.2rem" color="#4831d4" />
          </Link>
          <Link to={link2} target="_blank" rel="noreferrer">
            <AiFillGithub size="1.2rem" color="4831d4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksLayout;

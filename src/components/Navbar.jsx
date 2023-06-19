import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import NavLocker from "./NavLocker";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const showNav = () => {
    window.scrollY >= 55 ? setShowLogo(true) : setShowLogo(false);
  };

  useEffect(() => {
    showNav();
    window.addEventListener("scroll", showNav);
    return () => {
      window.removeEventListener("scroll", showNav);
    };
  }, []);

  return (
    <>
      <div className="position-fixed w-100 navbar" style={{ zIndex: 10 }}>
        <div style={{ width: "95%" }} className="h-100 mx-auto">
          <div className="h-100 w-100 d-flex justify-content-end align-items-center">
            <Hamburger
              color="crimson"
              toggled={isOpen}
              toggle={setOpen}
              size={30}
            />
          </div>
        </div>
      </div>
      {isOpen && <NavLocker />}
    </>
  );
};

export default Navbar;

import React, { useRef } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Navbar from "./Navbar";
import Messageme from "./Messageme";
import Footer from "./Footer";
import { useInView } from "framer-motion";

const Layout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <>
      {!isInView && <Navbar />}
      <div className="parent">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <Messageme />
        <div ref={ref}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

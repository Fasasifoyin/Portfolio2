import React, { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const PageLayout = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div style={{ width: "75%" }} className="mx-auto layout">
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default PageLayout;

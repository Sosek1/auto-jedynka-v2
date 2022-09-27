import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DivOpacityScale = (props) => {
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={props.class}
      ref={ref}
      variants={props.variant}
      initial="hidden"
      animate={control}
    >
      {props.children}
    </motion.div>
  );
};

export default DivOpacityScale;

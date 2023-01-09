import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0.5, height: 0 },
  animate: { opacity: 1, height: "100%" },
  exit: { opacity: 0, y: 30 },
};

const AnimatedTransition = ({ children }) => (
  <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

export default AnimatedTransition;

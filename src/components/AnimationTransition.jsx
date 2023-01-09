import React from "react";
import { motion } from "framer-motion";

// const animations = {
//   initial: { opacity: 0.5, height: 0, y: -1 },
//   animate: { opacity: 1, height: "100%", y: 0 },
//   exit: { opacity: 0, y: 30 },
// };

const AnimatedTransition = ({ children }) => (
  <motion.div
    // variants={animations}
    initial={{ opacity: 0.3 }}
    animate={{ opacity: 1 }}
    exit="exit"
    transition={{ type: "spring", damping: 10 }}
    // transition={{ duration: 0.9 }}
  >
    {children}
  </motion.div>
);

export default AnimatedTransition;

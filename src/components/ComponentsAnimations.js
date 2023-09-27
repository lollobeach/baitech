import { motion } from "framer-motion";
import PropTypes from "prop-types";


const ComponentsAnimations = ({ children }) => {

  return (
    <div className="textAnimation">
      {children}
    </div>
  )
  
  // return (
  //   <motion.div>
  //     <motion.span
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 3, delay: 0.2 }}
  //     >
  //       {children}
  //     </motion.span>
  //   </motion.div>
  // );
};

ComponentsAnimations.propTypes = {
  children: PropTypes.node,
};

export default ComponentsAnimations;

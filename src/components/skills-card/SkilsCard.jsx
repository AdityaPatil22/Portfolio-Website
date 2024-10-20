import { motion } from "framer-motion";
import "./SkilsCard.css";
function SkilsCard({ skillImg , skillname}) {
  return (
    <>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
      >
        <div className="skill-container">
          <img className="skill-img" src={skillImg} />
          <p className="skill-name">{skillname}</p>
        </div>
      </motion.div>
    </>
  );
}

export default SkilsCard;

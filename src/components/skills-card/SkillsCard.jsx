import { motion } from "framer-motion";
import "./SkillsCard.css";

function SkillsCard({ skillImg, skillName }) {
  return (
    <motion.div
      className="skill-box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="skill-container">
        <img className="skill-img" src={skillImg} alt={`${skillName} icon`} />
        <p className="skill-name">{skillName}</p>
      </div>
    </motion.div>
  );
}

export default SkillsCard;

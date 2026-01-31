import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="error-code"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        
        <h2 className="error-title">Page Not Found</h2>
        
        <p className="error-description">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="error-actions">
          <Link to="/" className="error-btn primary">
            <Home size={18} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="error-btn secondary"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;

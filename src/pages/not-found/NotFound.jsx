import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <motion.article
        className="nf-document"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <header className="nf-head">
          <p className="nf-meta">Request for Comments: 404</p>
          <p className="nf-meta">Status: This document does not exist</p>
        </header>

        <h1 className="nf-title">Document Not Found</h1>

        <p className="nf-body">
          The URL you requested was never issued, or has been withdrawn
          without replacement. No successor document is specified.
        </p>

        <p className="nf-action">
          <Link to="/">Return to About</Link>
        </p>
      </motion.article>
    </div>
  );
}

export default NotFound;

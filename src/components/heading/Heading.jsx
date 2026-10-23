import "./Heading.css";

function Heading({ title }) {
  return (
    <header className="doc-section-heading">
      <h1 className="doc-section-title">{title}</h1>
    </header>
  );
}

export default Heading;

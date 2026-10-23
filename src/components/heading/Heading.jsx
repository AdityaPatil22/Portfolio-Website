import "./Heading.css";

function Heading({ number, title }) {
  return (
    <header className="doc-section-heading">
      {number ? <span className="doc-section-number">§ {number}</span> : null}
      <h1 className="doc-section-title">{title}</h1>
    </header>
  );
}

export default Heading;

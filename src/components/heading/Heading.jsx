import "./Heading.css";

function Heading({ title, titleId }) {
  return (
    <div id={titleId}>
      <h1 className="section-heading">{title}</h1>
    </div>
  );
}

export default Heading;

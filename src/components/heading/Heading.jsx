import SplitText from "../SplitText";
import "./Heading.css";

function Heading({ title, titleId }) {
  return (
    <div id={titleId}>
      <SplitText
        text={title}
        className="section-heading"
        delay={40}
        duration={0.8}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 50, rotateX: -90 }}
        to={{ opacity: 1, y: 0, rotateX: 0 }}
        threshold={0.2}
        rootMargin="-50px"
        tag="h1"
      />
    </div>
  );
}

export default Heading;

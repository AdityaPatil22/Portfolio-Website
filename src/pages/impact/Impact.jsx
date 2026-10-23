import Heading from "../../components/heading/Heading";
import { talks, contributions, articles } from "./impactData";
import "./Impact.css";

function RefEntry({ num, source, title, note, href }) {
  return (
    <li className="ref-entry">
      <p className="ref-citation">
        <span className="ref-marker">[{num}]</span>
        Patil, A.,{" "}
        <a href={href} target="_blank" rel="noopener noreferrer">
          &ldquo;{title}&rdquo;
        </a>
        , {source}.
      </p>
      <p className="ref-note">{note}</p>
    </li>
  );
}

function Impact() {
  // Reference numbering is continuous across the two reference sections,
  // as in an RFC.
  let refNum = 0;

  return (
    <article className="doc-page impact-document">
      <div id="impact">
        <Heading number="5" title="Impact" />
      </div>

      <p className="impact-intro">
        Sharing knowledge, contributing to open source, and helping build the
        developer community.
      </p>

      <section>
        <h2 className="doc-subheading">
          <span className="secnum">5.1</span>References (Normative)
        </h2>
        <ol className="ref-list">
          {talks.map((talk) => (
            <RefEntry
              key={talk.title}
              num={++refNum}
              source={talk.conference}
              title={talk.title}
              note={talk.description}
              href={talk.href}
            />
          ))}
        </ol>
      </section>

      <section>
        <h2 className="doc-subheading">
          <span className="secnum">5.2</span>References (Informative)
        </h2>
        <ol className="ref-list">
          {articles.map((article) => (
            <RefEntry
              key={article.title}
              num={++refNum}
              source={article.platform}
              title={article.title}
              note={article.description}
              href={article.href}
            />
          ))}
        </ol>
      </section>

      <section>
        <h2 className="doc-subheading">
          <span className="secnum">5.3</span>Contributors
        </h2>
        <p className="contrib-lead">
          Fixes and improvements contributed upstream.
        </p>
        <ul className="contrib-list">
          {contributions.map((c) => (
            <li className="contrib-entry" key={c.href}>
              <p className="contrib-repo">{c.repo}</p>
              <p className="contrib-title">{c.title}</p>
              <p className="contrib-desc">
                {c.description}{" "}
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.linkLabel}
                </a>
              </p>
              <p className="contrib-tags">{c.tags.join(" / ")}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Impact;

import { ArrowUpRight, BookOpen, GitPullRequest, Mic2 } from "lucide-react";
import Heading from "../../components/heading/Heading";
import { talks, contributions, articles } from "./impactData";
import "./Impact.css";

function ImpactSectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="impact-section-heading">
      <span className="impact-section-number">{number}</span>
      <div>
        <p className="impact-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="impact-section-description">{description}</p>
      </div>
    </div>
  );
}

function Impact() {
  return (
    <article className="doc-page impact-document">
      <div id="impact">
        <Heading number="5" title="Impact" />
      </div>

      <div className="impact-intro-row">
        <p className="impact-intro">
          Good engineering travels beyond the code. I share what I learn, contribute
          improvements upstream, and help other developers build with confidence.
        </p>
        <span className="impact-side-note">SHARE · CONTRIBUTE · LEARN</span>
      </div>

      <div className="impact-highlights" aria-label="Impact overview">
        <div className="impact-highlight">
          <span className="impact-highlight-value">{talks.length.toString().padStart(2, "0")}</span>
          <span className="impact-highlight-label">Talks &amp; sessions</span>
        </div>
        <div className="impact-highlight">
          <span className="impact-highlight-value">{contributions.length.toString().padStart(2, "0")}</span>
          <span className="impact-highlight-label">Open-source contributions</span>
        </div>
        <div className="impact-highlight">
          <span className="impact-highlight-value">{articles.length.toString().padStart(2, "0")}</span>
          <span className="impact-highlight-label">Articles published</span>
        </div>
      </div>

      <section className="impact-section">
        <ImpactSectionHeading
          number="01"
          eyebrow="ON THE STAGE"
          title="Talks & conferences"
          description="Lessons from production, practical AI, and the tools we use every day."
        />
        <div className="impact-talk-grid">
          {talks.map((talk) => (
            <a
              className="impact-talk-card"
              href={talk.href}
              target="_blank"
              rel="noopener noreferrer"
              key={talk.title}
            >
              <div className="impact-card-topline">
                <span className="impact-category"><Mic2 size={14} aria-hidden="true" /> {talk.conference}</span>
                <ArrowUpRight size={18} aria-hidden="true" className="impact-card-arrow" />
              </div>
              <h3>{talk.title}</h3>
              <p>{talk.description}</p>
              <span className="impact-card-link">View session details <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <ImpactSectionHeading
          number="02"
          eyebrow="GIVE BACK UPSTREAM"
          title="Open-source contributions"
          description="Small, focused fixes that make shared tools more reliable for everyone."
        />
        <div className="impact-contribution-list">
          {contributions.map((contribution) => (
            <article className="impact-contribution-card" key={contribution.href}>
              <div className="impact-contribution-icon">
                <GitPullRequest size={18} aria-hidden="true" />
              </div>
              <div className="impact-contribution-copy">
                <p className="impact-repository">{contribution.repo} <span>·</span> Open source</p>
                <h3>{contribution.title}</h3>
                <p className="impact-contribution-description">{contribution.description}</p>
                <ul className="impact-tags" aria-label="Technologies">
                  {contribution.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <a className="impact-action-link" href={contribution.href} target="_blank" rel="noopener noreferrer">
                {contribution.linkLabel} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-section impact-writing-section">
        <ImpactSectionHeading
          number="03"
          eyebrow="NOTES FROM THE JOURNEY"
          title="Writing & ideas"
          description="Technical deep dives, lessons learned, and perspectives worth sharing."
        />
        <div className="impact-article-grid">
          {articles.map((article, index) => (
            <a
              className="impact-article-card"
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              key={article.title}
            >
              <div className="impact-article-topline">
                <span className="impact-article-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="impact-category"><BookOpen size={13} aria-hidden="true" /> {article.platform}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="impact-card-link">Read article <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Impact;

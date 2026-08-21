import React from 'react';
import './style.scss';

const LINK_LABELS = {
  paper: 'Paper',
  pdf: 'PDF',
  arxiv: 'arXiv',
  code: 'Code',
  slides: 'Slides',
  video: 'Video',
};

/**
 * Author names are stored as a comma-separated string; a leading "*" marks the
 * site owner, who is rendered in bold.
 */
function Authors({ authors }) {
  return (
    <p className="authors">
      {authors.split(',').map((raw, index, all) => {
        const name = raw.trim();
        const isOwner = name.startsWith('*');
        return (
          <React.Fragment key={index}>
            {isOwner ? <strong>{name.slice(1)}</strong> : name}
            {index < all.length - 1 ? ', ' : ''}
          </React.Fragment>
        );
      })}
    </p>
  );
}

function PublicationItem({ publication, showYear }) {
  const { title, authors, venue, year, note, abstract, links = {} } = publication;
  const externalLinks = Object.keys(LINK_LABELS).filter((key) => links[key]);
  const titleUrl = links.paper || links.pdf || links.arxiv;

  return (
    <article className={`publication-item${showYear ? '' : ' no-year'}`}>
      {showYear && <div className="pub-year">{year}</div>}
      <div className="pub-body">
        <p className="pub-venue">
          <span className="venue-name">
            {venue} {year}
          </span>
          {note && <span className="venue-note">{note}</span>}
        </p>

        <h3 className="pub-title">
          {titleUrl ? (
            <a href={titleUrl} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <Authors authors={authors} />

        <div className="pub-links">
          {abstract && (
            <details className="pub-detail">
              <summary>Abstract</summary>
              <p>{abstract}</p>
            </details>
          )}
          {links.bibtex && (
            <details className="pub-detail">
              <summary>BibTeX</summary>
              <pre>{links.bibtex}</pre>
            </details>
          )}
          {externalLinks.map((key) => (
            <a key={key} className="pub-link" href={links[key]} target="_blank" rel="noreferrer">
              {LINK_LABELS[key]}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * `showYear` renders a year gutter on the left. Turn it off where the list is
 * already grouped under a year heading.
 */
function PublicationList({ publications, showYear = true }) {
  if (!publications || publications.length === 0) return null;
  return (
    <div className="publication-list">
      {publications.map((publication, index) => (
        <PublicationItem key={index} publication={publication} showYear={showYear} />
      ))}
    </div>
  );
}

export default PublicationList;

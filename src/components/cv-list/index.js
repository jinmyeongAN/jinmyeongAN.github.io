import React from 'react';
import './style.scss';

/**
 * Shared renderer for education / experience / awards / service: a period on
 * the left, a role and organization on the right.
 */
function CvList({ entries }) {
  if (!entries || entries.length === 0) return null;

  return (
    <div className="cv-list">
      {entries.map(({ period, title, organization, detail, url }, index) => (
        <div className="cv-item" key={index}>
          <div className="cv-period">{period}</div>
          <div className="cv-body">
            <p className="cv-title">{title}</p>
            {organization && (
              <p className="cv-organization">
                {url ? (
                  <a href={url} target="_blank" rel="noreferrer">
                    {organization}
                  </a>
                ) : (
                  organization
                )}
              </p>
            )}
            {detail && <p className="cv-detail">{detail}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CvList;

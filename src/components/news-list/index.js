import React, { useState } from 'react';
import './style.scss';

const COLLAPSED_COUNT = 5;

function NewsList({ news }) {
  const [expanded, setExpanded] = useState(false);
  if (!news || news.length === 0) return null;

  const visible = expanded ? news : news.slice(0, COLLAPSED_COUNT);

  return (
    <div className="news-list">
      <dl>
        {visible.map((item, index) => (
          <div className="news-item" key={index}>
            <dt>{item.date}</dt>
            <dd dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </dl>
      {news.length > COLLAPSED_COUNT && (
        <button type="button" className="text-button" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Show less' : `Show all ${news.length} updates`}
        </button>
      )}
    </div>
  );
}

export default NewsList;

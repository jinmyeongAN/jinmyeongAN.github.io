import React from 'react';
import './style.scss';

function InterestList({ interests }) {
  if (!interests || interests.length === 0) return null;

  return (
    <ul className="interest-list">
      {interests.map(({ title, description }, index) => (
        <li key={index}>
          <span className="interest-title">{title}.</span>{' '}
          <span className="interest-description">{description}</span>
        </li>
      ))}
    </ul>
  );
}

export default InterestList;

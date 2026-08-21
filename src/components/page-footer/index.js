import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <div className="page-footer">
        <span>
          © {new Date().getFullYear()} {author}
        </span>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          Source
        </a>
      </div>
    </footer>
  );
}

export default PageFooter;

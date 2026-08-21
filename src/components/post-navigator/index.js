import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostNavigator({ prevPost, nextPost }) {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="post-navigator">
      <div className="nav-slot">
        {nextPost && (
          <Link to={nextPost.slug}>
            <span className="direction">← Previous</span>
            <span className="title">{nextPost.title}</span>
          </Link>
        )}
      </div>
      <div className="nav-slot align-end">
        {prevPost && (
          <Link to={prevPost.slug}>
            <span className="direction">Next →</span>
            <span className="title">{prevPost.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default PostNavigator;

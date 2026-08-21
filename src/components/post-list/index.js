import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

function PostList({ posts, limit }) {
  if (!posts || posts.length === 0) {
    return <p className="post-list-empty">No notes published yet.</p>;
  }

  const visible = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="post-list">
      {visible.map((post) => (
        <article className="post-list-item" key={post.id}>
          <div className="post-date">{post.date}</div>
          <div className="post-body">
            <h3 className="post-title">
              <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p className="post-excerpt">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PostList;

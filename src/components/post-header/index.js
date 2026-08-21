import React from 'react';
import './style.scss';

function PostHeader({ post }) {
  return (
    <header className="post-header">
      <h1 className="title">{post.title}</h1>
      <p className="meta">{post.date}</p>
    </header>
  );
}

export default PostHeader;

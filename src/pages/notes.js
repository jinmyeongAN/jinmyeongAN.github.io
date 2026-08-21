import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Post from '../models/post';
import PostList from '../components/post-list';

function NotesPage({ data }) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node));

  return (
    <Layout>
      <Seo title="Notes" />
      <div className="page-intro">
        <h1>Notes</h1>
        <p>Occasional write-ups on papers and ideas I am working through.</p>
      </div>
      <PostList posts={posts} />
    </Layout>
  );
}

export default NotesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 220, truncate: true)
          frontmatter {
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

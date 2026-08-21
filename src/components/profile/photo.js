import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

/**
 * Renders `assets/<src>` as a square portrait. While that file is missing a
 * labelled placeholder of the same size is shown, so the layout is already
 * correct before the real photo is dropped in.
 */
function ProfilePhoto({ src, alt }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          extension: { in: ["jpg", "jpeg", "png", "webp", "svg"] }
        }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 480
                height: 480
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  `);

  const match = data.images.edges.find(({ node }) => node.relativePath === src);

  if (!match) {
    return (
      <div className="profile-photo placeholder">
        <span>
          Your photo
          <br />
          <code>assets/{src}</code>
        </span>
      </div>
    );
  }

  const { childImageSharp, publicURL, extension } = match.node;

  if (extension === 'svg' || !childImageSharp) {
    return <img className="profile-photo" src={publicURL} alt={alt} />;
  }

  return (
    <GatsbyImage className="profile-photo" image={childImageSharp.gatsbyImageData} alt={alt} />
  );
}

export default ProfilePhoto;

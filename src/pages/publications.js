import React from 'react';
import metaConfig from '../../gatsby-meta-config';
import Layout from '../layout';
import Seo from '../components/seo';
import Section from '../components/section';
import PublicationList from '../components/publication-list';

/** Groups publications by year, newest year first, preserving config order. */
function groupByYear(publications) {
  const years = [...new Set(publications.map(({ year }) => year))].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: publications.filter((publication) => publication.year === year),
  }));
}

function PublicationsPage() {
  const { publications, author } = metaConfig;
  const groups = groupByYear(publications);

  return (
    <Layout>
      <Seo title="Publications" />
      <div className="page-intro">
        <h1>Publications</h1>
        <p>
          {publications.length} peer-reviewed papers. Also on{' '}
          <a href={author.social.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          . <strong>Bold</strong> marks my name in the author list.
        </p>
      </div>

      {groups.map(({ year, items }) => (
        <Section key={year} title={year}>
          <PublicationList publications={items} showYear={false} />
        </Section>
      ))}
    </Layout>
  );
}

export default PublicationsPage;

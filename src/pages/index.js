import React from 'react';
import { Link } from 'gatsby';
import metaConfig from '../../gatsby-meta-config';
import Layout from '../layout';
import Seo from '../components/seo';
import Profile from '../components/profile';
import Section from '../components/section';
import InterestList from '../components/interest-list';
import NewsList from '../components/news-list';
import PublicationList from '../components/publication-list';
import CvList from '../components/cv-list';

function HomePage() {
  const { author, interests, news, publications, education, experience, awards, service } =
    metaConfig;
  const selected = publications.filter((publication) => publication.selected);

  return (
    <Layout>
      <Seo title="Home" />
      <Profile author={author} />

      <Section title="Research interests">
        <InterestList interests={interests} />
      </Section>

      <Section title="News">
        <NewsList news={news} />
      </Section>

      <Section
        title="Selected publications"
        action={
          <Link className="section-title-action" to="/publications/">
            All publications →
          </Link>
        }
      >
        <PublicationList publications={selected} />
      </Section>

      <Section title="Education">
        <CvList entries={education} />
      </Section>

      <Section title="Experience">
        <CvList entries={experience} />
      </Section>

      {awards.length > 0 && (
        <Section title="Awards">
          <CvList entries={awards} />
        </Section>
      )}

      {service.length > 0 && (
        <Section title="Service">
          <CvList entries={service} />
        </Section>
      )}
    </Layout>
  );
}

export default HomePage;

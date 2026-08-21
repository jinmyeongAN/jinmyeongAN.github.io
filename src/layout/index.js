import React from 'react';
import metaConfig from '../../gatsby-meta-config';
import SiteNav from '../components/site-nav';
import PageFooter from '../components/page-footer';
import './style.scss';

const Layout = ({ children }) => (
  <div className="page-wrapper">
    <SiteNav siteTitle={metaConfig.author.name} cvUrl={metaConfig.author.social.cv} />
    <main className="page-content">{children}</main>
    <PageFooter author={metaConfig.author.name} githubUrl={metaConfig.author.social.github} />
  </div>
);

export default Layout;

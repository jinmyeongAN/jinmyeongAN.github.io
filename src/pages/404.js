import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className="page-intro">
        <h1>Page not found</h1>
        <p>
          That page does not exist. <Link to="/">Return to the homepage</Link>.
        </p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

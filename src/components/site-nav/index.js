import React from 'react';
import { Link } from 'gatsby';
import ThemeSwitch from '../theme-switch';
import './style.scss';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Publications', to: '/publications/' },
  { label: 'Notes', to: '/notes/' },
];

function SiteNav({ siteTitle, cvUrl }) {
  return (
    <header className="site-nav-wrapper">
      <nav className="site-nav">
        <Link className="site-name" to="/">
          {siteTitle}
        </Link>
        <div className="nav-links">
          {LINKS.map(({ label, to }) => (
            <Link key={to} className="nav-link" activeClassName="active" to={to}>
              {label}
            </Link>
          ))}
          {cvUrl && (
            <a className="nav-link" href={cvUrl} target="_blank" rel="noreferrer">
              CV
            </a>
          )}
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}

export default SiteNav;

import React from 'react';
import ProfilePhoto from './photo';
import './style.scss';

function contactItems(social) {
  const { email, scholar, github, linkedIn, cv } = social;
  return [
    email && { label: 'Email', href: `mailto:${email}` },
    scholar && { label: 'Google Scholar', href: scholar },
    github && { label: 'GitHub', href: github },
    linkedIn && { label: 'LinkedIn', href: linkedIn },
    cv && { label: 'CV', href: cv },
  ].filter(Boolean);
}

function Profile({ author }) {
  const { name, nameLocal, position, affiliation, affiliationUrl, previously, photo, bio, social } =
    author;

  return (
    <header className="profile">
      <div className="profile-intro">
        <h1 className="name">
          {name}
          {nameLocal && <span className="name-local">{nameLocal}</span>}
        </h1>

        <p className="position">
          {position}
          {affiliation && ', '}
          {affiliation &&
            (affiliationUrl ? (
              <a href={affiliationUrl} target="_blank" rel="noreferrer">
                {affiliation}
              </a>
            ) : (
              affiliation
            ))}
        </p>

        {previously && <p className="previously">{previously}</p>}

        <ul className="contact">
          {contactItems(social).map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-photo-wrapper">
        <ProfilePhoto src={photo} alt={name} />
      </div>

      <div className="profile-bio">
        {bio.map((paragraph, index) => (
          // Bio paragraphs may contain links, so they are authored as HTML.
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </header>
  );
}

export default Profile;

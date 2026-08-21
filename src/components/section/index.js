import React from 'react';

/**
 * A titled page section. `action` renders a small link on the right of the rule
 * (e.g. "All publications →").
 */
function Section({ title, action, children }) {
  return (
    <section className="section">
      <div className="section-title">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export default Section;

import React, { useCallback, useEffect, useState } from 'react';
import { applyTheme, getInitialTheme } from '../../utils/theme';
import './style.scss';

function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  // The real theme is set on <html> before hydration; sync React state to it.
  useEffect(() => setTheme(getInitialTheme()), []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      className="theme-switch"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="1.8" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22.2" />
            <line x1="1.8" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22.2" y2="12" />
            <line x1="4.8" y1="4.8" x2="6.4" y2="6.4" />
            <line x1="17.6" y1="17.6" x2="19.2" y2="19.2" />
            <line x1="4.8" y1="19.2" x2="6.4" y2="17.6" />
            <line x1="17.6" y1="6.4" x2="19.2" y2="4.8" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}

export default ThemeSwitch;

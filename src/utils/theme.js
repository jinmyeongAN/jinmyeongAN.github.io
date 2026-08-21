const STORAGE_KEY = 'theme';

export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export function applyTheme(theme) {
  if (typeof window === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {
    // Storage can be unavailable (private mode); the theme still applies for this page.
  }
  window.dispatchEvent(new Event('themechange'));
}

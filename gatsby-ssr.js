const React = require('react');

const applyThemeScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

exports.onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  setPreBodyComponents([
    React.createElement('script', {
      key: 'apply-theme',
      dangerouslySetInnerHTML: { __html: applyThemeScript },
    }),
  ]);
};

import React, { createRef, useEffect, useRef } from 'react';
import { getInitialTheme } from '../../utils/theme';

const url = 'https://utteranc.es';
const branch = 'master';

const getUtterancesTheme = () =>
  getInitialTheme() === 'dark' ? 'photon-dark' : 'github-light';

const onThemeChange = () => {
  const utterances = document.querySelector('iframe.utterances-frame')?.contentWindow;
  utterances?.postMessage({ type: 'set-theme', theme: getUtterancesTheme() }, url);
};

function Utterances({ repo, path }) {
  const rootElm = createRef();
  const isUtterancesLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: `${url}/client.js`,
      repo,
      branch,
      theme: getUtterancesTheme(),
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path]);

  useEffect(() => {
    window.addEventListener('themechange', onThemeChange);
    return () => window.removeEventListener('themechange', onThemeChange);
  }, []);

  return <div className="utterances" ref={rootElm} />;
}

export default Utterances;

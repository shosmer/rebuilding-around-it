import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import './theme/ledger.css';
import './styles/charts.css';
import {Theme} from '@astryxdesign/core';
import {ledgerTheme} from './theme/ledger.js';
import {App} from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={ledgerTheme}>
      <App />
    </Theme>
  </StrictMode>,
);

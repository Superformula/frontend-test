import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById('root'));

import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// react-snap pre-renders HTML into the root element at build time.
// If the root already has children (i.e. pre-rendered HTML exists),
// use hydrateRoot so React attaches to the existing markup instead of
// replacing it — this is what makes prerendering work for SEO.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}


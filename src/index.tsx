import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import themes from 'devextreme/ui/themes';

themes.initialized(() => {
  const container = document.getElementById('app');
  if (container) {
    const root = createRoot(container); // Create React root
    root.render(<App />); // Render the app
  } else {
    console.error('Failed to find the root element');
  }
});

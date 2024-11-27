import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import "./index.css"
// Ensure that 'app' element exists in your HTML
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

// Rendering the app
root.render(<App />);

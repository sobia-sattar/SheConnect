import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import './styles.css'; // Custom styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Basic styles for the app
import App from './App'; // Main application component
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker registration

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registering the service worker to enable offline capabilities and caching
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

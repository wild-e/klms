import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import * as ReactDOMClient from 'react-dom/client';
import App from './pages/App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

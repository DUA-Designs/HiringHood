import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Forecast/forecast.css';
import './components/Historical/past.css';
import './components/Future/future.css';
import './components/Marine/marine.css';
import './components/Astronomy/astro.css';
import './components/Timezone/timezone.css';
import './components/Sports/sports.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 

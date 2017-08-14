import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import App from './App.js';

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('container'));
}

renderApp();
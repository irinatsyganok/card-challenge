import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/App.js';

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('container'));
}

renderApp();
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/App.js';
import CardContainer from './cardchallenge-container/src/components/CardContainer';

const renderApp = () => {
    ReactDOM.render(<CardContainer />, document.getElementById('container'));
}

renderApp();
require('./main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import alt from './libs/alt';
import persist from './libs/persist';
import storage from './libs/storage';

persist(alt, storage, 'app');

ReactDOM.render(<App />, document.getElementById('app'));
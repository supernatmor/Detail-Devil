import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<Main />, document.getElementById('root'));//
    registerServiceWorker();
}




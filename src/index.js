import React from 'react';
import ReactDOM from 'react-dom';
import *  as serviceWorker from './serviceWorker.js';
import Main from './Main'
import './index.scss'


ReactDOM.render(<Main />, document.getElementById('root'));


serviceWorker.unregister();
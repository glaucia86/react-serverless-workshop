/**
 * What is happening here?
 * 
 * Nothing surprising yet :)
 * 
 */
/** TODO
 * 
 * 1. Import 8Base client and Apollo provider
 * 2. Create a database connection using 8Base client
 * 3. Wrap the entire tree with Apollo provide and pass it the client props
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

// TODO -- 1

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO -- 2


// TODO -- 3
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

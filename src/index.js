import React from 'react';
import ReactDOM from 'react-dom';


import { registerServiceWorker } from './utils';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers"
import {promise} from "redux-promise"
// one way
//import { AppComponent} from './components';
//const {App} = AppComponent

// or another component import
import {App} from "./components/app"

// import middleware here
const middleware = {
    promise
}



const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();

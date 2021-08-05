import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux';
import allReducers from "./store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(allReducers, composeWithDevTools(
    applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


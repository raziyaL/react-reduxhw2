import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducers/reducer"
import {Provider} from 'react-redux'
import {thunk} from 'redux-thunk';

const storeApp = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeApp}>
        <App />
    </Provider>

);


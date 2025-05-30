import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';

ReactDOM.render(
    <React.StrictMode>
        <DataLayer initialState = {initialState} reducer = {reducer}>
            <App />
        </DataLayer>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

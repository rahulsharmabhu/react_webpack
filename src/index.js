require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

console.log('this is app data',myApp);

const appElement = document.getElementById('app');

ReactDOM.render(<App shop={myApp.shop} hmac={myApp.hmac}  />, appElement);
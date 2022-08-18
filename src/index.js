require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';
import preshophmac from 'preshophmacdata';

console.log('this is on the index page',preshophmac);

const appElement = document.getElementById('app');

ReactDOM.render(<App/>, appElement);
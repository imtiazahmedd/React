import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './sidebar.component';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Navbar />,
  document.getElementById('myroot')
);

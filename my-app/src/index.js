import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import mydata from './mydiv';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <mydata />,
  document.getElementById('mydiv')
);

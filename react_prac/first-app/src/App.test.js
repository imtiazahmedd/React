import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import navbar from './sidebar.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<navbar />, div);
});
*/
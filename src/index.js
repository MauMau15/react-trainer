import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let formatName = name => {
  return name.toUpperCase();
} 
const name = 'Mauricio Renero';
const element = <div className="waves-effect waves-light btn">Hello {formatName(name)}</div>
ReactDOM.render(
  element,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator';




var Header= ({title}) => {
  return(
    <header>
    <h1>{title}</h1>
    </header>
  );
};

var App = () =>{
  return(
    <div>
    <Header title=" MARTGAGE CALCULATOR"/>
    <Calculator/>
    </div>
  );
} 

ReactDOM.render(<App/>,


  document.getElementById('root'));
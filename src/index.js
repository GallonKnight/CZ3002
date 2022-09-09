import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBar from './HomeBar.js';
import NavBar from './NavBar.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='MainContainer'>
    <HomeBar />
    <NavBar />
    <p>
    WELCOME TO GO WHERE GAI GAI WHERE YOU CAN SEARCH THE BEST PLACES TO GO IN SINGAPORE :D
    </p>
    
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

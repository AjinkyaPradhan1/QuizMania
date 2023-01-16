import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import App from './App';
import Share from "./Share";
import Contact from "./Contact";
import Cartoons from "./Cartoons";
import Sports from "./Sports";
import Atlas from "./Atlas";
import Movies from "./Movies";
import Person from "./Person";
import Animals from "./Animals";
import Food from "./Food";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/share" element={ <Share /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/cartoons" element={ <Cartoons /> } />
        <Route path="/atlas" element={ <Atlas /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/person" element={ <Person /> } />
        <Route path="/animals" element={ <Animals /> } />
        <Route path="/food" element={ <Food /> } />
        <Route path="/sports" element={ <Sports /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

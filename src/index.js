import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <ApplicationViews />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



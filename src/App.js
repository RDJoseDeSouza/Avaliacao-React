
import './App.css';
import React from 'react';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/macro/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (<>
    <Header/>
    <Router>
        <Routes/>
     </Router>
     </>
  );
}

export default App;

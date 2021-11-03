
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/macro/header/Header';
import Footer from './components/macro/footer/Footer';



function App() {
  return (<>
    <section>
     
      <Router>
        <Header/>
        <Routes/>
     </Router>
     <Footer/>
     </section>
     
    </>
  );
}

export default App;

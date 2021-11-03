
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/templates/header/Header';
import Footer from './components/templates/footer/Footer';



function App() {


      
  
  return (<>
    <main class="sidebar-menu-collapsed">
     
      <Router>
        <Header/>
        <Routes/>
     </Router>
     <Footer/>
     </main>
     
    </>
  );
}

export default App;

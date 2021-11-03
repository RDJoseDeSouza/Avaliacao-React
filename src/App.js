
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState } from 'react';
import { Routes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'


import Header from './components/templates/header/Header';
import Footer from './components/templates/footer/Footer';
import SideMenu from './components/templates/side-bar/Side';




function App() {

  const [sideBar, setSideBar] = useState("sidebar-menu-collapsed")
   function toggleMenu(){
    

    if(sideBar == ("sidebar-menu-collapsed")) {
        setSideBar("noscroll")
    } else {
        setSideBar("sidebar-menu-collapsed")
    };
  }
  
  return (<>
    <main className={sideBar}>
     
      <Router>
        <SideMenu function={toggleMenu}/>
        <Header/>
        <Routes/>
     </Router>
     <Footer/>
     </main>
     
    </>
  );
}

export default App;

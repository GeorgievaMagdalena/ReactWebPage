import React from 'react'
import './App.css';
import Home from './Components/HomePage/Home.js';
import Gallery from './Components/Gallery/Gallery.js';
import Contact from './Components/ContactForm/Contact.js';
import Impressions from './Components/Impressions/Impressions.js';
import Blog from './Components/Blog/Blog.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand" href="#" style={{marginLeft: "0.5%"}}>Personal webpage</h3>
            <div>
              <ul className="navbar-nav">
                <Link to='home' className="nav-item nav-link"><li style={{fontSize: "18px"}}>Home</li></Link>
                <Link to='gallery' className="nav-item nav-link"><li style={{fontSize: "18px"}}>Gallery</li></Link>
                <Link to='blog' className="nav-item nav-link"><li style={{fontSize: "18px"}}>Blog</li></Link>
                <Link to='impressions' className="nav-item nav-link"><li style={{fontSize: "18px"}}>Impressions</li></Link>
                <Link to='contact' className="nav-item nav-link"><li style={{fontSize: "18px"}}>Contact</li></Link>
              </ul>
            </div>
          </nav>
    <div>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='impressions' element={<Impressions/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default Navbar
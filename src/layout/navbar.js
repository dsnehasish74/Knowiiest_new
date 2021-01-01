import React from 'react';
import '../css/nav.css'
import {Link} from 'react-router-dom';
import logo from '../images/WhatsApp Image 2020-07-20 at 00.14.14.jpeg'
import Pagenav from '../pages/pagenav.js'
import TopNav from '../pages/topnav.js'
function Navigation(props){
  return (
    <div>
    <nav className="main_nav"> 
      <div className="container">
        <div className="logo"><Link to="/"><img src={logo} alt="Know IIESTS Logo" className="brandlogo"></img></Link></div>
        <div className="mid"></div>
        <Link className="about_link" to="/about">About us</Link>
        <a className="about_link" href="https://knowmyblog.herokuapp.com/">Review</a>
      </div>
    </nav>
    <Pagenav/>
    <TopNav/>
    </div>
  );
}

export default Navigation;

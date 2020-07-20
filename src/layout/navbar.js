import React from 'react';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';
import logo from '../images/WhatsApp Image 2020-07-20 at 00.14.14.jpeg'
function Navigation(props){
  return (
    <nav>
      <div className="div-header">
        <div className="logo"><Link to="/"><img src={logo} alt="Know IIESTS Logo" className="brandlogo"></img></Link></div>
        <div className="navLink">
        <NavLink className="link" to="/about">Aboutus</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

import React from 'react';
import {Link} from 'react-router-dom';
function Pagenav(props){
  return (
    <nav className="container homenav">
      <ul className="div-header ullink">
        <li><Link to="/buildings">Buildings</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/canteen">Canteens</Link></li>
        <li><Link to="/busroutes">BusRoutes</Link></li>
        <li><Link to="/fest">Fests</Link></li>
        <li><a href="https://www.google.com/maps/place/Indian+Institute+of+Engineering+Science+And+Technology,+Shibpur/@22.5560759,88.3046153,17.42z/data=!4m5!3m4!1s0x3a0279c91a8d2d49:0xc6ee508c74cf031d!8m2!3d22.5551808!4d88.3071379" target="blank">Map</a></li>
        <li><Link to="/tourist">Tourist_Attraction_near_IIEST</Link></li>
        <li><Link to="/books">BOOKS</Link></li>
        <li><Link to="/grade">Grading_System</Link></li>
      </ul>
    </nav>
  );
}

export default Pagenav;

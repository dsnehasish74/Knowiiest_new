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
        <li><a href="https://www.google.com/search?rlz=1C1CHBD_enIN869IN869&biw=1536&bih=674&sxsrf=ALeKk00ScKwOnCunvUQQNMylZlu16OjVsg:1595420083721&q=iiest&npsic=0&rflfq=1&rlha=0&rllag=22555800,88304530,287&tbm=lcl&ved=2ahUKEwig7-366uDqAhUD7XMBHUD0CG8QjGp6BAgJEEc&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:;mv:[[22.5579912,88.3098883],[22.5536176,88.30007529999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2" target="blank">Map</a></li>
        <li><Link to="/tourist">Tourist Attractions near IIEST</Link></li>
        <li><Link to="/books">BOOKS</Link></li>
        <li><Link to="/grade">Grading_System</Link></li>
      </ul>
    </nav>
  );
}

export default Pagenav;

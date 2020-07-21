import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import {busroutes} from '../shared/busroutes.js'

function BusRoutes(){
  return(
    <div>  <TouristIntro intro="Details of BusRoutes to IIESTS"/>
    <nav aria-label="breadcrumb">
<ol className="breadcrumb container">
  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
  <li className="breadcrumb-item active" aria-current="page">BusRoutes</li>
</ol>
</nav>
  	<div className="container fade">
    <h3 className="heading-text2">Bus routes to important places</h3>
    <hr/>
    <div>
        <p>It is quite difficult to travel in a new city. Not all are 100% aquinted with their home city either. So, find below the easiest
        and cheapest travel routes to popular places and transit hubs in the city. You can always take a cab or other alternatives,
        but from our experience, these, listed below, are the most efficient ones.</p>
        <ul className="ullink">
          <li>Nearest airport : Netaji Subhas Chandra Bose terminus, Dum Dum (28 km)</li>
          <li>Nearest metro station : Rabindra Sadan (active) (9km) and Howrah (proposed)</li>
          <li>Nearest railway station : Howrah (7 km)</li>
    	</ul>
    </div>

    <hr/>
        {
          busroutes.map(route=>{
            if(route.id%2!==0)
            return(
              <Link  to={`/busroutes/${route.id}`} key={route.id}>
              <MediaPresent
              id={route.id}
               src={route.src}
               heading={route.heading} body={route.body}
               alt={route.alt}
               />
               <hr/>
               </Link>
            );
            else
            return(
              <Link  to={"/busroutes/"+route.id} key={route.id}>
              <ReverseMedia
              id={route.id}
              src={route.src}
              heading={route.heading}
              body={route.body}
              alt={route.alt}
              />
              <hr/>
              </Link>
            );
          })
        }
    </div>
    </div>
  );
}

export default BusRoutes;

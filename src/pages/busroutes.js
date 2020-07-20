import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import logo1 from "../images/Howrah.jpg"
import logo2 from "../images/metro.jpg"
import logo3 from "../images/sealdah.jpg"
import logo4 from "../images/airport.jpg"

function BusRoutes(){
  return(
    <div>  <TouristIntro intro="Details of BusRoutes to IIESTS"/>
    <nav aria-label="breadcrumb">
<ol class="breadcrumb container">
  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
  <li class="breadcrumb-item active" aria-current="page">BusRoutes</li>
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
    <MediaPresent src={logo1}
    heading="Howrah Railway Station" body="The Howrah Railway Station 7km from IIEST campus.It is one of the four major railway stations in and
    around Kolkata. To reach there take any of the buses - Howrah-esplanade mini, bus-55, etc. It will take about 20 minutes."
    alt="Howrah station"
    />
    <hr/>
    <ReverseMedia src={logo2}
    heading="Rabindra Sadan Metro (Exide more)" body="Most popularly known as exide more, this place is the major point to go to several locations like Nandan,
    Indian Museum, etc. This is the nearest (as of 2020) metro station from IIEST at a distance of 8 km. Take any of the buses - Barasat-B.Garden,
    Sealdah-B.Garden, 213/1 or Dhamakhali-B.Garden. It takes about 25 minutesat low traffic but during peak hours, it may extend upto an hour."
    alt="Rabindra sadan metro metro"
    />
    <hr/>
    <MediaPresent src={logo3}
    heading="Sealdah Railway Station" body="Sealdah station is the main station for local trains and also serves express trains. At a distance of about 11kms
     from IIEST, the best transport is the B.Garden - Sealdah bus. It take around 40 minutes to reach the destination."
    alt="Sealdah station"
    />
    <hr/>
    <ReverseMedia src={logo4}
    heading="Netaji Subhas Chanda Bose Terminus, Dum Dum" body="NSCB is the only airport in Kolkata at a distance of 28km from IIEST. There are many ways
     to reach the airport. First, take any bus to Rabindra Sadan metro, take a metro to Dum Dum metro station and the any airport bound bus (like
     	30D, Rajchandrapur - Korunamoyee). Secondly, take any bus to Sealdah. Take any main-line train (Krishnanagar local, Naihati Local,
     	Barrackpore local, etc) to Dum Dum Junction and then any airport bound bus to Airport gate - 1."
    alt="Dum Dum Airport"
    />
    <hr/>
    </div>
    </div>
  );
}

export default BusRoutes;

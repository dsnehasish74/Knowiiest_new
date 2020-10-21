import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import {buildings} from '../shared/buildings.js'
import Hostelsvg from '../svg/hostel.svg';
import Fade from 'react-reveal/Fade';


function Buildings(){
  return(
    <div>  <TouristIntro intro="Buildings of IIESTS..." svg={Hostelsvg}/>
    <div className="container">
    <div className="alert alert-primary d-block d-sm-none" role="alert">
  click on the pictures to see details
</div>
     <hr/>
     <Fade bottom>
     {
       buildings.map(route=>{
         if(route.id%2===0)
         return(
           <Link  to={"/buildings/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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
           <Link  to={"/buildings/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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
</Fade>
    </div>


    </div>
  );
}

export default Buildings;

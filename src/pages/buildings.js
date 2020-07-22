import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import {Link} from 'react-router-dom'
import {buildings} from '../shared/buildings.js'


function Buildings(){
  return(
    <div>  <TouristIntro intro="Buildings of IIESTS..."/>
  <Pagenav/>
    <div className="container fade">
    <div className="alert alert-primary d-block d-sm-none" role="alert">
  click on the pictures to see details
</div>
     <hr/>

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

    </div>


    </div>
  );
}

export default Buildings;

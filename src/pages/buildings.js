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
     <hr/>

     {
       buildings.map(route=>{
         if(route.id%2!==0)
         return(
           <Link  to={"/buildings/"+route.id} key={route.id}>
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
           <Link  to={"/buildings/"+route.id} key={route.id}>
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

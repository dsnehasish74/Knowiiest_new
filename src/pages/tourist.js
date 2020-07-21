import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import {Link} from 'react-router-dom'
import {touristsdetails} from '../shared/tourists.js'
function Tourist(){
  return(
    <div>
    <TouristIntro intro="Tourist spots near IIEST"/>
  <Pagenav/>
    <div className="container fade">
    <br/>
    {
      touristsdetails.map(route=>{
        if(route.id%2!==0)
        return(
          <Link  to={"/tourist/"+route.id} key={route.id}>
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
          <Link  to={"/tourist/"+route.id} key={route.id}>
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

export default Tourist;

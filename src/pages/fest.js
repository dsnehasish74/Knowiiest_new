import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import {Link} from 'react-router-dom'
import {fests} from '../shared/fests.js'


function Fest(){
  return(
    <div>
      <TouristIntro intro="Details of Fests..."/>
      <Pagenav/>
    <div className="container fade">
    <div className="alert alert-primary d-block d-sm-none" role="alert">
  click on the pictures to see details
</div>
    <br/>
    {
      fests.map(route=>{
        if(route.id%2===0)
        return(
          <Link  to={"/fest/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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
          <Link  to={"/fest/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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

export default Fest;

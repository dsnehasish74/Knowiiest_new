import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import {Leisure} from '../shared/leisure.js'
import Leisuresvg from '../svg/leisures.svg';
import Fade from 'react-fade-in';
function leisure(){
  return(
    <div>
    <TouristIntro intro="Leisure and Sports Activities" svg={Leisuresvg}/>
    <div className="container fade">
    <div className="alert alert-primary d-block d-sm-none" role="alert">
  click on the pictures to see details
</div>
     <br/>
     <Fade bottom>
     {
       Leisure.map(route=>{
         if(route.id%2===0)
         return(
           <Link  to={"/leisure/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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
           <Link  to={"/leisure/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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

export default leisure;
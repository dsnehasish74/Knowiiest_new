import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import Pagenav from './pagenav.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import {canteen} from '../shared/canteen.js'
function Canteen(){
  return(
    <div>
    <TouristIntro intro="Details of Canteen..."/>
  <Pagenav/>
    <div className="container fade">
     <br/>
     {
       canteen.map(route=>{
         if(route.id%2===0)
         return(
           <Link  to={"/canteen/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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
           <Link  to={"/canteen/"+route.id} key={route.id} style={{ textDecoration: 'none' }}>
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

export default Canteen;

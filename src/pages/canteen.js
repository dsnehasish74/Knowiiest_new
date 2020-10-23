import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import {Link} from 'react-router-dom'
import {canteen} from '../shared/canteen.js'
import Canteensvg from '../svg/canteen.svg';
import Fade from 'react-reveal/Fade';
function Canteen(){
  return(
    <div>
    <TouristIntro intro="Details of Canteen" svg={Canteensvg}/>
    <div className="container fade">
    <div className="alert alert-primary d-block d-sm-none" role="alert">
  click on the pictures to see details
</div>
     <br/>
     <Fade bottom>
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
      </Fade>
    </div>
    </div>

  );
}

export default Canteen;

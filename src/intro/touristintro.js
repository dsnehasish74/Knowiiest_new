import React from 'react';
import '../css/home.css'
function TouristIntro(props){
  return(
    <div className="hero secondhero">
        <div className="hero_text container">
          <h1>{props.intro}</h1>
        </div>
        <div className="hero_img">
          <img src={props.svg} alt="iiest"></img>
        </div>
     </div>
  );
}
export default TouristIntro;

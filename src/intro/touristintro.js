import React from 'react';
function TouristIntro(props){
  return(
    <div className="touristintro">
      <h1 className="intro-text">{props.intro}</h1>
    </div>
  );
}
export default TouristIntro;

import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import logo1 from "../images/cafe_inn.png"
import logo2 from "../images/Institute_canteen.png"
import logo3 from "../images/ladies_canteen.png"
import logo4 from "../images/student_canteen.png"
import TouristIntro from '../intro/touristintro.js'
function Canteen(){
  return(
    <div>
    <TouristIntro intro="Details of Canteen..."/>
    <nav aria-label="breadcrumb">
<ol class="breadcrumb container">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item active" aria-current="page">Canteen</li>
</ol>
</nav>
    <div className="container fade">
     <br/>
    <MediaPresent src={logo1}
    heading="Cafe In" body="This canteen is situated beside the eight-storeyed Science and and technology building.
     Mostly all kinds of foods are available here."
    alt="Cafein picture"
    />
    <hr/>
    <ReverseMedia src={logo2}
    heading="Institute Canteen" body="This canteen is at the heart of the IIEST campus between Science and Technology building and Main building.
    Foods and bevarages are available here."
    alt="I-canteen picture"
    />
    <hr/>
    <MediaPresent src={logo3}
    heading="Ladies Canteen" body="This canteen is situated beside the Netaji Bhaban and Lords playground.
    This canteen is run by the ladies but not only for the ladies, Any student, faculty or staff can use this canteen."
    alt="Ladies_canteen picture"
    />
    <hr/>
    <ReverseMedia src={logo4}
    heading="Student Canteen" body="This canteen is adjacent to the Institute Hall. It is mainly for students of this Institution."
    alt="Studen_canteen picture"
    />
    </div>
    </div>

  );
}

export default Canteen;

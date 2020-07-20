import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Initium from "../images/WhatsApp Image 2020-07-19 at 22.33.41 (1).jpeg"
import instro from "../images/WhatsApp Image 2020-07-19 at 22.33.41.jpeg"
import  metallum from "../images/WhatsApp Image 2020-07-19 at 22.33.42.jpeg"
import aikatan from "../images/WhatsApp Image 2020-07-19 at 22.33.43 (1).jpeg"
import rebeka from "../images/WhatsApp Image 2020-07-19 at 22.33.43.jpeg"
import tedx from "../images/WhatsApp Image 2020-07-19 at 22.33.44.jpeg"
import udbhaban from "../images/WhatsApp Image 2020-07-19 at 22.33.45 (1).jpeg"
import aidutak from "../images/WhatsApp Image 2020-07-19 at 22.33.45.jpeg"
import gyandhara from '../images/WhatsApp Image 2020-07-19 at 23.06.48.jpeg'
import impetus from '../images/WhatsApp Image 2020-07-19 at 23.06.49.jpeg'
import avi from '../images/WhatsApp Image 2020-07-19 at 23.21.19.jpeg'
import logo from '../images/WhatsApp Image 2020-07-20 at 00.14.14.jpeg'

function Fest(){
  return(
    <div>
      <TouristIntro intro="Details of Fests..."/>
      <nav aria-label="breadcrumb">
   <ol className="breadcrumb container">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Fest</li>
   </ol>
   </nav>
    <div className="container fade">
    <br/>
    <MediaPresent src={rebeka}
    heading="REBECA" body="REBECA, short for REunion and Bengal Engineering College Annuals, is the cultural fest of IIEST,
     Shibpur. Bengal Engineering College is the old avatar of IIEST, Shibpur. Rebeca is the oldest Cultural Fest in the whole of India.
      For an entire year, the students look forward to these 4 days of absolute ecstasy. Drawing artists and performers from the city,
       the state and the nation, REBECA isn't just another college fest.
     It's a culmination of the emotions and nostalgia of the most profound Alumni Base in the country. "
     alt="REBECA"
    />
    <hr/>
    <ReverseMedia src={instro}
    heading="INSTRUO" body="Instruo is the annual techno-management festival at Indian Institute of Engineering Science and Technology,
     Shibpur, West Bengal. It is generally held in the month of February or March each year.
     Instruo is the largest such event in and around the city of Kolkata as well as the second largest in all of West Bengal."
     alt="INSTRUO"
    />
    <hr/>
    <MediaPresent src={gyandhara}
    heading="GYANDHARA" body="This institute has been the guiding light of technical education in this country for the last 150 years.
     In an attempt to reinvigorate the prestigious quizzing fraternity this college has had, the Quizmaniac BEings (the Quiz Club)) of
     IIEST Shibpur started off with an unique idea in 2014 of pitching open quizzers one against another in a college."
    alt="GYANDHARA"
    />
    <hr/>
    <ReverseMedia src={aikatan}
    heading="OIKOTAN" body="Another unique annual fest to be hosted by the institute. Oikotaan celebrates music and creativity in a way
     that has not been explored in college campuses pretty often. No doubt it has become an annual celebration of young talents from across
      the nation striving to let their music be heard, and Oikotaan gives them just the right platform to do so. With an eminent panel of noted
       musicians, a budding talent has got all the advise in the world to go forward with. This is organised by Euphony, the Music Society of IIEST Shibpur."
    alt="OIKOTAN"
    />
    <hr/>
    <MediaPresent src={logo}
    heading="ANURANON" body="Badal Sircar's legend still lives on in the college in the form of an active Dramatics
     society - the Les Thespians who organise Anuranon every year, which is usually
     a colorful culmination of myriad emotions, expressions and captures the rich heritage of this institute. "
    alt="ANURANON"
    />
    <hr/>
    <ReverseMedia src={tedx}
    heading="TEDX-IIESTSHIBPUR" body="The event will be a perfect blend of ideas and intellectualism.
     Speakers from various fields of life are invited to share their incentives on various instances and situations
      and give us ideas to walk upon.
     A hall full of attendees learn lessons worth a lifetime as they leave."
    alt="TEDX-IIESTSHIBPUR"
    />
    <hr/>
    <MediaPresent src={udbhaban}
    heading="UDBHAVANI" body="UDBHABANI, the annual technical fest of Department of Civil Engineering.
     UDBHABANI is the largest civil engineering tech fest of Kolkata. It includes all sorts of events categorized as Technical,
      Non – Technical and Generic Events. Technical workshops
     and guest lectures from eminent personalities are some of the major attractions of UDBHABANI. "
    alt="UDBHAVANI"
    />
    <hr/>
    <ReverseMedia src={Initium}
    heading="INITIUM" body="It is the National Mining Technological Festival of the Department of Mining Engineering, IIEST, Shibpur. Started back in 2012,
    We expect wide scale participation from the industry and academia. There are events like Industrial Problem Solving (IPS) and Paper Presentation by students.
    Seminar speakers will be from eminent industries."
    alt="INITIUM"
    />
    <hr/>
    <MediaPresent src={metallum}
    heading="METALLUM" body="Metallum is the annual symposium cum tech fest presented by Society of Student Metallurgists at IIEST,
     Shibpur. Amidst the girth of knowledge, the Society of Students Metallurgists (SSM) on behalf of Department of Metallurgy
      and Materials Engineering at Indian Institute of Engineering Science and Technology, Shibpur formed under the guidance
     of acclaimed faculty members intends to promote the enthusiasts to work in the field of research and at industries."
    alt="METALLUM"
    />
    <hr/>
    <ReverseMedia src={logo}
    heading="ELECTROQUIP" body="Electroquip is the first competitive event of EES calendar. This is a great event oganized
     by the Electrical Engineering Society, it comprises of 2 rounds. A team of maximum 3 members is required to participate in this event.
      The first round is a MCQ based examination to test the overall understanding of the subject. Top 10 teams are selected for the final round
    which consists of a circuit making test. Top 3 teams are awarded with cash prizes and gifts at the end of the event. "
    alt="ELECTROQUIP"
    />
    <hr/>
    <MediaPresent src={impetus}
    heading="IMPETUS" body="The Society of Mechanical Engineering, IIEST Shibpur brings to you a platform to showcase your talent,
     a podium to display your skills and earn your reward. Presenting the second edition of IMPETUS, an all-round competition that
      will test your academics and practical skills,
     as well as your aptitude. So, what are you waiting for? Get yourself registered in this quest for excellence. "
    alt="IMPETUS"
    />
    <hr/>
    <ReverseMedia src={aidutak}
    heading="VAIDYUTAK" body="Vaidyutak 2019 is the very #first Annual Technical Fest of the Department of Electronics & Telecommunication
    Engineering of IIEST Shibpur. With a plethora of events ranging from Circuit Designing, Technical Paper presentation to Quiz, Industrial
     Meet, Alumni Meet and so on, it promises to act as the platform for all the Novus Tech
     enthusiasts of the country to showcase their technical abilities, inquisitiveness and their search for supremacy in this field."
    alt="VAIDYUTAK"
    />
    <hr/>
    <MediaPresent src={avi}
    heading="AIR-O-TRIVIA" body="Aeromodelling Club, IIEST Shibpur : The budding group of Aerospace Engineers from one of the
     oldest and finest institutes in our country organizes the Air-O-Trivia.
    Their vision is to foster enthusiasm and encourage people associated and interested, in the field of aeromodelling."
    alt="AIR-O-TRIVIA"
    />
    <hr/>
    </div>
    </div>
  );
}

export default Fest;

import React from 'react'
import MediaPresent1 from '../component/mediapresent1.js'
import ReverseMedia1 from '../component/reversemedia1.js'
import TouristIntro from '../intro/touristintro.js'
import logo2 from "../images/IMG_20200303_163715.jpg"
import logo4 from "../images/lesthes.jpg"
import logo3 from "../images/cathersis.jpeg"
import logo5 from "../images/euphony.jpg"
import logo6 from "../images/qmb.jpg"
import logo7 from "../images/codeiiest.png"
import logo8 from "../images/litsoc.jpg"
import logo9 from "../images/scage.jpg"
import logo10 from "../images/robo.jpg"
import logo11 from "../images/debsoc.png"
import logo12 from "../images/reflexo.jpg"
import logo13 from "../images/edc.jpg"
function Clubs(){
  return(
    <div>
      <TouristIntro intro="Societies of IIEST"/>

      <nav aria-label="breadcrumb">
  <ol class="breadcrumb container">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Societies</li>
  </ol>
</nav>
    <div className="container">
    <MediaPresent1 src={logo10}
    heading="Robodarshan - the Robotics Society" body="ROBODARSHAN, the Robotics Society of IIEST Shibpur,
     is one of the most active student societies helping in inculcating among students the scientific temper &
      zeal to show how robotics is closely related to our daily world and how they make our lives easier by AUTOMATON.
       Founded in 2009, the club became an official part of
    Centre for Creative Expressions in 2011 and since then the club has been progressing with leaps and bounds. "
    link="Facebook page link" add="https://www.facebook.com/robodarshan/"
    alt="Robodarshan picture"
    />
    <hr/>
    <ReverseMedia1 src={logo4}
    heading="Les Thespians - The dramatics society" body="The dramatics society of IIEST, Shibpur, Les Thespians
     has produced many successful and hugely acclaimed theatrical productions since 2009. The society helps the
      theatre enthusiasts in this institute to build a common platform based on friendship. Simply speaking, theatre
       is just their medium of making new friends. Les Thespians also hosts
     the hugely popular drama festival Anuranon (Resonance) every year in the Institute campus."
     link="Facebook page link" add="https://www.facebook.com/lesthespians/"
    alt="Lesthespian picture"
    />
    <hr/>
    <MediaPresent1 src={logo3}
    heading="Catharsis - The Photography Society" body="Founded as BECPhoS [Bengal Engineering College Photographic Society] in
     1971 and later reformed as Catharsis in 2009, this society has come a long way. Catharsis is a platform for creative expressions
      through the medium of photographs. Photography is a way of capturing moments, memories and preserving them forever. Catharsis
      aims to inculcate a love of photography among students. Seeing the universe through the lens, it helps young photo-enthusiasts
       to interpret a world of their own.
    The objective of Catharsis is to inculcate the love for art photography among the student community."
    link="Facebook page link" add="https://www.facebook.com/catharsis.iiests/"
    alt="Cathersis picture"
    />
    <hr/>
    <ReverseMedia1 src={logo5}
    heading="Euphony - The Music club" body="Life at IIEST(formerly BESU) campus is filled with a variety of self-enriching activities.
     They fulfil the expectations of students in all spheres of life, including Art & Culture, Sports & Fitness, Social Service and
      Technology among others. A number of clubs, societies and other organizations provide a wide range of activities outside the
      curriculum to satisfy one's needs of intellectual pleasure. The Music club is a vibrant and elite society of musically gifted
       students who come together and create fascinating melodies. The purpose of the club is to showcase the musical talent of the students.
    The club encourages young musicians to interact with each other and gives them an appropriate jam pad."
    link="Facebook page link" add="https://www.facebook.com/euphonyIIEST/"
    alt="Euphony picture"
    />
    <hr/>
    <MediaPresent1 src={logo8}
    heading="LitSoc - The Society of literature" body="The one stop for all your literary and creative needs, that is how the
     literary society 'LITSOC' is defined which is one of the most educating and creative societies of our college IIEST.
     If you've got a knack for expressing your emotions and thoughts eloquently on a piece of paper, if you're able to piece
      together a bunch of letters into some words and arrange those individual words to possess a coherent meaning that leaves an
    indelible mark on the reader's consciousness, start running and don't stop until you've joined us."
    link="Facebook page link" add="https://www.facebook.com/litsociiests/"
    alt="Litsoc picture"
    />
    <hr/>
    <ReverseMedia1 src={logo6}
    heading="Quizmaniac BEings " body="Founded way back on 9th April, 2008, Quizmaniac Beings is the oldest and most prestigious
    club of IIEST Shibpur. Under the mentorship of Dr. Indranath Sinh, the club has come a long way from its humble beginnings in N235,
     to having already organized the first of its kind and the largest quiz of Kolkata. From Tata Crucible winner Santanu Dey(Class of '89)
      to Spring Fest winner Shanto Ganguly (Class of '14) to Biz Quiz Runners Up Souvik Maity, Debneel Bagchi, Deepan Das and Shreya Sharma
       at Kshitij, 2015, Quizmaniac
     Beings has established itself over the years as a force to be reckoned with in the Calcutta Quizzing Circuit. "
     link="Facebook page link" add="https://www.facebook.com/QuizmaniacBEings/"
    alt="Qmb picture"
    />
    <hr/>
    <MediaPresent1 src={logo9}
    heading="SCAGE - Creative Arts and Green Environment " body="The Society for Creative Arts
     and Green Environment (SCAGE) is a society under the Center for Creative Expression of The Indian
     Institute Of Engineering Science and Technology, Shibpur. The function of this Society in the Institute
      of National Importance (INI) is to remain associated with the betterment
    of the campus ambience by improvising creativity and by nurturing creative arts (graphics)."
    link="Facebook page link" add="https://www.facebook.com/ScageIIESTshibpur/"
    alt="Scage picture"
    />
    <hr/>
    <ReverseMedia1 src={logo2}
    heading="Society of Games and Sports" body="Sports at IIEST, Shibpur was an idea, it was started by a bunch of enthusiasts
     who aimed at bringing up the sports culture of this prestigious institution. We are now a family of more than 2000 sports enthusiasts,
     we are thankful to all of them and hope everyone keeps showing us the same support for years to come."
     link="Facebook page link"
    alt="Game picture"
    />
    <hr/>
    <MediaPresent1 src={logo7}
    heading="Code IIEST" body="CodeIIEST is one of the newest clubs of Indian Institute of Engineering Science and Technology, Shibpur.
     Formed in Nov'14 , the club has been actively involved in cultivating comprehensive skills in computer science among the students.
      The club consists of various enthusiasts and is a wonderful hub for a plethora of informative and interactive sessions. The students
       keep themselves updated with
     the emerging technologies, which further help them strengthen their skills and enhance creativity and innovation."
     link="Facebook page link" add="https://www.facebook.com/CodeIIEST/"
    alt="Codeiiest picture"
    />
    <hr/>
    <ReverseMedia1 src={logo11}
    heading="DebSoc - The Debating Society" body="The aim of the society is to serve as a platform for avid debaters
    and help build a debating culture on campus. his group allows people from the past and present of
    IIEST,Shibpur (erstwhile BESU) to debate on any topic posted. Whilst being reasonably inclusive and generally pretty slack."
    link="Facebook page link" add="https://www.facebook.com/BeDebatorsClub/"
    alt="Debsoc picture"
    />
    <hr/>
    <MediaPresent1 src={logo12}
    heading="Reflexo Beta - the Dance Society" body="Reflexo Beta, The Official Dance Club of IIEST, Shibpur. One of the highly
    active club of IIEST Shibpur. Dancing is one of the most common and popular ways of expression;
     let's make our voices audible to the world! Happy International Dance Day, everyone! Keep Dancing!."
     link="Facebook page link" add="https://www.facebook.com/reflexobeta/"
    alt="Reflexo picture"
    />
    <hr/>
    <ReverseMedia1 src={logo13}
    heading="Entrepreneurship Development Cell " body="Entrepreneurship Development Cell, IIEST Shibpur (E-Cell IIESTS) was set up in
    the year 2009 under the AICTE initiative and is working under the guidance of the Department of Human Resources Management, IIEST
    Shibpur in co-ordination with NRDC-IIEST IFC, TCGTBI and now with IIC IIESTS.This cell enable smooth and efficient interaction
    between its principal components spanning students, faculty, working professionals, aspiring and existing entrepreneurs, mentors,
    angel investors, and venture capitalists.The goal of this cell is to not only gather ideas or opinions but to put those ideas or
    opinions into action, or help someone in the fraternity to accomplish the desire of starting or creating a business."
    link="Facebook page link" add="https://www.facebook.com/groups/edc.iiests/"
    alt="EDC logo"
    />
    <hr/>
    </div>
    </div>
  );
}

export default Clubs;

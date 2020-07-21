import React from 'react'
import MediaPresent from '../component/mediapresent.js'
import ReverseMedia from '../component/reversemedia.js'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import logo1 from "../images/main-building.jpg"
import logo2 from "../images/science_andtechnologybuilding.jpg"
import logo4 from "../images/workshop.jpg"
import logo3 from "../images/library.jpg"
import logo5 from "../images/hospital.jpg"
import logo6 from "../images/richardsonhall.jpg"
import logo7 from "../images/wolf.jfif"
import logo8 from "../images/senguptahall.jpg"
import logo9 from "../images/senhall.jpg"
import logo10 from "../images/macdonald.jpg"
import logo11 from "../images/aksealhall.jpg"
import logo12 from "../images/hostel8.jpg"
import logo13 from "../images/hostel10.jpg"
import logo14 from "../images/hostel11.jpg"
import logo15 from "../images/hostel15.jpg"
import logo16 from "../images/williamshall.jpg"
import logo17 from "../images/nivedita.jpg"
import logo18 from "../images/pandyahall.jpg"
import logo19 from "../images/slaterhall.jpg"
import logo20 from "../images/gymnasium.jpg"


function Buildings(){
  return(
    <div>  <TouristIntro intro="Buildings of IIESTS..."/>
  <Pagenav/>
    <div className="container fade">
     <hr/>
     <MediaPresent src={logo1}
     heading="Main Academic Building"    body="The main academic complex is a four-storied building covering about 22000 square meters area that
     accommodates most of the engineering departments, Department of Human Resources Management, Office of the Dean (Academic Affairs) and Office
     of Controller of Examinations."
     alt="Main buiding"
     />
     <hr/>

     <ReverseMedia src={logo2}
     heading="Science and Technology Building"   body="The newly constructed eight-storied Science and Technology building with 14400 square metres
     area accommodates some of the existing engineering departments, science and management departments, and various centres and schools. Office of
     the Vice-Chancellor, Offices of the Deans, Registrar, and other financial and administrative offices are also located in this building. Annexes
     to this building are now being constructed to accommodate future departments, schools, centres and offices."
     alt="S and T logo"
     />
     <hr/>


     <MediaPresent src={logo3}
     heading="Ramanujan Central Library"    body="The Library was started in April 1857 with a capital expenditure of Rs.5,000/-. The Institute library
     has the distinction of being one of the oldest and the largest resourceful technical library in the south-east Asia. The total area of the library
     is around 3,000 square meters and it is open from 9.00 A.M. to 12.00 A.M. The library not only caters to the basic information needs of faculty
     members, research scholars and students of this Institute but also provides information services to research workers of neighbouring universities
     and research institutes. The mission of the Central Library is to facilitate creation of new knowledge through acquisition, organization and
     dissemination of knowledge resources and providing for value added services."
     alt="library"
     />
     <hr/>
     <ReverseMedia src={logo4}
     heading="Workshop Complex"   body="The old Workshop complex where the former Bengal Engineering College was originally started in this campus is
     now a heritage building. Part of the workshop is housed in the adjoining building. The workshop complex is quite large, encompassing an area of
     about 8500 square metres. The Workshop Complex has nine engineering shops to offer trainings in different basic shop practices including Carpentry
     Shop, Smithy Shop, Welding and Painting Shop, Fitting Shop, Machine Shop, Foundry and Pattern Shop, Boiler Shop, Electric Shop, Automobile Shop
     and Project Model Shop."

     alt="workshop"
     />
     <hr/>

     <MediaPresent src={logo5}
     heading="Health Services"    body="The Institute has a hospital to cater to the needs of the campus inmates with medical officers and other supporting
     staff. It provides 24 hours ambulance service. Besides, the hospital has an ID Ward to effectively isolate students suffering from infectious diseases
     such as chicken pox, mumps, measles etc. Outdoor treatment is available in two shifts: morning and afternoon except Sundays and holidays. Serious cases
     are generally transferred either to any city hospital or to the Students' Health Home, Kolkata, the institute having Universal Membership for the later.
     The institute hospital provides 24 hours ambulance service ."
     alt="hospital"
     />
     <hr/>
     <ReverseMedia src={logo20}
     heading="Gymnasium"   body="The centruy old heritage athletic club building houses the gymnasium. GAABESU, our alumni association, recently renovated
     the building, bought new equipments, and inaugurated the upgraded gymnasium in August 2014."
     alt="Gym"
     />
     <hr/>

     <MediaPresent src={logo19}
     heading="Slater Hall "   body="Slater Hall houses some of the clubs and societies of the institute, most notably the Music Club, the Debate Club, thr
     Photography Club and the Innovation Centre."
     alt="Slater"
     />
     <hr/>





     <ReverseMedia src={logo6}
     heading="Richardson Hall"   body="It was a 3 storey Hostel and was possibly built in early sixties. Here, only final and pre-final years' students normally
     stayed. The design was different from that of Downing Hall as well as Hostels 7-16. It had 3 wings at 120 degrees separation. Usually, the final year boys
     stayed at the 2nd floor, which was more airy. The Hostel had no fans. It was located near the main gate and a slushy pond existed near it. Facing this Hostel
     is the ground 'Lords' ."
     alt="Richardson"
     />
     <hr/>

     <MediaPresent src={logo7}
     heading="Wolfenden Hall"    body="The Boarders are called Wolves, jokingly. This is the Hall, most glamourous, where the most extrovert would go.It is not the
     Hostel for the studious type! People who had left a mark or wanted to make a mark preferred this hostel. It has an aura about it an is located right across
     the Oval ground. It used to be an expensive Hostel, so far as food bills are concerned. During College Re-unions, one could find the whole front of the Hostel
     would get illuminated with the colorful bulbs to look great from a distance.Here, final and pre-final years' Students are allowed to stay."
     alt="Wolfenden"
     />
     <hr/>
     <ReverseMedia src={logo8}
     heading="Sengupta Hall"   body="Sengupta Hall is the single-seated hall of residence for the boys. It accommodates the 3rd and 4th-year ug students."
     alt="Sengupta"
     />
     <hr/>

     <MediaPresent src={logo9}
     heading="Sen Hall"    body="Sen Hall is the single seated hall of residence for the boys. It accommodates the 3rd and 4th year ug students. Each room consists of a
     tubelight, a fan, a bed, a table, a chair and an almirah. Arrangements for playing indoor games like table tennis and carom board is available. Sen hall has
     it's own garden where you can play badminton or short-pitch cricket. Mess food is good. 2 to 3 times biryani happens in a month. Arrangements for a common tv,
     3–4 types of newspapers in english and bengali, several types of magazines, employment news are also there. Each year Freshers party for 3rd year and Farewell
     party for 4th year is held."
     alt=""
     />
     <hr/>
     <ReverseMedia src={logo10}
     heading="Macdonald Hall"   body="This Hall is the single seated hall of residence for the boys. It accommodates the 3rd and 4th year ug students."
     alt="Macdonald"
     />
     <hr/>
     <MediaPresent src={logo12}
     heading="D Banerjee Hall(Hostel 8)"   body="This is a First Year Hostel. In this hostel, there are two game rooms one is for table tennis and other for carrom
     and news paper. There is small garden in front of hostel. Every facilities are available for students here. It is very Affordable and Secured Hostel. The IIEST
     Shibpur is so well famous for its 'greenery' campus and if you are not a hostelite then you are going to miss something very very important. The weather is
     pretty nice with the Ganga in half a kilometer of aerial distance. You can constantly feel the breezes coming in. Spring is one of the best times here.You have
     common rooms with carrom boards and TT. You also have access to newspapers in almost about 3 languages, television and radio. Inter-hostel/hall sports are
     organised comprising cricket, football, table tennis, badminton, carrom etc. Festivals are celebrated with much fervour. Be it Holi, Diwali, Christmas, Pongal,
     Onam, Saraswati Puja or Durga Puja; you will find your hostel illuminated and brimming with energy."
     alt="Hostel 8"
     />
     <hr/>
     <ReverseMedia src={logo11}
     heading="A.K. Seal Hall(Hostel 9)"    body="This Hall is the single seated hall of residence for the boys. It accommodates the 3rd and 4th year ug students."
     alt="Seal"
     />
     <hr/>


     <MediaPresent src={logo13}
     heading="Hostel 10"    body="This is a First Year Hostel for undergrad course at IIEST Shibpur. Hostel facilities are good. Staffs are also good.They served
     great foods in the hostel Centeen. Has a common room which contains TV, sitting and carrom board. Every floor contains two WiFi router which speeds upto almost
     10-11MBps. 24X7 gaurding is available. Study room is available. Washing machine is also there."

     alt="hostel10"
     />
     <hr/>
     <ReverseMedia src={logo14}
     heading="Hostel 11"   body="This is a Second Year hostel for Boys. The ambience is good. The food too is good, and breakfast,lunch and dinner are timely provided.
     This hostel is situated in the best location of campus. It has security camera... Washing machine.. Good mess staff.. Security is too tight.. has a badminton court,
     a volleyball court, a fresh front view of garden and a great backyard due to Neem lake. "
     alt="hostel11"
     />
     <hr/>

     <MediaPresent src={logo15}
     heading="Hostel 15"    body="This is a Boys hostel. The facilities available are: 1. Free Unlimited WiFi access available, 2. T.V is there in the common room,
     3. Suffiecient Bathrooms in each & every floor, 4. Water purifier is there for drinking water, 5. Dust Bin in each & every floor, 6.Badminton Court in the
     Front Yard, 7. Beautiful Garden in the Front Yard, 8. Indoor games are available (carrom). People here has Good experience and the Food is really good."
     alt="hostel15"
     />
     <hr/>
     <ReverseMedia src={logo16}
     heading="Lt Williams Halls of Residence"   body="Lt Williams Halls of Residence is a ladies hostel for PG and Research Scholars. It's beautifull place to stay
     with awesome food, 24 hours security and all necessary facilities. Address : 6B, Indian Institute of Engineering Science and Technology, Shalimar, Howrah,
     West Bengal. The rooms accomodate maximum 2 and cleaning is done everyday. Foods are avilable even on vacation like Durga Pooja, Summer vacation. Beautiful
     view of the River Ganga from the Hostel and cool breeze comes in. "
     alt="LtWilliams"
     />
     <hr/>

     <MediaPresent src={logo17}
     heading="Sister Nivedita Ladies Hostel"    body="First year girls hostel for the students of IIEST, SHIBPUR. The hostel with 3 floors has newly renovated
     interior.The atmosphere is amazing. The rooms are occupied by four girls.Each floor have almost 12 rooms and 2 washrooms and also a common room. There is
     a mess and a common room in ground floor. 24 hours security guard is available."
     alt="Nivedita"
     />
     <hr/>
     <ReverseMedia src={logo18}
     heading="Pandya Hall (Girls Hostel)"   body="Hostel of 2, 3, 4 years undergraduate girls and also some post graduate students live here. The hostel is more
     close from gate no 1 than gate no 2.The hall organises sports event every year. The place is surrounded by institute hospital,guest house,boxing ring, basketball
     court. It is in front of clock tower and vidisha lake. The food offered here is awesome. "
     alt="Pandya Hall"
     />



    </div>


    </div>
  );
}

export default Buildings;

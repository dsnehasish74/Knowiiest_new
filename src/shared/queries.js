import {Leisure} from './leisure.js';
import {touristsdetails} from './tourists.js';
import {fests} from './fests.js';
import {busroutes} from './busroutes.js';
import {canteen} from './canteen.js';
import {buildings} from './buildings.js';
import React, { Component ,useState} from 'react';
import nl2br from 'react-newline-to-break';
const listqueries=[];
const listanswers=[];
listqueries.push("Hello Hi How are you greetings");
listanswers.push("Hello,I am doing good. Type your query so that i can help.");
listqueries.push("IIEST Shibpur");
listanswers.push("Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College/ BESU is a premier institute being the second oldest engineering college of India which has significantly contributed to the development of this nation. The college has a rich culture of heritage with foundations of historical importance and a green lush campus where one can find moments of serenity.");
listqueries.push("SGPA and CGPA");
listanswers.push("•S.G.P.A.(Semester Grade Point Average) : ⅀(Ci.Gi)/⅀(Ci) •C.G.P.A.(Cumulative Grade Point Average) : ⅀(Ci.Gi)/⅀(Ci)");
listqueries.push("Lab Evaluation and Grading");
listanswers.push("•Regular performance in laboratory works : 30% •Quality of laboratory reports : 30% •Semester-end test : 20% •Viva-voce/Teacher’s Assessment : 20%");
listqueries.push("Theory Evaluation and Grading");
listanswers.push("•Mid-semester examination : 30% •Teacher’s assessment : 20% •End-semester Assessment : 50%");
listqueries.push("Books and Notes");
listanswers.push("The PDFs of the books important and required for the curriculum are provided in the books section of the website. Please head over to the books section (https://knowiiest.netlify.app/books) for the PDFs.");
listqueries.push("Grading");
listanswers.push("•In any semester, for theory courses there will be mid-semester examinations and end-semester examinations, conducted centrally by the Academic Section. Mid-semester examinations will be held in the middle of a semester, generally after completion of the first six to seven weeks of study. Endsemester examinations will be held after the completion of the course. The dates of such examinations will be displayed in the Academic calendar •There will be supplementary examinations for the theory courses in which students have failed. Each year, supplementary examinations will be held after the publication of even semester results. Supplementary examinations are equivalent to the end-semester examinations and the students can retain their internal assessment. •In the Summer Term also, for theory papers there will be mid-term examinations and end-term examinations, similar to mid-semester and end-semester examinations • The dates can be found in the academic calendar");
listqueries.push("Grounds and Leisure");
listanswers.push("IIEST possess a plethora of sports and leisure places like Lords ground, Oval Ground, BasketBall Court, Swimming Pool, Gymnasium. Type them to know more about them.");
Leisure.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
listqueries.push("Tourists Spots");
listanswers.push("The tourist attractions near IST includes Princepghat, Alipur zoo, Nandan, Indian museum, Victoria memorial and Acharya Jagadish Chandra Bose Indian botanic garden. Type them to know more about them.");
touristsdetails.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
listqueries.push("Fests");
listanswers.push("IIEST conducts several fests such as REBECA, INSTRUO, GYANDHARA, OIKOTAAN, ANURANAN, TEDX-IIESTSHIBPUR, UDBHAVANI, INITIUM, METALLUM, SPHURAN, SCINTILLATIONS, IMPETUS, VAIDYUTAK, ABHIYANTRIX, SATRANG and KRITI. Type them to know more about them.");
fests.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
listqueries.push("Bus routes");
listanswers.push("Find below the easiest and cheapest travel routes to popular places and transit hubs in the city. You can always take a cab or other alternatives, but from our experience, these, listed below, are the most efficient ones. Select your starting place from below to know more.\n Nearest airport : Netaji Subhas Chandra Bose terminus, Dum Dum (28 km) Nearest metro station : Rabindra Sadan (active) (9km) and Howrah (proposed) Nearest railway station : Howrah (7 km)");
busroutes.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
listqueries.push("Canteens");
listanswers.push("The canteens in IIEST campus are Student canteen , Institute canteen , Cafe inn and University canteen. Type them to know more about them.");
canteen.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
listqueries.push("Buildings");
listanswers.push("The main buildings and constructions inside the IIEST campus includes Main Academic Building, Science and Technology Building, Ramanujan Central Library, Workshop Complex, Health Services, Gymnasium, Slater Hall , Downing Hall , Richardson Hall, Wolfenden Hall, Sengupta Hall, Sen Hall, Macdonald Hall, A.C. Roy Hall(Hostel 7), D. Banerjee Hall(Hostel 8), B.Sen Hall(Hostel 9), A.K.Seal Hall(Hostel 10), Hostel 11, Hostel 13, Hostel 14, Hostel 15, Hostel 16, Lt Williams Halls of Residence, Sister Nivedita Ladies Hostel, Pandya Hall (Girls Hostel). Type them to know more about them.");
buildings.map(items=>{
    listqueries.push(items.heading);
    listanswers.push(items.body);
});
export {listqueries,listanswers};
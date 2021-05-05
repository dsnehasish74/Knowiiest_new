import React, { Component ,useState} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {Leisure} from '../shared/leisure.js';
import {touristsdetails} from '../shared/tourists.js';
import {fests} from '../shared/fests.js';
import {busroutes} from '../shared/busroutes.js';
import {canteen} from '../shared/canteen.js';
import {buildings} from '../shared/buildings.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import stringSimilarity from "string-similarity";
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#02475e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#02475e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a', 
};
var option='';
var queryarea='';
class ChatAssistant extends Component {
  render() {
    return (
        <div>
          <Popup trigger={<div className="chat-icon"><i className="fas fa-robot"></i></div>}>
            <div className="chatass">
            <ThemeProvider theme={theme}>
            <ChatBot headerTitle= "Hello IIESTIAN" width="500px"
            steps={[
            {
              id:'intro', 
              message:'Hi, I am Anish :)',
              trigger: 'Queries',
            },
            {
              id:'Queries', 
              message:'Select your area of query so that i can help.', 
              trigger:'Displaying options',
            },
            {
              id: "Displaying options",
              options: [
              {
                  value: "about",
                  label: "IIEST",
                  trigger:(value)=>{
                     queryarea="IIEST";
                     return 'type';
                  }
              },
              { 
                  value: "Books,Grading and Marking",
                  label: "Books and Grading",
                  trigger:(value)=>{
                     queryarea="grading";
                     return 'type';
                  }
              }, 
              { 
                  value: "Sports and Leisure",
                  label: "Sports and Leisure",
                  trigger:(value)=>{
                     queryarea="Sports and Leisure";
                     return 'type';
                  }
              }, 
              { 
                  value: "Tourist Places",
                  label: "Tourist Places",
                  trigger:(value)=>{
                     queryarea="Tourist Places";
                     return 'type';
                  }
              }, 
              { 
                  value: "Fests",
                  label: "Fests",
                  trigger:(value)=>{
                     queryarea="Fests";
                     return 'type';
                  }
              },
              { 
                  value: "Bus Routes",
                  label: "Bus Routes",
                  trigger:(value)=>{
                     queryarea="Routes";
                     return 'type';
                  }
              },
              { 
                  value: "Canteens",
                  label: "Canteens",
                  trigger:(value)=>{
                     queryarea="canteens";
                     return 'type';
                  }
              },
              { 
                  value: "Buildings",
                  label: "Buildings",
                  trigger:(value)=>{
                     queryarea="buildings";
                     return 'type';
                  }
              } 
              ]
            },
            {
              id:'type', 
              message:'Ask your doubts and queries about {previousValue}', 
              trigger:'typenow',
            },
            {
              id:'typenow',
              user:true,
              trigger:(value)=>{
                option=value['value'];
                return queryarea;
              },
            },
            {
                id:'About',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Hello Hi How are you greetings");
                  listanswers.push("Hello,I am doing good. Type your query so that i can help.");
                  listqueries.push("IIEST Shibpur");
                  listanswers.push("Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College/ BESU is a premier institute being the second oldest engineering college of India which has significantly contributed to the development of this nation. The college has a rich culture of heritage with foundations of historical importance and a green lush campus where one can find moments of serenity.");
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            },
            {
                id:'grading',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("SGPA and CGPA");
                  listanswers.push("•S.G.P.A.(Semester Grade Point Average) : ⅀(Ci.Gi)/⅀(Ci) •C.G.P.A.(Cumulative Grade Point Average) : ⅀(Ci.Gi)/⅀(Ci)");
                  listqueries.push("Lab Evaluation and Grading");
                  listanswers.push("•Regular performance in laboratory works : 30% •Quality of laboratory reports : 30% •Semester-end test : 20% •Viva-voce/Teacher’s Assessment : 20%");
                  listqueries.push("Theory Evaluation and Grading");
                  listanswers.push("•Mid-semester examination : 30% •Teacher’s assessment : 20% •End-semester Assessment : 50%");
                  listqueries.push("Books and Notes");
                  listanswers.push("The PDFs of the books important and required for the curriculum are provided in the books section of the website. Please head over to the books section (https://knowiiest.netlify.app/books) for the PDFs.");
                  listqueries.push("Grading");
                  listanswers.push("•In any semester, for theory courses there will be mid-semester examinations and end-semester examinations, conducted centrally by the Academic Section. Mid-semester examinations will be held in the middle of a semester, generally after completion of the first six to seven weeks of study. Endsemester examinations will be held after the completion of the course. The dates of such examinations will be displayed in the Academic calendar. •There will be supplementary examinations for the theory courses in which students have failed. Each year, supplementary examinations will be held after the publication of even semester results. Supplementary examinations are equivalent to the end-semester examinations and the students can retain their internal assessment.");
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            },
            {
                id:'Sports and Leisure',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Grounds and Leisure");
                  listanswers.push("IIEST possess a plethora of sports and leisure places like Lords ground, Oval Ground, BasketBall Court, Swimming Pool, Gymnasium. Type them to know more about them.");
                  Leisure.map(items=>{
                        listqueries.push(items.heading);
                        listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            },
            {
                id:'Tourist Places',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Tourists Spots");
                  listanswers.push("The tourist attractions near IIEST includes Princepghat, Alipur zoo, Nandan, Indian museum, Victoria memorial and Acharya Jagadish Chandra Bose Indian botanic garden. Type them to know more about them.");
                  touristsdetails.map(items=>{
                    listqueries.push(items.heading);
                    listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            },
            {
                id:'Fests',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Fests");
                  listanswers.push("IIEST conducts several fests such as REBECA, INSTRUO, GYANDHARA, OIKOTAAN, ANURANAN, TEDX-IIESTSHIBPUR, UDBHAVANI, INITIUM, METALLUM, SPHURAN, SCINTILLATIONS, IMPETUS, VAIDYUTAK, ABHIYANTRIX, SATRANG and KRITI. Type them to know more about them.");
                  fests.map(items=>{
                        listqueries.push(items.heading);
                        listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            }
            ,{
                id:'Routes',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Bus routes");
                  listanswers.push("Find below the easiest and cheapest travel routes to popular places and transit hubs in the city. You can always take a cab or other alternatives, but from our experience, these, listed below, are the most efficient ones. Select your starting place from below to know more.\n Nearest airport : Netaji Subhas Chandra Bose terminus, Dum Dum (28 km) Nearest metro station : Rabindra Sadan (active) (9km) and Howrah (proposed) Nearest railway station : Howrah (7 km)");
                  busroutes.map(items=>{
                      listqueries.push(items.heading);
                      listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            }
            ,{
                id:'canteens',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Canteens");
                  listanswers.push("The canteens in IIEST campus are Student canteen , Institute canteen , Cafe inn and University canteen. Type them to know more about them.");
                  canteen.map(items=>{
                     listqueries.push(items.heading);
                     listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            },
            {
                
                id:'buildings',
                delay:5,
                message:()=>
                {
                  const listqueries=[];
                  const listanswers=[];
                  listqueries.push("Buildings");
                  listanswers.push("The main buildings and constructions inside the IIEST campus includes Main Academic Building, Science and Technology Building, Ramanujan Central Library, Workshop Complex, Health Services, Gymnasium, Slater Hall , Downing Hall , Richardson Hall, Wolfenden Hall, Sengupta Hall, Sen Hall, Macdonald Hall, A.C. Roy Hall(Hostel 7), D. Banerjee Hall(Hostel 8), B.Sen Hall(Hostel 9), A.K.Seal Hall(Hostel 10), Hostel 11, Hostel 13, Hostel 14, Hostel 15, Hostel 16, Lt Williams Halls of Residence, Sister Nivedita Ladies Hostel, Pandya Hall (Girls Hostel). Type them to know more about them.");
                  buildings.map(items=>{
                      listqueries.push(items.heading);
                      listanswers.push(items.body);
                  });
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'Queries',
            }
          ]}
          />
          </ThemeProvider>
           </div>
        </Popup>
        </div>
        );
      }
    }
    export default ChatAssistant;
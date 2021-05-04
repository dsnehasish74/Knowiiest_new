import React, { Component ,useState} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import stringSimilarity from "string-similarity";
import {listqueries,listanswers} from '../shared/queries.js';
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
              message:'Type your query so that i can help.', 
              trigger:'type',
            },
            {
              id:'type',
              user:true,
              trigger:(value)=>{
                option=value['value'];
                return 'bye';
              },
            },
            {
                id:'bye',
                delay:5,
                message:()=>
                {
                  console.log(`${option}`);
                  var answer=stringSimilarity.findBestMatch(`${option}`, listqueries);
                  console.log(answer,listanswers,listqueries);
                  if (answer.bestMatch['rating']<0.0001)
                    return 'Sry ask something related to our website';
                  return listanswers[answer.bestMatchIndex];
                },
                trigger:'type',
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
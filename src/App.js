import React from 'react';
import logo from './WhatsApp Image 2020-07-20 at 00.14.14.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <p>
            This site is temporarily unavailable due to technical issues
        </p>
        <p>you can still visit our blog....<a href="https://yournewabode.blogspot.com/" target="blank">click here to visit our blog</a></p>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'

function Books(){
  return(
    <div>
      <TouristIntro intro="Important Books for semester exam"/>
    <Pagenav/>
      <div className="container fade">
      <div className="alert alert-primary" role="alert">
        books of respective semesters will be uploaded soon..
      </div>
        <div className="dropdown">
        <button className="dropbtn">Mathematics</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1SCOmFGDqBL3jvVcx3dEebe0bHlwmZkBJ/view?usp=sharing" target="blank"><button className="btnstyle">Mathematics by Dr. Guruprasad Samanta</button></a>
          <a href="https://drive.google.com/file/d/186aaegRK0kN3KdmoOxyL0MTyXh47Ezqa/view?usp=sharing" target="blank"><button className="btnstyle">Diiferantial Calculas by BC Das,BN Mukherjee</button></a>
          <a href="https://drive.google.com/file/d/1x-FXtMM87Pe3u1CZ9cHACPfMYSc-RMaE/view?usp=sharing" target="blank"><button className="btnstyle">Integral and Differantial Calculus</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Basic Electrical Engineering</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1NZfIAv6HXeunPbmuhJDndVTstcUAQDlr/view?usp=sharing" target="blank"><button className="btnstyle">A Course in Electrical Engineering by Chester L. Dawes</button></a>
          <a href="https://drive.google.com/file/d/1Wsy8MC-88Z_uQJnbHN1ZadMlYv4Qfm1O/view?usp=sharing" target="blank"><button className="btnstyle">BEE by Charavarty,Nath,Chanda</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Physics</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1IKs4YyrjE7hpwG4-e5sW_qhhxdOa9Z8n/view?usp=sharing" target="blank"><button className="btnstyle">Vector Analysis by Spiegel</button></a>
          <a href="https://drive.google.com/file/d/1dSAx2s52rsRZtMVSmfpM_MbeHOJ539qV/view?usp=sharing" target="blank"><button className="btnstyle">Physics by BK Guha</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Computer</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1ev93lka9VBjP-V1tl648sp-emlHGp-zC/view?usp=sharing" target="blank"><button className="btnstyle">C book</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Mechanics</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1c7M0JNlwT7XXTTGXY3jWYT0UnsEeHeEV/view?usp=sharing" target="blank"><button className="btnstyle">Statics by J.L.Mariam</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Environment and Ecology</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/11vqauC-gdWYwmbyPsualuQ3Z8svXQPjZ/view?usp=sharing" target="blank"><button className="btnstyle">Environmental Engineering text book</button></a>
        </div>
        </div>
        <div className="dropdown">
        <button className="dropbtn">Engineering Drawing</button>
        <div className="drop">
          <a href="https://drive.google.com/file/d/1DaJFuHUWD3G109CiP3n88YEwPlSj2-D9/view?usp=sharing" target="blank"><button className="btnstyle">Engineering Drawing by ND Bhatt</button></a>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Books;

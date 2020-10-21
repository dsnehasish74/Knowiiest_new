import React from 'react'
import Col from '../svg/col.svg'
import '../css/home.css'

function Home(){
  return(
    <div className="home">
     <div className="hero">
        <div className="hero_text container">
          <h1>Know IIEST</h1>
          <p>Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College/ BESU  is a premier institute being the second oldest engineering college of India which has significantly contributed to the development of this nation. The college has a rich culture of heritage with foundations of historical importance and a green lush campus where one can find moments of serenity.</p>
        </div>
        <div className="hero_img">
          <img src={Col} alt="iiest"></img>
        </div>
     </div>
    <div className="feature_section">
    <h2>Our Top Features</h2>
    </div>
  </div>

  );
}

export default Home;

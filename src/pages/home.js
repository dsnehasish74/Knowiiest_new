import React from 'react'
import Col from '../svg/col.svg'
import '../css/home.css'
import logo1 from "../images/book.jpg"
import logo2 from "../images/blog.jpg"
import logo3 from "../images/partner.jpg"
import {Link} from 'react-router-dom'

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
    <div className="feature_section container">
    <h2>Our Top Features</h2>
    <div className="feature_card_container">
    <div className="feature_card">
    <div className="feature_card_img_container">
      <img className="feature_card_img" src={logo1} alt="book"></img>
      <div class="overlay">
        <div class="text">
          <h4>Explore this Feature</h4>
          <p>Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College</p>
          </div>
     </div>
      </div>
      <div className="feature_card_text">
      <h3>Books For Semester Exam</h3>
      <p>
        Here are the books and class notes that will help you in your semesters...
      </p>
      <Link to="/books" className="explore_link">explore here</Link>
    </div>
    </div>
    <div className="feature_card">
    <div className="feature_card_img_container">
      <img className="feature_card_img" src={logo2} alt="book"></img>
      <div class="overlay">
        <div class="text">
          <h4>Explore this Feature</h4>
          <p>Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College</p>
          </div>
     </div>
      </div>
    <div className="feature_card_text">
      <h3>Blogs on Campus Life</h3>
      <p>
        Have you ever realised that campus life is awesome!!!! Share your experiences with us here...
      </p>
      <a href="https://yournewabode.blogspot.com/" className="explore_link">explore here</a>
    </div>
    </div>
    <div className="feature_card">
    <div className="feature_card_img_container">
      <img className="feature_card_img" src={logo3} alt="book"></img>
      <div class="overlay">
        <div class="text">
          <h4>Explore this Feature</h4>
          <p>Since it's establishment in 1856, the Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) erstwhile BE College</p>
          </div>
     </div>
      </div>
    <div className="feature_card_text">
      <h3>Explore other Projects made by IIEST students</h3>
      <p>
        IIEST is full of talents- from students who have been hacking since eleven to people who can make an entire food-delivery app within a day. Here is a glimpse of some interesting projects created by the students of IIEST Shibpur...
      </p>
      <Link to="/" className="explore_link">explore here</Link>
    </div>
    </div>
    </div>
    </div>
  </div>

  );
}

export default Home;

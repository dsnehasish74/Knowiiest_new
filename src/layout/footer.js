import React from 'react';
import {Link} from 'react-router-dom'

function Footer(){
  return(
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><a href="https://yournewabode.blogspot.com/" target="blank">Blog</a></li>
              <li><a href="https://www.collegepravesh.com/cutoff/iiest-shibpur-cutoff-2019/" target="blank">Check cutoff for IIESTS here</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <ul>
              <li>Photo Credit Soumyadeep Biswas</li>
              <li>Special thanks to Soumya Debnath for his support<li>
            </ul>
          </div>
          <div className="col-12 col-md-4 social">
            <a href="https://www.facebook.com/Know_Iiest-104935301306099/"><i className="fa fa-facebook icon fa-lg"></i></a>
            <a href="https://www.instagram.com/know.iiest?r=nametag" target="blank"><i className="fa fa-instagram icon fa-lg"></i></a>
            <a href="mailto:knowiiest2020@gmail.com"><i className="fa fa-envelope icon fa-lg"></i></a>
          </div>
          <div className="col-12 copyright">&copy; Know IIESTS 2020 created with <span role="img" aria-label="love hearted emoji">💚</span></div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

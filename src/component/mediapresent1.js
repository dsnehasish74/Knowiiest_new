import React from 'react'

function MediaPresent1(props){
  return(
    <div className="media">
      <img src={props.src} className="mr-3 mediaimage" alt={props.alt}/>
      <div className="media-body">
      <h4 className="mt-0 heading-text">{props.heading}</h4>
      <span className="d-none d-sm-block">{props.body}</span>
  <br/>

      <div className="link-conatin">
      <a href={props.add} target="blank"><div className="cont"><i className="fa fa-facebook fa-lg facebook"></i></div></a>
      </div>
      </div>
      </div>
  );
}

export default MediaPresent1;

import React from 'react'

function MediaPresent1(props){
  return(
    <div className="media">
      <img src={props.src} className="mr-3 mediaimage" alt={props.alt}/>
      <div className="media-body">
      <h4 className="mt-0 heading-text">{props.heading}</h4>
      <span className="d-none d-sm-block">{props.body}</span>
  <br/><a href={props.add}><button className="linkclub">{props.link}</button></a>
      </div>
      </div>
  );
}

export default MediaPresent1;

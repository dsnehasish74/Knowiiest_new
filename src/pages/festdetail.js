import React from 'react'
import {Link} from 'react-router-dom'
import {fests} from '../shared/fests.js'
function Festsdetail(props){
  const route=fests[props.match.params.id]
  console.log("yah");
  return(
    <div>
    {
      <div className="row">

          <img src={route.src} alt={route.alt} className="detail-image col-12 col-md-6"></img>
          <div className="col-12 col-md-6">
          <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/fest">fests</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{route.heading}</li>
          </ol>
          </div>
              <h1 className="heading-text">{route.heading}</h1>
              <p>{route.body}</p>
          </div>
        </div>
      }
    </div>
      )

}

export default Festsdetail ;

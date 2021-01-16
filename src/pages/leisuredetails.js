import React from 'react'
import {Link} from 'react-router-dom'
import {Leisure} from '../shared/leisure.js'
function Leisuredetails(props){
  const route=Leisure[props.match.params.id]
  return(
    <div>
    {
      <div className="row details">

          <img src={route.src} alt={route.alt} className="detail-image col-12 col-md-6"></img>
          <div className="col-12 col-md-6">
          <div aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/leisure">Sports</Link></li>
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
export default Leisuredetails;
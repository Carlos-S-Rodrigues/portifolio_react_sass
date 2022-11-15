import React from 'react'
import "./styled.scss"

function Cards(props) {
  return (
    <section>
      <div className="grid-wrapper">
          <div className="design-card">
            <img src={props.img} />
            <h1 className="job-name">{props.name}</h1>
            <p className="job-description"> {props.description}</p>
            <button className="card-btn">View Project</button>
          </div> 
      </div>
    </section>    
  )
}

export default Cards
import React from 'react'
import "./styled.scss"

function Cards(props) {
  return (
      
      <div className="card">
        <div className="card-body">
          <img className="card-image" src={props.img} />
          <h1 className="card-title">{props.title}</h1>
          <p className="card-description">{props.description}</p>
        </div>
        <button className="card-btn">View Project</button>
      </div>
    
     
  )
}

export default Cards
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
        <a href={props.link} target="_blank" className="card-btn">View Project</a>
      </div>
    
     
  )
}

export default Cards
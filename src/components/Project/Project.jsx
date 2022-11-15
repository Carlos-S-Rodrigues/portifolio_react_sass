import React from 'react'
import './style.scss'

function Project(props) {




  return (
    <div>
      <section className="projects">
        <h2>Here you can see some of my work, as a designer and developer.</h2>
        <div className="grid-wrapper">
          <div className="design-card">
            <img src={props.img} alt="" />
            <h1 className="job-name">Site Gran Primus</h1>
            <p className="job-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure iusto libero dicta debitis perferendis mollitia..</p>
            <button className="card-btn"> View Project</button>
          </div>

          <div className="dev-card">TWO</div>

         

          
        </div>
      </section>
    </div>
  )
}

export default Project
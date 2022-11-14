import React from 'react'
import './style.scss'

function Jobs() {
  return (
    <div>
      <section className="jobs">
        <h2>Here you can see some of my work, as a designer and developer.</h2>
        <div className="grid-wrapper">
          <div className="design-grid"></div>
          <div className="dev-grid"></div>
        </div>
      </section>
    </div>
  )
}

export default Jobs
import React from 'react'
import Cards from './Cards/Cards'
import './style.scss'



function Project() {

  return (
    <div>
      <section className="projects" id="myJobs">
        <h2>Here you can see some of my work, as a designer and developer.</h2>

        <div className="card-wrapper">
          <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/GitSearch.png?alt=media&token=0033f32d-5f7f-46b8-a676-49d8e129e0b0" 
            title="JavaScript API"
            description="GitHub user search project, using github's own api."
            link="https://github.com/Carlos-S-Rodrigues/gitsearch"
            />

            <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/granprimus.png?alt=media&token=4c4eb6ad-bf74-4840-b61c-a992335de0ea" 
            title="ReactJS"
            description="
            Responsive website using React and Styled-components, react-router-dom for page switching, was preparing a firebase connection, but was discontinued by the company I work for indefinitely." 
            link="https://github.com/Carlos-S-Rodrigues/gran-site-vite"
            />


            <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/doctorcare.png?alt=media&token=823d1f53-d3c4-43ee-851a-5543e532c402" 
            title="JavaScript"
            description="Study project with Rocketseat, a responsive web page."
            link="https://github.com/Carlos-S-Rodrigues/nlwReturn-main"
            />


            <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/newsnews.png?alt=media&token=d4829569-eb5a-4bfc-a987-199907ad4c14" 
            title="Figma Prototype"
            description="test prototype of a news application" 
            link="https://www.figma.com/proto/0yfsKpVZFFuSzzwDf0Kvhw/news-news?node-id=3%3A2&starting-point-node-id=3%3A2"
            />


            <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/travelliving.png?alt=media&token=acbac272-f342-4c99-8665-76f1d11e1d71" 
            title="Figma Prototype"
            description="Design of a travel app with a simple prototype using figma." 
            link='https://www.figma.com/proto/gFEUkdPRzqWDOjMof8f3kg/Travel-%26-Living?node-id=2%3A125&starting-point-node-id=2%3A2'
            />


            <Cards
            img="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/PredialPrimus-project_cover.png?alt=media&token=83b7ceab-8f58-48fe-92b2-c03563422ae0" 
            title="Figma Design"
            description="New application draft for the real estate company where I currently work. We are developing a new internal system and will need a new mobile app design. Some changes may occur during the development process."
            link="https://www.figma.com/proto/R6ukTQHKVDvWmvDFttvALT/App-Predial-Primus?node-id=13%3A368&scaling=scale-down&page-id=0%3A1"
            />

          </div>
      </section> 
    </div>
  )
}

export default Project
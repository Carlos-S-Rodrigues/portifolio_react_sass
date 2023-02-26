import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'
import './main.scss'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ArtGallery from './components/ArtGallery/ArtGallery'


function App() {


  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Project/>
     <ArtGallery/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App

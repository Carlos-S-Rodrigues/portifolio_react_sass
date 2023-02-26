import React, {useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import './style.scss'

function ArtGallery() {

  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  })

  return (
    <>
    <h2 className='contact-headlines'>Photoshop and Vector arts</h2>
    <div className ="container">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div dragConstraints={{right: 0, left: -width}} className="inner" drag={"x"}>
          <motion.div className="item">
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FBANNER%20SUM%2BSOMA%20low.jpg?alt=media&token=b13d7b8a-7e77-4a33-b3ad-8fb6d66c56cd" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2Fcapa%20soam%20fitness%2010-4.jpg?alt=media&token=8e77ec32-d95c-4678-959c-1265c4fd0934" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FCapa%20Soma%20Lingerie%20FINALpotifolio.jpg?alt=media&token=6d61787e-1b96-41f0-bc91-b1d2d1d8a309" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FTAG.jpg?alt=media&token=46f0f53a-cded-4b52-8f24-af1838605568" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2Flogo%20SUM%20ALL%20Sports.jpg?alt=media&token=6a8d1b1b-a549-4b8e-af0c-7b4021de1ef2" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FCorallus%20Copranii..jpg?alt=media&token=415904dd-7929-4b69-a175-5b33b0f4d044" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FCorallus%20Copranii.jpg?alt=media&token=337447df-53dc-4138-bf6a-992d97ecb8a3" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FFolder%20Corallus%20cropanii.jpg?alt=media&token=cae7d9a1-d71b-419d-b5bc-9ef49a2dc23a" alt="" set="" />
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-27d3f.appspot.com/o/Portifolio%20desing%2FFolder%20Verso%20Corallus%20cropanii.jpg?alt=media&token=31af9fc1-4f92-461d-a3ca-5235b22243a0" alt="" set="" />

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default ArtGallery

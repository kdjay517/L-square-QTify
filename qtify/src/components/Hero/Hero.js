import React from 'react'
import HeroImage from '../../assets/vibrating-headphone.png'
import './Hero.css'
const Hero = () => {
  return (
    <>  
        <section className="Hero">
            <div className="HeroTitle">
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img className="HeroImage" src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default Hero
// rcfe: react component function export
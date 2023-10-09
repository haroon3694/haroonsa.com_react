import React from 'react';
import "./HeroComponent.scss";

import avatar from "../../assets/anime.jpg"


const hero_content ={
    header: "I develop products that delight and inspire people",
    subtitle: "Hi! I’m Haroon, a Front-end developer based in India. I create user-friendly interfaces for fast-growing businesses.",
}



const HeroComponent = (props) => {
    
  return (
    <section id="hero">
        <div className="hero__content">
            <span className="hero__header header">
                    {hero_content.header}
            </span>
            <span className="hero__subtitle subtitle pt-3">
                {hero_content.subtitle}
            </span>
              <a className='hero__button text-center diagonal-tr-bl-out' style={{textDecoration: "none", color: "white"}} href="../../assets/Resume.pdf" target="_blank" download="Resume.pdf"> Download CV</a> 
        </div>
        <img className='hero__image' style={{filter: "grayscale(100%)"}} src={avatar} alt="" />
        {/* <iframe src='https://my.spline.design/untitled-7c461583c14e1007f06c99486b7f059c/' frameborder='0' width='100%' height='100%'></iframe> */}
        {/* <iframe src='https://my.spline.design/untitled-66e34db4fd867b894f36f2922237a107/' frameborder='0' width='100%' height='100%'></iframe> */}
    </section>
  )
}

export default HeroComponent;
import React from 'react';
import "./HeroComponent.scss";
import avatar from "../../assets/avatar.png"

const hero_content ={
    header: "I develop products that delight and inspire people",
    subtitle: "Hi! I’m Haroon, a Front-end developer based in India. I create user-friendly interfaces for fast-growing businesses.",
}



const HeroComponent = (props) => {
    console.log(props);
  return (
    <section id="hero">
        <div className="hero__content">
            <span className="hero__header header">
                    {hero_content.header}
            </span>
            <span className="hero__subtitle subtitle pt-3">
                {hero_content.subtitle}
            </span>
            <div className="hero__button btn btn-primary">
                Get in touch
            </div>
        </div>
        <img src={props.image} alt="" />
        {/* <iframe src='https://my.spline.design/untitled-7c461583c14e1007f06c99486b7f059c/' frameborder='0' width='100%' height='100%'></iframe> */}
        {/* <iframe src='https://my.spline.design/untitled-66e34db4fd867b894f36f2922237a107/' frameborder='0' width='100%' height='100%'></iframe> */}
    </section>
  )
}

export default HeroComponent;
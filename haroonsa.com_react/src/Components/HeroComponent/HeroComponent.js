import React from 'react';
import "./HeroComponent.scss";
import avatar from "../../assets/avatar.png"

const hero_content ={
    header: "I develop products that delight and inspire people",
    subtitle: "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.",
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
    </section>
  )
}

export default HeroComponent;
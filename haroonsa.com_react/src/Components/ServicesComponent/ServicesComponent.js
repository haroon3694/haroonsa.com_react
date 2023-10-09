import React from 'react';
import "./ServicesComponent.scss";
import Card from "../GenericComponents/CardComponent/CardComponent";
import BeforeAfterSlider from 'react-before-after-slider'
import uiux from "../../assets/ux.png"
import app from "../../assets/app.png"
import expect from "../../assets/expect.png"


const before = "Hey"
const after = 'https://placehold.co/600x480'

const servicesCardData = [
    {
        id:1,
        image: uiux,
        title : "What I can do for you",
        subtitle: "Faster, better products that your users love. Here's all the services I provide:",
        text:   <ul>
                    <li>Design Strategy</li>
                    <li>Web and Mobile App Design</li>
                    <li>Front-end Development</li>
                </ul>
    },
    {
        id:2,
        image: app,
        title : "Applications I'm fluent in",
        subtitle: "Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
        text:   <ul>
                    <li>HTML5,CSS3</li>
                    <li>Bootstrap,TailWind,Material</li>
                    <li>JS, React</li>
                </ul>
    },
    {
        id:3,
        image: expect,
        title : "What you can expect",
        subtitle: "I develop products that are more than pretty. I make them responsive and usable.",
        text:   <ul>
                    <li>Clean and functional</li>
                    <li>Device and user friendly</li>
                    <li>Efficient and maintainable</li>
                </ul>
    },
]




const ServicesComponent = (props) => {
  return (
    <section id="services">
         {/* <BeforeAfterSlider
        before={design}
        after={wireframe}
        width={800}
        height={800}
      /> */}
        <span className="services__header header">
            What I do
        </span>
        <span className="services__subtitle subtitle">
            Develop solutions that solves problems, one product at a time.
        </span>
        <div className="sevicesCardsContainer">
            <div className="servicesCard">
                {
                    servicesCardData.map((value)=> (
                        <Card
                        key={value.id} 
                        image={value.image} 
                        title={value.title} 
                        subtitle={value.subtitle} 
                        text={value.text}
                        // li1={value.li1} 
                        // li2={value.li2}
                        // li3={value.li3}
                        button={value.button}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServicesComponent
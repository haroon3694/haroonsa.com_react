import React from 'react';
import "./ServicesComponent.scss";
import Card from "../GenericComponents/CardComponent/CardComponent";


const servicesCardData = [
    {
        id:1,
        image: "https://placehold.co/600x400",
        title : "title1",
        subtitle: "subtitle1",
        text: "text1",
        button: "button1"
    },
    {
        id:2,
        image: "https://placehold.co/600x400",
        title : "title2",
        subtitle: "subtitle2",
        text: "text2",
        button: "button2"
    },
    {
        id:3,
        image: "https://placehold.co/600x400",
        title : "title2",
        subtitle: "subtitle2",
        text: "text2",
        button: "button2"
    },
]

const servicesData= servicesCardData.map((value)=> (
    <Card 
    key={value.id} 
    image={value.image} 
    title={value.title} 
    subtitle={value.subtitle} 
    text={value.text} 
    button={value.button}/>
))




const ServicesComponent = () => {
  return (
    <section id="services">
        <span className="services__header header">
            What I do
        </span>
        <span className="services__subtitle subtitle">
            Design that solves problems, one product at a time.
        </span>
        <div className="sevicesCardsContainer">
            <div className="servicesCard">
                {servicesData}
            </div>
        </div>
    </section>
  )
}

export default ServicesComponent
import React from 'react';
import "./PortfolioComponent.scss";
import Card from "../GenericComponents/CardComponent/CardComponent";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const portfolioCardData = [
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

const portfolioData= portfolioCardData.map((value)=> (
    <Card 
    key={value.id} 
    image={value.image} 
    title={value.title} 
    subtitle={value.subtitle} 
    text={value.text} 
    button={value.button}/>
))





const PortfolioComponent = () => {
  return (
    <section id="portfolio">
    <span className="portfolio__header header">
        I bring results. <br />
        My clients are proof.
    </span>
    <div className="portfolioCardContainer">
        <div className="portfolioCard">
           {portfolioData}
        </div>
    </div>
    <OwlCarousel className='owl-theme owl-rtl' nav center stagePadding={10}>
    <div className='item'>
        <h4>1</h4>
    </div>
    <div className='item'>
        <h4>2</h4>
    </div>
    <div className='item'>
        <h4>3</h4>
    </div>
    <div className='item'>
        <h4>4</h4>
    </div>
    <div className='item'>
        <h4>5</h4>
    </div>
    <div className='item'>
        <h4>6</h4>
    </div>
    <div className='item'>
        <h4>7</h4>
    </div>
    <div className='item'>
        <h4>8</h4>
    </div>
    <div className='item'>
        <h4>9</h4>
    </div>
    <div className='item'>
        <h4>10</h4>
    </div>
    <div className='item'>
        <h4>11</h4>
    </div>
    <div className='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
</section>
  )
}

export default PortfolioComponent
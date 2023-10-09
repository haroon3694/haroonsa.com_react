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
    },
    {
        id:2,
        image: "https://placehold.co/600x400",
        title : "title2",
        subtitle: "subtitle2",
        text: "text2",
    },
    {
        id:3,
        image: "https://placehold.co/600x400",
        title : "title3",
        subtitle: "subtitle3",
        text: "text3",
    },
]

// const portfolioData= portfolioCardData.map((value)=> (
//     <Card 
//     key={value.id} 
//     image={value.image} 
//     title={value.title} 
//     subtitle={value.subtitle} 
//     text={value.text} 
//     button={value.button}/>
// ))





const PortfolioComponent = () => {
  return (
    <section id="portfolio">
    <span className="portfolio__header header">
        I bring results. <br />
        My clients are proof.
    </span>
    <div className="portfolioCardContainer">
        <div className="portfolioCard">
        <OwlCarousel
            className='owl-theme owl-rtl' 
            nav 
            center
            autoplay={true}
            autoplayHoverPause={true}
            loop={true}
            autoplayTimeout= {1000}
             >
            {
                portfolioCardData.map((value)=> (
                    <Card 
                    key={value.id} 
                    image={value.image} 
                    title={value.title} 
                    subtitle={value.subtitle} 
                    text={value.text} 
                    button={value.button}/>
                ))
            }
        </OwlCarousel>
        </div>
    </div>
   
</section>
  )
}

export default PortfolioComponent
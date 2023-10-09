import React from 'react';
import "./PortfolioComponent.scss";
import Card from "../GenericComponents/CardComponent/CardComponent";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sos from '../../assets/brands/sos.svg';
import svs from '../../assets/brands/svs.svg';
import andal from '../../assets/brands/Andal.svg';
import bbdaily from '../../assets/brands/bbdaily.svg';
import bmg from '../../assets/brands/bmg.svg';
import firstqa from '../../assets/brands/firstqa.svg';
import gunaas from '../../assets/brands/gunaas.svg';
import intelliswift from '../../assets/brands/intelliswift.svg';

const portfolioCardData = [
    {
        id:1,
        image: bbdaily,
    },
    {
        id:2,
        image: sos,
    },
    {
        id:3,
        image: andal,
    },
    {
        id:4,
        image: bmg,
    },
    {
        id:5,
        image: firstqa,
    },
    {
        id:6,
        image: gunaas,
    },
    {
        id:7,
        image: intelliswift,
    },
    {
        id:8,
        image: svs,
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

const options ={
    autoplay: true ,
    mergeFit: true ,
    center: true ,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:5,
            loop:true
        }
    }
}





const PortfolioComponent = () => {
  return (
    <section id="portfolio">
    <span 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" 
        className="portfolio__header header">
        I bring results. <br />
        My clients are proof.
    </span>
    <div className="portfolioCardContainer">
        <div className="portfolioCard">
        <OwlCarousel className='owl-theme owl-rtl' {...options}>
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
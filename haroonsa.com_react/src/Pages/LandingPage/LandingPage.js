import React from 'react'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent';
import PortfolioComponent from '../../Components/PortfolioComponent/PortfolioComponent';

const LandingPage = (props) => {
  return (
    <>
    <HeroComponent {...props}/>
    <ServicesComponent />
    <PortfolioComponent />
    </>
    
  )
}

export default LandingPage
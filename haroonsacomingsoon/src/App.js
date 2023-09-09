import React from 'react';
import "./App.css"
import Navbar from "./Components/NavbarComponent/Navbar"
import HeroComponent from './Components/HeroComponent/HeroComponent';
import ServicesComponent from './Components/ServicesComponent/ServicesComponent';
import PortfolioComponent from './Components/PortfolioComponent/PortfolioComponent';

const placeholderProps ={
  image: "https://placehold.co/600x400",
  text: "text",
  logo: "../../assets/avatar.png"
}



const App = () => {
  return (
    <>
        <Navbar />
        <HeroComponent {...placeholderProps}/>
        <ServicesComponent />
        <PortfolioComponent />
    </>

  )
}

export default App

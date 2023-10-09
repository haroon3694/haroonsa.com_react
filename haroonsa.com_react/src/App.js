import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarComponent/Navbar"
import FooterComponent from './Components/FooterComponent/FooterComponent';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';

const placeholderProps ={
  image: "https://placehold.co/600x400",
  text: "text",
  logo: "../../assets/avatar.png"
}




const App = () => {
  return (
    <>
        <Navbar />
        <Router>
          <React.Suspense>
            <Routes>
              <Route path='/' element={<LandingPage  {...placeholderProps} />} />
              <Route path='contactus' element={<ContactUsPage />} />
              <Route path="*" element={"Page not Found"} />
            </Routes>
          </React.Suspense>
        </Router>
        <FooterComponent />
    </>

  )
}

export default App

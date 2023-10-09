import React from 'react'
import './FooterComponent.scss'
import git from "../../assets/git.svg"
import linkedin from "../../assets/linkedin.png"


const FooterComponent = () => {
  return (
    <section id='footer'>
        <div className="container-fluid">
            <div className="row">
                <div className="col py-3 text-center">
                  <div className='d-flex flex-row justify-content-center gap-3'>
                    <a href="https://github.com/haroon3694"><img src={git} className='' style={{width: "40px"}} alt=""/></a>  
                    <img src={linkedin} className='img-fluid' style={{width: "40px", background: "black"}} alt=""/> 
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterComponent
import React from 'react'
import './FooterComponent.scss'
import logo from "../../assets/logo.png"

const FooterComponent = () => {
  return (
    <section id='footer'>
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <img src={logo} className='' style={{width: "60px"}} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterComponent
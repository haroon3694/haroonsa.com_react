import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logo from "../../assets/logo.png"
import ExampleDoc from '../../assets/Resume.pdf'

const NavbarComponent = (args) =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar__sticky">
      <Navbar {...args}>
        <NavbarBrand className='text-center mx-auto' href="/"><img src={logo} width="60px" alt="" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink target='_blank' href={ExampleDoc}>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/haroon3694">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
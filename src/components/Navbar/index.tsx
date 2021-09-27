import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElement';
import Logo from '../../images/Logo.svg'

interface NavProps {
  toggle: () => void;
}

const Navbar: React.FC<NavProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="">
            <img src={Logo} alt="Sparkbox_Logo_image" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-80}
                // offset={-80}
                >Cursos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover"
              smooth={true}
              duration={500}
              activeClass="active"
              offset={-80}
              spy={true}>Sobre Nós</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="services"
                smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
                >Como Funciona</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signup" colored={true}>Criar Conta</NavBtnLink>
            <NavBtnLink to="/signup" colored={false}>Entrar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
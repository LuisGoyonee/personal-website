import React, { useState, useEffect } from "react";
import myImage from "../../images/TempLogo2.png";
import { FaBars } from "react-icons/fa";
import ".//styles.css";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  HamburgerIcon,
  Nav,
  NavbarContainer,
  NavbarLogo,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ toggleSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavbarLogo to="/" onClick={toggleHome}>
              <img src={myImage} alt="logo" className="logo" />
              LuisGoyone
            </NavbarLogo>
            <HamburgerIcon onClick={toggleSidebar}>
              <FaBars size={28} />
            </HamburgerIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

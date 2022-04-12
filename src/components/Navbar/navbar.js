import React from "react";
import myImage from "../../images/TempLogo2.png";
import { FaBars } from "react-icons/fa";
import ".//styles.css";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <img src={myImage} alt="logo" className="logo" />
            LuisGoyone
          </NavbarLogo>
          <HamburgerIcon onClick={toggleSidebar}>
            <FaBars size={28} />
          </HamburgerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

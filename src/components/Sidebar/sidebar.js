import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggleSidebar}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleSidebar}>
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

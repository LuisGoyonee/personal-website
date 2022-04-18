import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import About from "../../sections/about/about";
import { homeObjOne } from "../../sections/about/Data";
import Home from "../../sections/home/home";
import Projects from "../../sections/projects/projects";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Home />
      <About {...homeObjOne} />
      <Projects />
      <Footer />
    </>
  );
};

export default MainPage;

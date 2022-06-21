import React from "react";
import Notedt from "../../images/notedt.png";
import Web from "../../images/mywebsite.png";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsIcon,
  ProjectsP,
  ProjectsWrapper,
} from "./ProjectElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Notedt} />
          <ProjectsH2>Notedt</ProjectsH2>
          <ProjectsP>
            A website application that allows you to track your expenses. This
            website was built using HTML, CSS, and ReactJS.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Web} />
          <ProjectsH2>Personal Website</ProjectsH2>
          <ProjectsP>
            A website application that allows you to track your expenses. This
            website was built using HTML, CSS, and ReactJS.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

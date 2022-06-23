import React from "react";
import { Button } from "../../components/Button/ButtonElement";

import {
  AboutContainer,
  AboutMe,
  AboutMeRows,
  AboutWrapper,
  Img,
  ImgWrap,
  SubTitle,
  TextWrapper,
  TopLine,
  BtnWrap,
  BtnContainer,
  AboutSubContainer,
} from "./AboutElements";

const AboutPartTwo = ({
  id,
  lightBg,
  column,
  lightText,
  darkText,
  img,
  alt,
  primary,
  dark,
  buttonLabel,
  spacing,
  personalInfo,
  personalInfoDescription,
  theGoal,
  theGoalDescription,
  skillSet,
  skillSetDescription,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id} spacing={spacing}>
        <AboutSubContainer>
          <AboutWrapper column={column} spacing={spacing}>
            <AboutMeRows>
              <AboutMe>
                <TextWrapper>
                  <TopLine column={column}>{personalInfo}</TopLine>
                  <SubTitle darkText={darkText}>
                    {personalInfoDescription}
                  </SubTitle>
                </TextWrapper>
              </AboutMe>
              <AboutMe>
                <TextWrapper>
                  <TopLine column={column}>{theGoal}</TopLine>
                  <SubTitle darkText={darkText}>{theGoalDescription}</SubTitle>
                </TextWrapper>
              </AboutMe>
              <AboutMe>
                <TextWrapper>
                  <TopLine column={column}>{skillSet}</TopLine>
                  <SubTitle darkText={darkText}>{skillSetDescription}</SubTitle>
                  <ImgWrap>
                    <Img src={img} alt={alt} />
                  </ImgWrap>
                </TextWrapper>
              </AboutMe>
            </AboutMeRows>
          </AboutWrapper>
          <BtnContainer>
            <BtnWrap>
              <Button
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
              >
                {buttonLabel}
              </Button>
            </BtnWrap>
          </BtnContainer>
        </AboutSubContainer>
      </AboutContainer>
    </>
  );
};

export default AboutPartTwo;

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
  content,
  img,
  primary,
  dark,
  buttonLabel,
  spacing,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id} spacing={spacing}>
        <AboutSubContainer>
          <AboutWrapper column={column} spacing={spacing}>
            <AboutMeRows>
              {content.map((item, index) => {
                const { topLine, description, img } = item;
                return (
                  <>
                    <AboutMe>
                      <TextWrapper>
                        <TopLine column={column}>{topLine}</TopLine>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                      </TextWrapper>
                    </AboutMe>
                  </>
                );
              })}
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

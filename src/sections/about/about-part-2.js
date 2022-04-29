import React from "react";

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
} from "./AboutElements";

const AboutPartTwo = ({
  id,
  lightBg,
  column,
  lightText,
  darkText,
  content,
  img,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper column={column}>
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
      </AboutContainer>
    </>
  );
};

export default AboutPartTwo;

import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 0.5px;
  height: ${({ spacing }) => (spacing ? "100vh" : "")};
  width: ${({ spacing }) => (spacing ? "100%" : "")};
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (min-width: 320px) {
    height: 130vh;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`;

export const AboutWrapper = styled.div`
  display: ${({ column }) => (column ? "flex" : "grid")};
  z-index: 1;
  height: ${({ spacing }) => (spacing ? "" : "100vh")};
  width: ${({ spacing }) => (spacing ? "" : "100%")};
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export const AboutSubContainer = styled.div`
  display: inline-block;
  padding-top: 5rem;
  width: 100%;

  @media screen and (min-width: 320px) {
    padding-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    padding-top: 5rem;
  }
`;
export const AboutRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 425px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : ` 'col2 col2' 'col1 col1'`};
  }
`;

export const AboutMeRows = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 425px) {
    padding: 0 10px;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
`;
export const AboutMe = styled.div`
  margin-bottom: 15px;
  display: flex;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: ${({ column }) => (column ? "48px" : "16px")};
  line-height: 100%;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (min-width: 320px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (min-width: 320px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  @media screen and (min-width: 320px) {
    line-height: 20px;
    font-size: 12px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    line-height: 20px;
    font-size: 16px;
  }
  @media screen and (min-width: 1024px) {
    line-height: 20px;
    font-size: 18px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

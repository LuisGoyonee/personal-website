import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin-top: 0.5px;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (min-width: 320px) {
    height: 120vh;
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const ProjectsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (min-width: 320px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: auto;
  width: 80%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
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

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;

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

export const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
`;

import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../../components/Button/ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  HomeBackground,
  HomeButtonWrapper,
  HomeContainer,
  HomeContent,
  HomeH1,
  HomeP,
  VideoBackground,
} from "./HomeElements";

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HomeContainer id="home">
        <HomeBackground>
          <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        </HomeBackground>
        <HomeContent>
          <HomeH1>Hello there, Welcome!</HomeH1>
          <HomeP>
            This is my personal website where you will get to know me and what I
            do
          </HomeP>
          <HomeButtonWrapper>
            <Button
              to="about"
              smooth="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeButtonWrapper>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default Home;

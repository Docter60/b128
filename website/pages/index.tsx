import React, { useEffect } from "react";
import AOS from "aos";
import { ProjectCardDeck } from "components/ProjectCardDeck";
import { MainPageHeader } from "components/MainPageHeader";
import { Jumbotron } from "components/Jumbotron";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <MainPageHeader />
      <Jumbotron data-aos="fade-up" data-aos-delay={0} data-aos-duration={1000}>
        <h1>Welcome to b128</h1>
        <p>This is the home of my various code projects and writings</p>
      </Jumbotron>
      <ProjectCardDeck />
    </div>
  );
};

export default Home;

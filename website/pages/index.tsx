import React, { useEffect } from "react";
import AOS from "aos";
import { ProjectCardDeck } from "components/ProjectCardDeck";
import styles from "./index.module.css";
import { MainPageHeader } from "components/MainPageHeader";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <MainPageHeader />
      <div
        className={styles.jumbotron + " bg-light p-5 rounded-lg my-3"}
        data-aos="fade-up"
        data-aos-delay={0}
        data-aos-duration={1000}
      >
        <h1>Oh, hello</h1>
        <p>This is the home of my various app development projects</p>
      </div>
      <ProjectCardDeck />
    </div>
  );
}

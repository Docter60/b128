import React from "react";
import { ProjectCard } from "components/ProjectCard";
import styles from "./ProjectCardDeck.module.css";
import { Jumbotron } from "components/Jumbotron";

export const ProjectCardDeck = () => {
  return (
    <div>
      <Jumbotron
        className={styles.jumbotron}
        data-aos="fade-up"
        data-aos-delay={250}
        data-aos-duration={1500}
      >
        <h2>Projects</h2>
      </Jumbotron>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "-7rem 0rem",
        }}
      >
        <ProjectCard
          desc="Moderator Influence Analyzer"
          imglink="/sample.jpeg"
          link="/project/mia"
          title="MIA"
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

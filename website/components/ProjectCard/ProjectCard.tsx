import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./ProjectCard.module.css";

interface Props {
  link?: string;
  title?: string;
  desc?: string;
  imglink?: string;
}

export function ProjectCard(props: Props) {
  const [duration, setDuration] = useState(1000);
  useEffect(() => {
    setDuration(1000 + 200 * Math.round(Math.random() * 10));
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay={250} data-aos-duration={duration}>
      <Card
        as="a"
        bg="dark"
        text="white"
        href={props.link ? props.link : "/"}
        className={styles.bcard}
      >
        <Card.Img
          variant="top"
          src={props.imglink ? props.imglink : "/q.gif"}
        />
        <Card.Body>
          <Card.Title>{props.title ? props.title : "TBD"}</Card.Title>
          <Card.Text>
            {props.desc ? props.desc : "Placeholder for non-existent projects"}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

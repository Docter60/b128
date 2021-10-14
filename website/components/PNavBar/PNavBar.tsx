import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./PNavBar.module.css";

export interface Props {
  name?: string;
  nameColor?: string;
  nameShadow?: string;
}

export function PNavBar(props: Props) {
  const projectPath = "/project/" + props.name.toLowerCase();
  const style = {
    color: props.nameColor ? props.nameColor : "rgb(58, 58, 158)",
    textShadow: props.nameShadow
      ? props.nameShadow
      : "0 0 5px rgb(58, 58, 158)",
      marginLeft: 30
  };
  return (
    <Navbar
      variant="dark"
      className={styles.pnavbar}
      data-aos="fade-down"
      data-aos-duration="500"
      style={{ zIndex: 2 }}
    >
      <Navbar.Brand href={projectPath} style={style}>
        {props.name ? props.name : "App"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href={projectPath} className={styles.pnav}>
            App
          </Nav.Link>
          <Nav.Link href={projectPath + "/about"} className={styles.pnav}>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

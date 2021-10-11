import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import styles from "./BNavBar.module.css";

export const BNavBar: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: 3 }}>
    <Navbar.Brand href="/">b128</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/" className={styles.bnav}>
          Home
        </Nav.Link>
        <Nav.Link href="/projects" className={styles.bnav}>
          Projects
        </Nav.Link>
        <Nav.Link href="/about" className={styles.bnav}>
          About
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
    <Form>
        <FormControl
          type="text"
          placeholder="Search"
          className={styles.bformcontrol + " mr-sm-2"}
        />
      </Form>
    <Form>
    <Button variant="outline-light">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>
);

// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;

// AboutCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Gotpagar</span> from <span className="purple">Pune, India.</span>
            <br />
            I’m a passionate Game Designer with expertise in Unity and Unreal Engine.
            <br />
            Skilled in 3D modelling (Maya) and texturing with Substance Painter. I also create engaging UI/UX designs for intuitive player experiences.
            <br />
            Proficient in video editing with After Effects and Premiere Pro. I love playing games, designing creative ideas, and travelling.
          </p>
          <br />
          <p>
            Apart from designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Make Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Design is not just how it looks and feels, but how it works"
          </p>
          <footer className="blockquote-footer">Rohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// Particle.js (placeholder)
import React from "react";

function Particle() {
  return <div>{/* Particle background or animation */}</div>;
}

export default Particle;

// Github.js (placeholder)
import React from "react";

function Github() {
  return <div>{/* GitHub info or stats */}</div>;
}

export default Github;

// Techstack.js (placeholder)
import React from "react";

function Techstack() {
  return <div>{/* Skill icons or list */}</div>;
}

export default Techstack;

// Toolstack.js (placeholder)
import React from "react";

function Toolstack() {
  return <div>{/* Tools icons or list */}</div>;
}

export default Toolstack;

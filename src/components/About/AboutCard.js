import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohan Gotpagar </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I’m a passionate Game Designer with expertise in Unity and Unreal Engine.
            <br />
            Skilled in 3D modelling (Maya) and texturing with Substance Painter.
            I also create engaging UI/UX designs for intuitive player experiences.
            Proficient in video editing with After Effects and Premiere Pro.
            I love playing games, designing creative ideas, and travelling.
            <br />
            <br />
            Apart from desiging, some other activities that I love to do!
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
            "Design is not just how it looks and feels, but how it works!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

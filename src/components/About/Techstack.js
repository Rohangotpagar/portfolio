import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUnity,
  SiUnrealengine,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <RiNotionFill />
      </Col>
    </Row>
  );
}

export default Techstack;
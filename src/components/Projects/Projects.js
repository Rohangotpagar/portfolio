import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeStrike - Python Practice Adventure Game"
              description="Code Strike is a high-action coding game where you fight, hack, and race through missions. Solve puzzles, battle enemies, and master real Python coding and AI skills — all while surviving intense combat, shooting sequences, and thrilling adventure."
              demoLink="https://store.steampowered.com/app/3444170/CodeStrike__Python_Practice_Adventure_Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}      
              isBlog={false}
              title="Assassin's Creed game environment"
              description="Remastered an Assassin’s Creed environment using Maya for 3D modeling, Substance Painter for textures, and Unreal Engine 5 for realistic visuals. This project, inspired by the iconic game, won me the Student of the Month award for excellence in game art."
              demoLink="https://www.youtube.com/watch?v=araogDyGxko"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mystical Environment"
              description="Crafted “Mahadev’s Mystical Environment” using Unreal Engine and Maya 3D, blending technical expertise and creativity. The project evokes mysticism and showcases seamless integration of industry-standard tools to create a visually immersive environment inspired by Mahadev’s legendary aura."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.youtube.com/watch?v=1cgsVqkmXtk"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Reflex Duel"
              description="Reflex Duel is a fast-paced 2D game that tests your precision and timing skills. You play as a lone warrior facing off against a  AI opponent. The objective is simple: press the spacebar at the right moment to strike your enemy. But be warned—press too early, and you’ll miss, leaving yourself vulnerable to the AI’s deadly counterattack."
              demoLink="https://rohangot.itch.io/reflex-duel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Interior design"
              description="This concisely communicates the tools and workflow you used—3D modeling in Autodesk Maya and rendering in Unreal Engine—to achieve the final interior visualization. The project presentation is clean and visually appealing, ideal for a portfolio or gallery."
              
              demoLink="https://rohangotpagar.artstation.com/projects/OGlVKb"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

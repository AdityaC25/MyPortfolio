import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import blog from "../../Assets/Projects/blog.jpeg";

import quote from "../../Assets/Projects/quote.jpeg";

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
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="A blog is a type of website or online platform where individuals or groups regularly post content in the form of articles, posts, or entries. These entries are typically displayed in reverse chronological order, with the most recent content appearing at the top."
              ghLink="https://github.com/AdityaC25/BLOG_APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Inspirational Quote chrome Extention"
              description="An inspirational quote chrome extention than generate random inspirational quote that always keeps you confident and motivated.With this extension, you can get a quick and inspirational quote as fast possible by clicking the Quotes icon in your browser."
              ghLink="https://github.com/AdityaC25/QUOTE_EXTENTION"
              
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

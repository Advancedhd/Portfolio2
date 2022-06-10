import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProjectCards() {
  return (
    <>
      <h1 className="projects__title">Projects</h1>
      <Container className="projects__container">
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/JSFCA.png" />
              <Card.Body>
                <Card.Title>Javascript Frameworks</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Advancedhd"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  className="site__button"
                  variant="primary"
                  href="https://dazzling-dango-a74766.netlify.app"
                  target="_blank"
                >
                  Site
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/NordicShoeStore.png" />
              <Card.Body>
                <Card.Title>NordicShoeStore</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Advancedhd/nordic-shoe-store"
                  target="_blank"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "450px" }}>
              <Card.Img variant="top" src="/Holidaze.png" />
              <Card.Body>
                <Card.Title>Holidaze</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Noroff-FEU-Assignments/project-exam-2-Advancedhd"
                  target="_blank"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCards;

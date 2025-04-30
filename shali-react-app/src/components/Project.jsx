import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.css";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";

import Projectpop from './Projectpop.jsx';

function Project({ myProject }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={myProject.screenshot} />
        <Card.Body>
          <Card.Title>{myProject.name}</Card.Title>
          {myProject.techs.map((tech) => {
            switch (tech) {
              case "css":
                return (
                  <Button variant="outline-primary mx-1" size="sm">
                    css
                  </Button>
                );
                break;
              case "html":
                return (
                  <Button variant="outline-secondary mx-1" size="sm">
                    html
                  </Button>
                );
                break;
              case "js":
                return (
                  <Button variant="outline-success mx-1" size="sm">
                    js
                  </Button>
                );
                break;
              case "graphics":
                return (
                  <Button variant="outline-warning mx-1" size="sm">
                    graphics
                  </Button>
                );
                break;
            }
          })}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{myProject.about}</ListGroup.Item>
          <ListGroup.Item>
            <Projectpop myProject={myProject} />
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          Source Code:{" "}
          <Card.Link href={myProject.giturl}>Github Repo</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Project;

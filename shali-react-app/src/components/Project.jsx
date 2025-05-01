import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.css";
import {Container, Row, Col, Card, ListGroup, Button, Modal } from "react-bootstrap";

import Projectpop from './Projectpop.jsx';

function Project({ myProject }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={myProject.screenshot} />
        <Card.Body>
          <Card.Title>{myProject.name}</Card.Title>
          <span>{myProject.shortdesc}</span>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Projectpop myProject={myProject} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    // </div>
  )
}
export default Project;

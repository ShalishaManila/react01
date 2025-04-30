import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.css";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";

function Projectpop({myProject}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button
              variant="outline-info"
              onClick={handleShow}
              id={`openModalButton${myProject.id}`}
            >
              More about this project
            </Button>
      {/* Modal Component */}
      <Modal show={show} onHide={handleClose} id={`myModal${myProject.id}`}>
        <Modal.Header closeButton>
          <Modal.Title>{myProject.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
            <Card.Img variant="top" src={myProject.screenshot} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>About this Project: </strong>
              {myProject.about}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Techs Used: </strong>
              {myProject.techs.map((tech) => {
                return <span className="mx-1">{tech} </span>;
              })}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Github URL: </strong>
              <Card.Link href={myProject.giturl}>Github Repo</Card.Link>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Projectpop;

import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.css";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";

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
            <div
              className="modal show"
              style={{ display: "block", position: "initial" }}
            >
              {/* Button to trigger the modal */}
              <Button
                variant="outline-info"
                onClick={handleShow}
                id={`openModalButton${myProject.id}`}
              >
                More about this project
              </Button>

              {/* Modal Component */}
              <Modal
                show={show}
                onHide={handleClose}
                id={`myModal${myProject.id}`}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{myProject.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
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
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          Source Code:{" "}
          <Card.Link href={myProject.giturl}>Github Repo</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Project;

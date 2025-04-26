import { useState } from "react";

import svgproject from './assets/images/svg-project.jpg';
import bootstrapproject from './assets/images/bootstrap-project.jpg';
import groupproject from './assets/images/group-project.jpg';

import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Card >
          <Card.Img variant="top" src={svgproject} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

        <Card >
          <Card.Img variant="top" src={bootstrapproject} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

        <Card >
          <Card.Img variant="top" src={groupproject} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="card text-center">
        <div className="overflow">
          <img className="card-img-top" src={svgproject} alt="SVG Project Screenshot" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">SVG Project</h4>
          <p className="card-text text-secondary">
            asdfa asdfasdf
          </p>
          <a href="#" className="btn btn-outline-success">Link to Github</a>
        </div>
      </div>
    </>
  );
}

export default App;

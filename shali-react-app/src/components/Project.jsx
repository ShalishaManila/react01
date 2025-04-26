import { useState } from "react";

import svgproject from "../assets/images/svg-project.jpg";
import bootstrapproject from "../assets/images/bootstrap-project.jpg";
import groupproject from "../assets/images/group-project.jpg";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

import "../styles/project.css";

export default function Project({ myProject }) {
  return (
    <Card>
      <Card.Img variant="top" src={myProject.screenshot}  />
      <Card.Body>
        <Card.Title>{myProject.name}</Card.Title>
        {myProject.techs.map((tech) => {
          switch (tech) {
            case "css":
              return <Button variant="outline-primary mx-1" size="sm">css</Button>
              break;
            case "html":
              return <Button variant="outline-secondary mx-1" size="sm">html</Button>
              break;
            case "js":
              return <Button variant="outline-success mx-1" size="sm">js</Button>
              break;
            case "graphics":
              return <Button variant="outline-warning mx-1" size="sm">graphics</Button>
              break;
          }
        })}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{myProject.about}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={myProject.giturl}>Github Repo</Card.Link>
      </Card.Body>
    </Card>
  );
}

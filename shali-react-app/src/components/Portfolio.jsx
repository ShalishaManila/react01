import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Projects from "./Projects.jsx";

function Portfolio() {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(true);
  function toggleDisplay(e) {
    if (display) {
      setDisplay(false);
      setShow(true);
    } else {
      setDisplay(true);
      setShow(false);
    }
  }
  return (
    <>
      <div className="text-center m-3">
        <Button variant="secondary" size="lg" onClick={(e) => toggleDisplay(e)}>
          {show ? "+ " : "- "} My Projects
        </Button>
      </div>
      {display ? <Projects /> : ""}
    </>
  )
}
export default Portfolio;

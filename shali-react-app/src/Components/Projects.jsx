import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { myProjects } from "./variables.js";
import Project from "./Project.jsx";

function Projects() {
  const [query, setQuery] = useState("");
  const [filteredProjects, setfilteredProjects] = useState(myProjects);

  const handleSearch = (searchString) => {
    setQuery(searchString);
    if (searchString.length > 0) {
      setfilteredProjects(
        myProjects.filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchString.toLowerCase())
          )
        )
      );
    } else {
      setfilteredProjects(myProjects);
    }
  };
  return (
    <>
      <div className="text-center">
        {/* <h1 className="fw-bold text-secondary">My Projects!!!</h1> */}
        <Form className="d-flex justify-content-center align-items-center m-3">
          <FormControl
            type="text"
            placeholder="Search for any keyword (html, css, fun etc)"
            className="mr-sm-2 w-50"
            value={query}
            // onChange={(e) => setQuery(e.target.value)}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Form>
        <Container>
          <Row>
            {filteredProjects.length == 0 ? (
              <h4 className="text-secondary">Nothing Found</h4>
            ) : (
              <>
                <h4 className="text-secondary">
                  {filteredProjects.length} Projects
                </h4>
                {filteredProjects.map((myProject) => (
                  <Col key={myProject.id} md={4} className="mb-4">
                    <Project key={myProject.id} myProject={myProject} />
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Container>
        {/* <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {filteredProjects.map((myProject) => (
              <Project key={myProject.id} myProject={myProject} />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
export default Projects;

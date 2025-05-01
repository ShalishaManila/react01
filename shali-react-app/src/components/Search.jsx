import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { myProjects, testvar } from "./variables.js";

import Project from "./Project.jsx";

function Search() {
  const [query, setQuery] = useState("");
  const [filteredProjects, setfilteredProjects] = useState([]);

  const handleSearch = (searchString) => {
    setQuery(searchString);
    if (searchString.length > 0) {
      setfilteredProjects(myProjects.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchString.toLowerCase())
        )
      ));
    }else{
        setfilteredProjects([]);
    }
  };

  return (
    <>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={query}
          // onChange={(e) => setQuery(e.target.value)}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form>
      <div className="text-center">
        <h1 className="fw-bold text-secondary">My Projects!!!</h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {filteredProjects.map((myProject) => (
              <Project key={myProject.id} myProject={myProject} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;

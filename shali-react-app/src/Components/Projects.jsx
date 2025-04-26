import { useState } from "react";

import svgproject from "../assets/images/svg-project.jpg";
import bootstrapproject from "../assets/images/bootstrap-project.jpg";
import groupproject from "../assets/images/group-project.jpg";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project.jsx";

function Projects() {
  const myProjects = [
    {
      name: "SVG",
      techs: ["css", "html", "graphics"],
      screenshot: svgproject,
      about:
        "This project helped to understand graphics and it was challenging initially to disign some of the basic shapes.",
      giturl: "https://github.com/ShalishaManila/ITTFW6",
    },
    {
      name: "Bootstrap",
      techs: ["css", "html", "js", "graphics"],
      screenshot: bootstrapproject,
      about:
        "It was fun learning Bootstrap as it simplified css coding. It was fun creating navbar, buttons and cards with ease and also responsive.",
      giturl: "https://github.com/ShalishaManila/ITTFW11",
    },
    {
      name: "Group Project",
      techs: ["css", "html", "graphics"],
      screenshot: groupproject,
      about:
        "This was my frist group project. My role was to create Gallery for the Spa website. Finding the right layout, animations and images was challenging to learn.",
      giturl: "https://github.com/berriestrawberrie/Group-Project-Spa-Website",
    },
  ];
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {myProjects.map((myProject) => (
          <div className="col-md-4">
            <Project key={myProject.name} myProject={myProject} />
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
export default Projects;

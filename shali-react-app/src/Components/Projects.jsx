import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import svgproject from "../assets/images/svg-project.jpg";
import bootstrapproject from "../assets/images/bootstrap-project.jpg";
import groupproject from "../assets/images/group-project.jpg";

import Project from "./Project.jsx";

function Projects() {
  const myProjects = [
    {
      id:1,
      name: "SVG",
      techs: ["css", "html", "graphics"],
      screenshot: svgproject,
      about:
        "This project helped to understand graphics and it was challenging initially to disign some of the basic shapes.",
      giturl: "https://github.com/ShalishaManila/ITTFW6",
    },
    {
      id:2,
      name: "Bootstrap",
      techs: ["css", "html", "js", "graphics"],
      screenshot: bootstrapproject,
      about:
        "It was fun learning Bootstrap as it simplified css coding. It was fun creating navbar, buttons and cards with ease and also responsive.",
      giturl: "https://github.com/ShalishaManila/ITTFW11",
    },
    {
      id:3,
      name: "Group Project",
      techs: ["css", "html", "graphics"],
      screenshot: groupproject,
      about:
        "This was my frist group project. My role was to create Gallery for the Spa website. Finding the right layout, animations and images was challenging to learn.",
      giturl: "https://github.com/berriestrawberrie/Group-Project-Spa-Website",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold text-secondary">Some of my Projects!!!</h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {myProjects.map((myProject) => (
              <Project key={myProject.name} myProject={myProject} />
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;

import { useState } from "react";
import Project from "./Project.jsx";

import { myProjects, testvar } from "./variables.js";
export default function Test() {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            This is a simple card with an image thumbnail, title, and description.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    );
}

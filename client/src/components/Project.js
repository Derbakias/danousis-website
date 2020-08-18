import React from "react";

function Project(props) {
  const { title, desc, tech, link } = props.project;
  return (
    <div className="project">
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <p className="tech">{tech}</p>
      <p>
        Live Demo:{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
    </div>
  );
}

export default Project;

// import React from 'react';
import Project from '../Project/project';
import projects from '../../data/projects';
const Portfolio = () => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          {project.liveLink ? (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} />
            </a>
          ) : (
            <img src={project.imageUrl} alt={project.title} />
          )}
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
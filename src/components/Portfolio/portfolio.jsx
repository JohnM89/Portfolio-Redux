// import { Routes, Route } from 'react-router-dom';
import Project from '../Project/project';

const projects = [
  // Array of project data
];

function Portfolio() {
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Portfolio;
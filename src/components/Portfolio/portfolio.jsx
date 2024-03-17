// import { Routes, Route } from 'react-router-dom';
import Project from '../Project/project';
import React from 'react';

const projects = [
  // Array of project data
];

const Portfolio = () => {
  return (
    <div>
      {/* Removed mouse animation related code */}
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;

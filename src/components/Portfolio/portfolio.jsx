import { Routes, Route } from 'react-router-dom';
import Project from '../Project/project';

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>Portfolio section.</p>
       <Routes>
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}


export default Portfolio;

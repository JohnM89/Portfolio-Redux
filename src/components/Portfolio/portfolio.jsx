import Project from '../Project/project';
import projects from '../../data/projects';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  useEffect(() => {
    // padding at the start to allow scrolling to the first project
    gsap.set('.portfolio', { paddingTop: '100vh' });
    ScrollTrigger.refresh();

    projects.forEach((project, index) => {
      const projectClass = `.project-${index}`;

      // entry and exit animations for each project
      gsap.fromTo(
        projectClass,
        {
          autoAlpha: 0,
          x: () => (index % 2 === 0 ? '-100%' : '100%'), // entry direction
        },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectClass,
            start: "top center+=100", // start point for animation
            end: "bottom top-=100", // end point for animation
            toggleActions: "play none none reverse",
            markers: false, 
            onLeave: () => gsap.to(projectClass, {
              duration: 1,
              autoAlpha: 0,
              x: () => (Math.random() < 0.5 ? '-100%' : '100%'),
              scale: 0.5
            }),
            onEnterBack: () => gsap.fromTo(projectClass, {
              autoAlpha: 0,
              scale: 0.5,
              x: () => (Math.random() < 0.5 ? '-100%' : '100%'), 
            }, {
              duration: 1,
              autoAlpha: 1,
              x: 0,
              scale: 1
            }),
          },
        }
      );
    });
  }, []);

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <div key={project.id} className={`project project-${index}`}>
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

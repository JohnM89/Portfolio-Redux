import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '../Project/project';
import projects from '../../data/projects';
// import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { Button, Toolbar, Window, WindowContent, WindowHeader} from 'react95';
import styled from 'styled-components';

import './portfolio.scss';

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  padding: 5rem;
  // background: ${({ theme }) => theme.desktopBackground};
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

const Portfolio = () => {
  // const [letterClass,] = useState('text-animate');

  useEffect(() => {
    gsap.set('.portfolio', { paddingTop: '80%' });
    ScrollTrigger.refresh();

    projects.forEach((project, index) => {
      const projectClass = `.project-${index}`;

      gsap.fromTo(
        projectClass,
        { autoAlpha: 0, x: () => (index % 2 === 0 ? '-100%' : '100%') },
        {
          duration: 2,
          autoAlpha: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectClass,
            start: "top center+=100",
            end: "bottom top-=100",
            toggleActions: "play none none reverse",
            markers: false,
            onLeave: () => gsap.to(projectClass, {
              duration: 3,
              autoAlpha: 0,
              scale: 0.5
            }),
            onEnterBack: () => gsap.fromTo(projectClass, {
              autoAlpha: 0,
              scale: 0.5,
            }, {
              duration: 2,
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
      {/* <h1 className="animated">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']}
          idx={15}
        />
      </h1> */}
      {projects.map((project, index) => (
        <Wrapper key={project.id}>
          <Window className={`project project-${index}`} style={{ width: 'auto', margin: '20px' }}>
            <WindowHeader className="window-title">
              <span>{project.title}</span>
              <Button>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button variant='menu' size='sm'>File</Button>
              <Button variant='menu' size='sm'>Edit</Button>
              <Button variant='menu' size='sm' disabled>Save</Button>
            </Toolbar>
            <WindowContent>
              {project.liveLink ? (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </a>
              ) : (
                <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
              )}
              <Project {...project} />
            </WindowContent>
          </Window>
        </Wrapper>
      ))}
    </div>
  );
};

export default Portfolio;

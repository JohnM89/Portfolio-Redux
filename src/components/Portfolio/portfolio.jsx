import { useEffect, useRef, useState  } from 'react';
// import * as THREE from 'three'
import PropTypes from 'prop-types';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '../Project/project';
import projects from '../../data/projects';
// import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { Button, Toolbar, Window, WindowContent, WindowHeader} from 'react95';
import styled from 'styled-components';
// import { Canvas, useFrame, useThree } from '@react-three/fiber'

// import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'


import './portfolio.scss';

gsap.registerPlugin(ScrollTrigger);

// const StyledPage = styled.div`
//   width: 100%;
//   height: 100vh; // Set to the height that fits your design
//   display: flex;
//   align-items: center;
//   justify-content: center;

// `;

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

// const Item = ({ url, scale, ...props }) => {
//   const visible = useRef(false);
//   const [hovered, hover] = useState(false);
//   const ref = useIntersect((isVisible) => (visible.current = isVisible));
//   const { height } = useThree((state) => state.viewport);


//   useFrame((state, delta) => {
//     ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta);
//     ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta);
//     ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta);
//   });

//   return (
//     <group {...props}>
//       <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
//     </group>
//   );
// };


// const computeScale = (scale, w) => scale.map(s => s * w);
// const computePosition = (position, w, h) => [position[0] * w, position[1] * h, position[2]];
// const Items = () => {
//     const { width: w, height: h } = useThree((state) => state.viewport);
//     return (
//         <Scroll>
//             {projects.map((project, index) => (
//                 <Item
//                     key={project.id}
//                     url={project.imageUrl}
//                     scale={computeScale(project.scale, w )} // Simplified scale computation
//                     position={computePosition(project.position, w, h)} // Simplified position computation
//                 />
//             ))}
//         </Scroll>
//     );
// };

const Portfolio = () => {
  // const [letterClass,] = useState('text-animate');

  useEffect(() => {
    gsap.set('.portfolio', { paddingTop: '0%' });
    ScrollTrigger.refresh();

    projects.forEach((project, index) => {
      const projectClass = `.project-${index}`;

      gsap.fromTo(
        projectClass,
        { autoAlpha: 0, x: () => (index % 2 === 0 ? '-100%' : '100%') },
        {
          duration: .8,
          autoAlpha: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectClass,
            start: "top center+=100",
            end: "bottom top-=100",
            toggleActions: "play none none none", //removed reverse
            markers: false,
            // onLeave: () => gsap.to(projectClass, {
            //   duration: 9,
            //   autoAlpha: 0,
            //   scale: 0.5
            // }),
            // onEnterBack: () => gsap.fromTo(projectClass, {
            //   autoAlpha: 0,
            //   scale: 0.5,
            // }, {
            //   duration: 2,
            //   autoAlpha: 1,
            //   x: 0,
            //   scale: 1
            // }),
          },
        }
      );
    });
  }, []);

  return (

    <div className="portfolio">
       {/* <div className="portfolio-container">
       <Wrapper>
      <Window>
        <WindowHeader className="window-title">
              <span>Portfolio</span>
              <Button>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <WindowContent>




      <StyledPage>
        <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true ,  stencil: false, depth: false }}  style={{ background: 'transparent' }} dpr={[1, 1.5]}>
    <ScrollControls damping={6} pages={5}>
      
      <Items />
      <Scroll html style={{ width: '100%' }}>
        <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>my</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>projects,</h1>
        <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>right</h1>
        <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>he
          <br />re.
        </h1>
      </Scroll>
    </ScrollControls>
  </Canvas>
      </StyledPage>
      </WindowContent>
      </Window>
      </Wrapper>
      </div>  */}

     <div className="portfolio-container2">
      {projects.map((project, index) => (
        <Wrapper className="wrapper" key={project.id}>
          <Window className={`project project-${index}`} style={{ width: '100%', margin: '20px' }}>
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
                  <img src={project.imageUrl} alt={project.title} style={{ width: '50%', height: 'auto' }} />
                  {/* <h2>{project.title}</h2> */}
                  <p>{project.description}</p>
                </a>
              ) : (
                <img src={project.imageUrl} alt={project.title} style={{ width: '50%', height: 'auto' }} />
              )}
              <Project {...project} />
            </WindowContent>
          </Window>
        </Wrapper>
      ))}
      </div>
    </div>

    
  );
};

//props validation
Portfolio.propTypes = {


  project: PropTypes.object.isRequired,

};

export default Portfolio;

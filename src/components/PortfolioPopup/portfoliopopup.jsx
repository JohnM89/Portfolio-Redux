import {  useRef, useState  } from 'react';
import * as THREE from 'three'
import PropTypes from 'prop-types';
import projects from '../../data/projects';
// import AnimatedLetters from '../AnimatedLetters/animatedletters';
import { Button,  Window, WindowContent, WindowHeader} from 'react95';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber'


import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'


import './portfoliopopup.css';




const StyledPage = styled.div`
  width: 100%;
  height: 100vh; // Set to the height that fits your design
  display: flex;
  align-items: center;
  justify-content: center;

`;


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

const Item = ({ url, scale, ...props }) => {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);


  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta);
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta);
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta);
  });

  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  );
};


const computeScale = (scale, w) => scale.map(s => s * w);
const computePosition = (position, w, h) => [position[0] * w, position[1] * h, position[2]];
const Items = () => {
    const { width: w, height: h } = useThree((state) => state.viewport);
    return (
        <Scroll>
            {projects.map((project, index) => (
                <Item
                    key={project.id}
                    url={project.imageUrl}
                    scale={computeScale(project.scale, w )} // Simplified scale computation
                    position={computePosition(project.position, w, h)} // Simplified position computation
                />
            ))}
        </Scroll>
    );
};

const PortfolioPopup = () => {
  // const [letterClass,] = useState('text-animate');


  return (

    <div className="portfolio">
      <div className="portfolio-container">
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
        <Canvas orthographic camera={{ zoom: 80 }}  gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    {/* <color attach="background" args={['#f0f0f0']} /> */}
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
      </div>


    </div>

    
  );
};

//props validation
Item.propTypes = {
  url: PropTypes.string,
  scale: PropTypes.array,
};

export default PortfolioPopup;

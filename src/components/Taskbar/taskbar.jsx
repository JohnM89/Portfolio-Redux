import styled from 'styled-components';
// import React from 'react';

// Taskbar Container
const Taskbar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px; // Adjust based on your preference
  background-color: hsla(0, 0%, 13%, 95%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -2px 5px -2px hsla(0, 0%, 10%, 50%);
  z-index: 1000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
    backdrop-filter: blur(10px);
  }
`;

// Taskbar Button
const TaskbarButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Icon (SVG)
const Icon = styled.svg`
  fill: #fff;
  width: 24px;
  height: 24px;
`;

const FooterTaskbar = () => {
  return (
    <Taskbar>
      <TaskbarButton>
        <Icon>{/* SVG path here */}</Icon>
      </TaskbarButton>
      {/* Add more buttons or system tray icons here */}
    </Taskbar>
  );
};

export default FooterTaskbar;

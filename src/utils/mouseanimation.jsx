// import gsap from 'gsap';


// const CursorAnimation = (element) => {
//     const balls = gsap.utils.toArray('.ball'); // assume the first one is the main cursor
//     const trail = gsap.utils.toArray('.trail'); // the trailing elements
//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };
//     const speed = 0.1;

//     // quick setters for the main cursor and trail elements
//     const xSet = balls.map(ball => gsap.quickSetter(ball, "x", "px"));
//     const ySet = balls.map(ball => gsap.quickSetter(ball, "y", "px"));

//     // Set initial positions
//     gsap.set(balls, {xPercent: -50, yPercent: -50});
//     gsap.set(trail, {xPercent: -50, yPercent: -50});

//     window.addEventListener("mousemove", e => {    
//       mouse.x = e.x;
//       mouse.y = e.y;  
//     });
    
//     gsap.ticker.add(() => {
//       // adjust speed for smoother following effect
//       const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
      
//       pos.x += (mouse.x - pos.x) * dt;
//       pos.y += (mouse.y - pos.y) * dt;

//       // update positions for the cursor and each trail element
//       xSet[0](pos.x);
//       ySet[0](pos.y);
      
//       trail.forEach((el, i) => {
//         // delay each trail element's movement to create the trail effect
//         const delay = (i + 1) * 0.02;
//         gsap.to(el, {x: pos.x, y: pos.y, delay, overwrite: true});
//       });
//       gsap.to(element, { duration: 1, opacity: 1, scale: 1.5 });
//     });
// }

// export default CursorAnimation;

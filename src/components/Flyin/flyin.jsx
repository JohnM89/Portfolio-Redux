import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MyScrollAnimatedComponent = () => {
    const flyingImageRef = useRef(null);

    useEffect(() => {
        if (flyingImageRef.current) {
            gsap.fromTo(flyingImageRef.current,
                { y: -200, opacity: 10 },
                {
                    y: () => window.innerHeight,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: flyingImageRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    }
                }
            );
        }
    }, []);

    return (
        <div ref={flyingImageRef} id="section-to-trigger-animation">
            <img src="/images/icon.png" alt="Me" className="flying-icon" />
        </div>
    );
};

export default MyScrollAnimatedComponent;

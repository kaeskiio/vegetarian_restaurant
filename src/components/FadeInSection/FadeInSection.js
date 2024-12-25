import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ children, translateXAmount=0, translateYAmount=0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    //to observe whether or not the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => { //executed when the conditions are met
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);//stop observing the section once its no longer the current section
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0px) translateX(0px)` : `translateY(${translateYAmount}px) translateX(${translateXAmount}px)`, //so the element shifts up as it fades in
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
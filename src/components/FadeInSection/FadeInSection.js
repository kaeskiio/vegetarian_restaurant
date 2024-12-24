import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ children }) => {
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
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)', //so the element shifts up as it fades in
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
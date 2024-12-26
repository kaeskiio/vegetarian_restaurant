import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ children, translateXAmount=0, translateYAmount=0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [threshold, setThreshold] = useState(0.3); //our default threshold
  console.log(window.innerwidth)
  useEffect(() => {
    const updateThreshold = () => {
      if(window.innerwidth < 750){
        setThreshold(0);
      } else if(window.innerwidth < 1150){
        setThreshold(0.2);
      }else{
        setThreshold(0.3);
      }
    }

    updateThreshold(); 
    window.addEventListener('resize', updateThreshold);
    return () => {
      window.removeEventListener('resize', updateThreshold);
    };
  }, []);

  useEffect(() => {
    //to observe whether or not the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => { //executed when the conditions are met
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: window.innerWidth < 768 ? '20px' : '0px', } //
    );
    

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);//stop observing the section once its no longer the current section
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0px) translateX(0px)` : `translateY(${translateYAmount}px) translateX(${translateXAmount}px)`, //so the element shifts up as it fades in
        transition: 'opacity 2s ease-out, transform 2s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
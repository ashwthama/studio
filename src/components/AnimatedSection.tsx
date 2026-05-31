"use client";

import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, id, as: Tag = 'section' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const Component = Tag as React.ElementType<{
    children: React.ReactNode;
    className?: string;
    id?: string;
    ref?: React.Ref<HTMLElement>;
  }>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) {
               observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Component
      id={id}
      ref={sectionRef}
      className={`${className || ''} fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;

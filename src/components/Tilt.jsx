import React, { useRef, useState } from 'react';

export default function Tilt({ children, className = '', tiltMaxAngleX = 15, tiltMaxAngleY = 15 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
  });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const x = (clientX - left) / width; // 0 to 1
    const y = (clientY - top) / height;   // 0 to 1

    const tiltX = (y - 0.5) * 2 * tiltMaxAngleX * -1;
    const tiltY = (x - 0.5) * 2 * tiltMaxAngleY;

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-wrapper ${className}`}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

import React from 'react';
import useMousePosition from '../hooks/useMousePosition';
import { useTheme } from '../context/ThemeContext';
import './Spotlight.css';

export default function Spotlight() {
  const { x, y } = useMousePosition();
  const { isDarkMode } = useTheme();

  if (!isDarkMode) return null;

  return (
    <div
      className="global-spotlight"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.08), transparent 80%)`,
      }}
    />
  );
}

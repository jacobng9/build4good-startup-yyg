import { useScrollAnimation } from '../hooks/useAnimations';

export default function AnimateOnScroll({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${delay ? `delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

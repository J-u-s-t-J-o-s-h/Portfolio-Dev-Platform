import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const uniqueId = useRef(`lightning-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Get card dimensions
    const width = card.offsetWidth;
    const height = card.offsetHeight;

    // Create SVG elements
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', uniqueId.current);
    svg.setAttribute('class', 'absolute inset-0 pointer-events-none opacity-0');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Create the border path
    const borderPath = `
      M 0,0 
      L ${width},0 
      L ${width},${height} 
      L 0,${height} 
      L 0,0
    `;

    svg.innerHTML = `
      <defs>
        <filter id="glow-${uniqueId.current}">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        class="lightning-border" 
        d="${borderPath}"
        stroke="rgba(147, 51, 234, 0.8)" 
        stroke-width="2"
        fill="none"
        filter="url(#glow-${uniqueId.current})"
        pathLength="100"
        stroke-dasharray="100"
        stroke-dashoffset="100"
      />
    `;

    card.appendChild(svg);

    // Create timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: "none" }
    });

    const path = svg.querySelector('.lightning-border');

    tl.to(svg, { opacity: 1, duration: 0.1 })
      .to(path, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(path, {
        strokeDashoffset: -100,
        duration: 0.2
      })
      .to(svg, { opacity: 0 });

    // Add hover event listeners
    const handleMouseEnter = () => {
      tl.restart();
    };

    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
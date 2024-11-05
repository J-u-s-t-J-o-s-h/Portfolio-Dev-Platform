import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create stars
    class Star {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speed: number;
      opacity: number;
      pulseSpeed: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.baseX = this.x; // Store original position
        this.baseY = this.y;
        this.size = Math.random() * 0.8;
        this.speed = Math.random() * 0.05;
        this.opacity = Math.random();
        this.pulseSpeed = Math.random() * 0.01;
      }

      update() {
        // Basic movement
        this.x -= this.speed;
        if (this.x < 0) {
          this.x = this.canvasWidth;
          this.y = Math.random() * this.canvasHeight;
          this.baseX = this.x;
          this.baseY = this.y;
        }

        // Mouse interaction
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const repelX = Math.cos(angle) * force * 2;
          const repelY = Math.sin(angle) * force * 2;
          this.x -= repelX;
          this.y -= repelY;
        } else {
          // Return to original position
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }

        this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.005;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create constellation effect
    const stars: Star[] = [];
    const starCount = 400;

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse movement
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Draw stars
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      // Draw constellations with mouse interaction
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50) {
            const opacity = (1 - distance / 50) * 0.05;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        filter: 'contrast(1.2) brightness(0.8)'
      }}
    />
  );
};

export default AnimatedBackground;
'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000)); // Increased particle count
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2, // Increased velocity for more movement
          vy: (Math.random() - 0.5) * 1.2, // Increased velocity for more movement
          radius: Math.random() * 2 + 1, // Larger particles
          color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2})` // Increased opacity for better visibility
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Update position with more movement
        particle.x += particle.vx * 0.8;
        particle.y += particle.vy * 0.8;

        // Bounce off walls
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -0.95; // Slightly more bounce
          particle.x = particle.x <= 0 ? 0 : canvas.width;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -0.95; // Slightly more bounce
          particle.y = particle.y <= 0 ? 0 : canvas.height;
        }

        // Add subtle randomness to movement
        particle.vx += (Math.random() - 0.5) * 0.08; // Increased randomness
        particle.vy += (Math.random() - 0.5) * 0.08; // Increased randomness

        // Limit velocity
        const maxSpeed = 1.8; // Increased max speed
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add a bright core to the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`; // More visible connections
            ctx.lineWidth = 0.5; // Thicker lines
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      {/* Solid background color - changed to #0f172a */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      
      {/* Particle canvas - transparent background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
    </div>
  );
};

export default DynamicBackground;
import React, { useEffect, useRef } from 'react';

const SilkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuration for the silk effect
    const separation = 40; // Distance between lines
    const amount = width / separation; // Number of lines
    let t = 0; // Time variable

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    const draw = () => {
      // Clear with slight transparency for trail effect, though standard silk usually clears fully
      ctx.fillStyle = '#050505'; 
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      
      for (let i = 0; i < amount; i++) {
        // Create a gradient for each line
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(0, 242, 255, 0.05)'); // Cyan faint
        gradient.addColorStop(0.5, 'rgba(112, 0, 255, 0.08)'); // Purple faint
        gradient.addColorStop(1, 'rgba(0, 242, 255, 0.05)');
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();

        // Generate the wave
        for (let y = 0; y < height; y += 20) {
          // Complex noise-like calculation using sin/cos interaction
          const x = (i * separation) + 
                    Math.sin(y * 0.01 + t + i * 0.5) * 50 + 
                    Math.sin(y * 0.005 + t * 0.5) * 50;
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      t += 0.015; // Speed of animation
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default SilkBackground;
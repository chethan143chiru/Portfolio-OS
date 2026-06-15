import { useEffect, useRef } from 'react';

export default function BackgroundSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle construction
    const particleCount = 40;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulsingSpeed: number;
      glowColor: string;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        pulsingSpeed: Math.random() * 0.02 + 0.005,
        glowColor: Math.random() > 0.5 ? 'rgba(249, 115, 22, 0.4)' : 'rgba(168, 85, 247, 0.4)' // Orange and Purple
      });
    }

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.03)';
      ctx.lineWidth = 1;
      
      const gridSize = 60;
      
      // Draw vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Subtle diagonal lines for tech HUD vibe
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.01)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark sci-fi rich gradient background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0a050d'); // Dark deep obsidian purple
      bgGrad.addColorStop(1, '#050206'); // Pure dark charcoal
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw operating system ambient grid
      drawGrid();

      // Render digital grid dust particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.pulsingSpeed;

        if (p.alpha > 0.8 || p.alpha < 0.2) {
          p.pulsingSpeed = -p.pulsingSpeed;
        }

        // Keep inside bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = p.glowColor;
        ctx.fillStyle = `rgba(${p.glowColor.includes('249') ? '249, 115, 22' : '168, 85, 247'}, ${p.alpha})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset shadow for efficiency
      });

      // Ambient scan lines for retro OS feeling
      ctx.fillStyle = 'rgba(255, 255, 255, 0.003)';
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1.5);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        id="bg-canvas"
      />
      {/* Background Atmosphere Blurs and Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-100px] right-[100px] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-full h-px bg-white/5"></div>
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/5"></div>
      </div>
    </>
  );
}

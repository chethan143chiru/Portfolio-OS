import { useEffect, useState } from 'react';

export default function CursorSystem() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch based
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth trace filter for cursor trail (inertia effect)
    let animationFrameId: number;
    const smoothTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(smoothTrail);
    };
    smoothTrail();

    // Hover listener to expand cursor ring
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-zone') ||
        target.closest('[role="button"]') ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Tiny solid neon core point */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        id="cursor-core"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
      </div>

      {/* Trailing futuristic HUD bracket ring */}
      <div
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
        }}
        id="cursor-trail"
      >
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isHovered
              ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
              : 'border-orange-500/40 bg-transparent'
          }`}
        >
          {/* Futuristic internal crosshair notches when hovering */}
          {isHovered && (
            <div className="w-1 h-1 rounded-full bg-orange-400 animate-ping" />
          )}
        </div>
      </div>
    </>
  );
}

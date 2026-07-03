import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Code, Github, Sparkles, BookOpen, ChevronRight, Terminal, Network, ShieldCheck } from 'lucide-react';
import cinematicPortrait from '../assets/images/cinematic_portrait_1781353600397.jpg';

interface InteractivePortraitProps {
  onNavToSection: (section: 'Home' | 'Projects' | 'Certificates' | 'Resume' | 'Contact') => void;
  onHotspotActivate?: () => void;
}

export default function InteractivePortrait({ onNavToSection, onHotspotActivate }: InteractivePortraitProps) {
  const [activeHotspot, setActiveHotspot] = useState<'head' | 'chest' | 'arm' | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [hasTouch, setHasTouch] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
      setHasTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
      setIsLandscape(window.innerWidth > window.innerHeight);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const isInteractiveTouch = (isMobileOrTablet || hasTouch) && !isLandscape;

  // Floating particles around the portrait
  const particles = [
    { id: 1, top: '20%', left: '15%', size: 4, duration: 4 },
    { id: 2, top: '45%', left: '8%', size: 6, duration: 6 },
    { id: 3, top: '65%', left: '25%', size: 3, duration: 3 },
    { id: 4, top: '15%', left: '82%', size: 5, duration: 5 },
    { id: 5, top: '50%', left: '88%', size: 4, duration: 7 },
  ];

  // Mouse follow parallax effect for genuine AAA depth
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 35;
    const y = (e.clientY - rect.top - rect.height / 2) / 35;
    setParallaxOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
    setActiveHotspot(null);
  };

  return (
    <div
      className="relative w-full aspect-[3/4] md:h-[80vh] md:aspect-auto rounded-3xl overflow-visible bg-white/5 backdrop-blur-md border border-white/10 p-1.5 group/portrait cursor-crosshair shadow-[0_12px_44px_rgba(0,0,0,0.4)] select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setActiveHotspot(null)}
      id="cinematic-portrait-container"
    >
      {/* Absolute floating digital particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bg-orange-500 rounded-full animate-pulse pointer-events-none z-10 opacity-30 shadow-[0_0_8px_#f97316]"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Cyberpunk HUD Frame Trim */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500/60 pointer-events-none z-10" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500/20 pointer-events-none z-10" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-orange-500/20 pointer-events-none z-10" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-orange-500/60 pointer-events-none z-10" />

      {/* Outer Glow Ambient Frame Aura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-85 pointer-events-none rounded-3xl" />

      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        {/* Main Portrait Image with Parallax Depth and Breathing Motion */}
        <motion.img
          src={cinematicPortrait}
          alt="Chethan R"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[1.02]"
          style={{
            scale: 1.05,
          }}
          animate={{
            x: parallaxOffset.x,
            y: parallaxOffset.y,
            // Subtle digital breathing loop
            scale: [1.05, 1.065, 1.05],
          }}
          transition={{
            x: { type: 'spring', damping: 25, stiffness: 60 },
            y: { type: 'spring', damping: 25, stiffness: 60 },
            scale: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
          }}
        />
        
        {/* Subtle holographic grid mesh overlay strictly inside the portrait */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] opacity-30 pointer-events-none [background-size:100%_4px,6px_100%]" />
      </div>

      {/* ==================== HOTSPOT 1: HEAD (ACHIEVEMENTS) ==================== */}
      <div
        className="absolute top-[20%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20"
        onMouseEnter={() => {
          if (!isInteractiveTouch) setActiveHotspot('head');
        }}
        onMouseLeave={() => {
          if (!isInteractiveTouch) setActiveHotspot(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (isInteractiveTouch) {
            onHotspotActivate?.();
            setActiveHotspot(activeHotspot === 'head' ? null : 'head');
          }
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative cursor-pointer group">
          {/* Target Reticle Radar Ping */}
          <span className="absolute -inset-2.5 rounded-full border border-orange-500 bg-orange-500/10 animate-ping opacity-60" style={{ animationDuration: '2s' }} />
          <span className="absolute -inset-1.5 rounded-full border border-purple-500 bg-purple-500/20" />
          <div className="w-4 h-4 rounded-full bg-orange-500 border border-white flex items-center justify-center shadow-[0_0_12px_#f97316]">
            <Award size={8} className="text-black" />
          </div>

          {/* Hotspot text marker label directly visual */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-0.5 rounded text-[9px] text-orange-400 font-mono tracking-wider whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
            ACHIEVEMENTS HUB
          </div>
        </div>
      </div>

      {/* ==================== HOTSPOT 2: CHEST (SKILLS PREVIEW) ==================== */}
      <div
        className="absolute top-[52%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-20"
        onMouseEnter={() => {
          if (!isInteractiveTouch) setActiveHotspot('chest');
        }}
        onMouseLeave={() => {
          if (!isInteractiveTouch) setActiveHotspot(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (isInteractiveTouch) {
            onHotspotActivate?.();
            setActiveHotspot(activeHotspot === 'chest' ? null : 'chest');
          }
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative cursor-pointer group">
          <span className="absolute -inset-2.5 rounded-full border border-orange-500 bg-orange-500/10 animate-ping opacity-60" style={{ animationDuration: '2.5s' }} />
          <span className="absolute -inset-1.5 rounded-full border border-orange-400 bg-orange-500/10" />
          <div className="w-4 h-4 rounded-full bg-orange-400 border border-white flex items-center justify-center shadow-[0_0_12px_#f97316]">
            <Code size={8} className="text-black" />
          </div>

          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-0.5 rounded text-[9px] text-orange-400 font-mono tracking-wider whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
            SKILLS MATRIX
          </div>
        </div>
      </div>

      {/* ==================== HOTSPOT 3: ARM (GITHUB STATISTICS) ==================== */}
      <div
        className="absolute top-[75%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-20"
        onMouseEnter={() => {
          if (!isInteractiveTouch) setActiveHotspot('arm');
        }}
        onMouseLeave={() => {
          if (!isInteractiveTouch) setActiveHotspot(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (isInteractiveTouch) {
            onHotspotActivate?.();
            setActiveHotspot(activeHotspot === 'arm' ? null : 'arm');
          }
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative cursor-pointer group">
          <span className="absolute -inset-2.5 rounded-full border border-purple-500 bg-purple-500/10 animate-ping opacity-60" style={{ animationDuration: '1.8s' }} />
          <span className="absolute -inset-1.5 rounded-full border border-purple-400 bg-purple-500/10" />
          <div className="w-4 h-4 rounded-full bg-purple-500 border border-white flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.8)]">
            <Github size={8} className="text-white" />
          </div>

          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-0.5 rounded text-[9px] text-purple-400 font-mono tracking-wider whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
            GITHUB STATS
          </div>
        </div>
      </div>

      {/* ==================== HOLOGRAM FLOATING CARDS (Direct children of portrait container to keep them strictly inside bounds on mobile/desktop & prevent overlaps) ==================== */}
      
      {/* 1. Achievements Card (Right Side Alignment, configured strictly inside mobile margins) */}
      <AnimatePresence>
        {activeHotspot === 'head' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className={`absolute right-2 xs:right-4 sm:right-5 top-[5%] sm:top-[12%] w-[135px] xs:w-[165px] sm:w-[245px] md:w-[275px] z-30 bg-zinc-950/95 backdrop-blur-3xl border border-white/15 rounded-xl p-1.5 sm:p-3.5 shadow-[0_12px_44px_rgba(0,0,0,0.8)] font-mono text-left select-none ${isInteractiveTouch ? 'pointer-events-auto' : 'pointer-events-none'}`}
            id="head-hotspot-hologram"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-2">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Sparkles size={10} className="text-orange-500 animate-spin sm:w-3 sm:h-3" style={{ animationDuration: '6s' }} />
                <h3 className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white">ACHIEVEMENTS</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center mt-1">
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5 min-w-0">
                <span className="text-orange-400 font-extrabold text-[7px] xs:text-[8.5px] sm:text-[11px] block text-center truncate">JEE</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">Alpha</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5 min-w-0">
                <span className="text-purple-400 font-extrabold text-[7px] xs:text-[8.5px] sm:text-[11px] block text-center truncate">MOOC</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">VTU<br />Honour</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5 min-w-0">
                <span className="text-[#eae5ef] font-extrabold text-[7px] xs:text-[8.5px] sm:text-[11px] block text-center truncate">VENDOR</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">Cred</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Skills Matrix Card (Left Side Alignment, configured strictly inside mobile margins) */}
      <AnimatePresence>
        {activeHotspot === 'chest' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute left-2 xs:left-4 sm:left-5 top-[28%] sm:top-[32%] w-[135px] xs:w-[165px] sm:w-[245px] md:w-[275px] z-30 bg-zinc-950/95 backdrop-blur-3xl border border-white/15 rounded-xl p-1.5 sm:p-3.5 shadow-[0_12px_44px_rgba(0,0,0,0.8)] font-mono text-left pointer-events-auto select-none"
            id="chest-hotspot-hologram"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-2">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Terminal size={10} className="text-orange-400 sm:w-3 sm:h-3" />
                <h3 className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white">SKILLS MATRIX</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center mt-1">
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5">
                <span className="text-orange-400 font-extrabold text-[9px] sm:text-[11px] block text-center">4+</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">Logic</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5">
                <span className="text-purple-400 font-extrabold text-[9px] sm:text-[11px] block text-center">8+</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">Core</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg flex flex-col justify-center items-center min-h-[48px] sm:min-h-[58px] gap-0.5">
                <span className="text-blue-400 font-extrabold text-[9px] sm:text-[11px] block text-center">6+</span>
                <span className="text-[6px] sm:text-[7.5px] text-zinc-400 block text-center leading-tight">Aether</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. GitHub Status Card (Right Side Alignment, configured strictly inside mobile margins) */}
      <AnimatePresence>
        {activeHotspot === 'arm' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-2 xs:right-4 sm:right-5 top-[52%] sm:top-[56%] w-[135px] xs:w-[165px] sm:w-[245px] md:w-[275px] z-30 bg-zinc-950/95 backdrop-blur-3xl border border-white/15 rounded-xl p-1.5 sm:p-3.5 shadow-[0_12px_44px_rgba(0,0,0,0.8)] font-mono text-left pointer-events-auto select-none"
            id="arm-hotspot-hologram"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-2">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Network size={10} className="text-purple-400 sm:w-3 sm:h-3" />
                <h3 className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-white">GITHUB STATUS</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center mt-1">
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg">
                <span className="text-orange-400 font-extrabold text-[9px] sm:text-[11px] block text-center">1.8k+</span>
                <span className="text-[6.5px] sm:text-[7px] text-zinc-400 block mt-0.5 text-center">Stars</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg">
                <span className="text-purple-400 font-extrabold text-[9px] sm:text-[11px] block text-center">540+</span>
                <span className="text-[6.5px] sm:text-[7px] text-zinc-400 block mt-0.5 text-center">Clones</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-1 rounded-lg">
                <span className="text-[#eae5ef] font-extrabold text-[9px] sm:text-[11px] block text-center">16+</span>
                <span className="text-[6.5px] sm:text-[7px] text-zinc-400 block mt-0.5 text-center">Repos</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

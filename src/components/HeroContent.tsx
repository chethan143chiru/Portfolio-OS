import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Award, Terminal, ArrowLeft, Cpu } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

interface HeroContentProps {
  onNavToSection: (section: 'Home' | 'Projects' | 'Certificates' | 'Resume' | 'Contact') => void;
}

export default function HeroContent({ onNavToSection }: HeroContentProps) {
  const roles = ['Backend Developer', 'Machine Learning Engineer', 'Cloud Enthusiast'];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Custom typing animation hook loop
  useEffect(() => {
    let timer: number;
    const currentRole = roles[currentRoleIdx];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at full text
      timer = window.setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    } else {
      timer = window.setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIdx]);

  return (
    <div className="flex flex-col gap-6 text-left" id="hero-content-panel">
      {/* Intro Greeting Block */}
      <div className="flex flex-col gap-1.5 select-none">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-[0.4em] text-orange-400 font-bold uppercase"
        >
          HELLO, I'M
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white block"
        >
          CHETHAN <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">R</span>
        </motion.h1>
      </div>

      {/* Responsive typing role animation */}
      <div className="min-h-[30px] flex items-center gap-2 text-sm md:text-base font-mono text-purple-300 font-semibold border-b border-white/10 pb-3">
        <span className="text-orange-500 font-bold select-none text-xs">&gt;_</span>
        <span>{displayedText}</span>
        <span className="w-2 h-4 bg-orange-500 animate-pulse ml-0.5" />
      </div>

      {/* Main core summary paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xs md:text-[13px] leading-relaxed text-zinc-300 font-sans"
      >
        Computer Science Engineering student specializing in backend development, machine learning workflows, and cloud-enabled applications. Experienced in building secure APIs, scalable systems, intelligent applications, and database-driven platforms.
      </motion.p>

      {/* ==================== FLOATING INFORMATION PANELS ==================== */}
      <div className="grid grid-cols-3 gap-4 mt-2" id="metrics-grid">
        {/* CARD 1: Projects */}
        <div
          className="p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg text-center md:text-left select-none"
        >
          <p className="text-2xl font-black text-orange-500">15+</p>
          <p className="text-[10px] uppercase text-zinc-400 mt-1 font-bold tracking-wider">Projects</p>
        </div>

        {/* CARD 2: Certifications */}
        <div
          className="p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg text-center md:text-left select-none"
        >
          <p className="text-2xl font-black text-purple-500">12+</p>
          <p className="text-[10px] uppercase text-zinc-400 mt-1 font-bold tracking-wider">Certifications</p>
        </div>

        {/* CARD 3: Stacks */}
        <div
          className="p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg text-center md:text-left select-none"
        >
          <p className="text-2xl font-black text-blue-500">30+</p>
          <p className="text-[10px] uppercase text-zinc-400 mt-1 font-bold tracking-wider">Stacks</p>
        </div>
      </div>

      {/* ==================== CERTIFICATION PREVIEW ==================== */}
      <div className="flex flex-col gap-2.5 border-t border-white/10 pt-4" id="certifications-previews">
        <span className="text-[9px] text-zinc-400 font-mono font-black tracking-[0.15em] uppercase select-none">
          TOP CERTIFICATIONS FROM
        </span>
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-center opacity-75">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center gap-1.5 select-none"
              title={cert.name}
            >
              <img
                src={cert.badgeUrl}
                alt={cert.company}
                className="w-4 h-4 object-contain filter brightness-90 contrast-125"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] font-mono text-zinc-300 font-semibold">
                {cert.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

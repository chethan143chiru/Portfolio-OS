import { useState, useEffect, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, ExternalLink, Calendar, BookOpen, Fingerprint, Briefcase, Filter } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { CertificationType } from '../types';

export default function CertificationsView() {
  const [certs, setCerts] = useState<CertificationType[]>(CERTIFICATIONS);
  const [selectedCompany, setSelectedCompany] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 3D Card Hover Rotator Tilt Effect
  const [tiltMap, setTiltMap] = useState<Record<string, { rx: number; ry: number }>>({});

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within element
    const y = e.clientY - rect.top;  // y coordinate within element

    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -10; // -10deg to 10deg
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 10;   // -10deg to 10deg

    setTiltMap((prev) => ({ ...prev, [cardId]: { rx, ry } }));
  };

  const handleCardMouseLeave = (cardId: string) => {
    setTiltMap((prev) => ({ ...prev, [cardId]: { rx: 0, ry: 0 } }));
  };

  // Filter application
  useEffect(() => {
    let result = CERTIFICATIONS;

    if (selectedCompany !== 'All') {
      result = result.filter((c) => c.company === selectedCompany);
    }

    if (searchQuery.trim() !== '') {
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setCerts(result);
  }, [selectedCompany, searchQuery]);

  const companiesList = ['All', 'AWS Academy', 'Google Skills', 'Microsoft', 'IBM', 'Claude AI', 'Gemini'];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 pb-20 relative z-10 text-left font-mono" id="certs-view-main">
      {/* View Segment Header */}
      <div className="flex flex-col gap-1.5 mb-8 border-b border-white/10 pb-6 relative">
        <div className="flex items-center gap-2">
          <Award className="text-orange-500" size={18} />
          <h2 className="text-sm font-black text-white tracking-[0.2em] uppercase">CREDENTIAL LAB // CERTIFICATIONS</h2>
        </div>
        <p className="text-xs text-zinc-400">
          Professional micro-credentials issued by authorized industry giants.
        </p>
      </div>

      {/* Control panel buttons Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
        {/* Search filtering */}
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Search credential/skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-2.5 text-xs bg-white/5 border border-white/10 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-all font-mono shadow-sm"
          />
        </div>

        {/* Corporate Selector */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs mr-1">
            <Filter size={12} className="text-orange-500" />
            <span>PROVIDER:</span>
          </div>
          {companiesList.map((comp) => (
            <button
              key={comp}
              onClick={() => setSelectedCompany(comp)}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold rounded-full border cursor-pointer transition-all duration-200 ${
                selectedCompany === comp
                  ? 'bg-orange-500 text-white border-orange-400/40 shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                  : 'bg-transparent text-zinc-350 border-white/10 hover:border-orange-500/40 hover:text-white hover:bg-orange-500/5'
              }`}
            >
              {comp}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Grid Cards with 3D Holographic effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => {
          const tilt = tiltMap[c.id] || { rx: 0, ry: 0 };
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onMouseMove={(e) => handleCardMouseMove(e, c.id)}
              onMouseLeave={() => handleCardMouseLeave(c.id)}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 rounded-2xl p-5 group transition-all duration-150 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between select-none overflow-hidden"
            >
              {/* Internal Holographic Grid Laser Scanner for gorgeous hover feedback */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Upper branding element */}
                <div className="flex items-center justify-between gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={c.badgeUrl}
                      alt={c.company}
                      className="w-7 h-7 object-contain bg-white/10 p-1 rounded-lg border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-white leading-tight">{c.company}</span>
                      <span className="text-[8px] text-zinc-500 mt-0.5 uppercase tracking-wider">ISSUED LAB CERT</span>
                    </div>
                  </div>
                  
                  {/* Calendar Badge */}
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[8px] text-zinc-300 font-bold">
                    <Calendar size={8} />
                    <span>{c.issuedDate}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xs font-black text-white group-hover:text-orange-400 transition-colors uppercase tracking-wide leading-relaxed mb-3">
                  {c.name}
                </h3>

                {/* Description */}
                <p className="text-[10px] leading-relaxed text-zinc-350 mb-4 h-[56px] overflow-hidden line-clamp-3 font-sans">
                  {c.description}
                </p>

                {/* Skills tags list */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {c.skills.slice(0, 4).map((s) => (
                    <span key={s} className="bg-white/10 border border-white/5 px-2 py-0.5 rounded text-[8px] text-zinc-300">
                      #{s}
                    </span>
                  ))}
                  {c.skills.length > 4 && (
                    <span className="text-[8px] text-zinc-450 self-center font-bold">+{c.skills.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Lower validations links */}
              <div className="border-t border-white/10 pt-3 mt-auto flex items-center justify-between text-[9px]">
                <div className="flex items-center gap-1 font-bold text-emerald-500 select-none">
                  <ShieldCheck size={10} />
                  <span>VERIFIED</span>
                </div>

                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/5 hover:bg-orange-500 hover:text-black border border-white/10 hover:border-orange-500 py-1.5 px-3 rounded-xl flex items-center gap-1.5 text-zinc-355 hover:font-bold transition-all cursor-pointer shadow-sm font-sans uppercase tracking-[0.05em] text-[8px]"
                >
                  <Fingerprint size={10} />
                  <span>DECRYPT SECURITY</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

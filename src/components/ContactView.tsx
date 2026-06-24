import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Contact, Phone, Mail, MapPin, Send, MessageSquareCode, CheckCircle2, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLog, setSubmitLog] = useState<string[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleMessageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitLog(['Initializing Handshake with portfolio back-end...', 'Validating telemetry logs and email formatting...']);

    const appendLog = (msg: string) => {
      setSubmitLog((prev) => [...prev, msg]);
    };

    setTimeout(async () => {
      appendLog('Transmitting contact payload to /api/contact router...');
      appendLog('Securing transport layer connection...');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        const data = await response.json();

        if (response.ok) {
          if (data.status === 'simulated') {
            appendLog('Simulating secure loopback connection...');
            appendLog('WARNING: SENDER_APP_PASSWORD not set in server env.');
            appendLog('Status resolved cleanly: Demo simulation validated!');
          } else {
            appendLog('Packet securely accepted by SMTP daemon!');
            appendLog('Notification dispatched to cc9152655@gmail.com!');
            appendLog(`Auto-reply welcome packet fired to ${formData.email}!`);
          }
          
          setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
          }, 1500);
        } else {
          throw new Error(data.message || 'Back-end returned failure status.');
        }
      } catch (err: any) {
        appendLog(`ERROR: ${err.message || 'SMTP transmission failure.'}`);
        appendLog('Opening secure client-side mailto protocol layer...');
        setTimeout(() => {
          setIsSubmitting(false);
          // Fallback to pre-filled custom mailto
          window.location.href = `mailto:cc9152655@gmail.com?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0A---%0ASender details:%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}`;
        }, 1500);
      }
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 pb-20 relative z-10 text-left font-mono" id="contact-view-main">
      {/* View Segment Header - Holographic Box/Panel */}
      <div className="relative mb-10 border-b border-white/10 pb-8 overflow-hidden bg-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl border border-white/5 shadow-[0_10px_50px_rgba(249,115,22,0.05)]">
        {/* Holographic grid scanner overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-2 flex items-center gap-3" id="contact-comms-title">
              <span>SYSTEM COMMS PORT</span>
              <Cpu className="text-orange-500 w-7 h-7 animate-pulse shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed">
              Establish cryptographic link, transmit packets directly, or fetch physical node localization.
            </p>
          </div>

          {/* Active stats panel similar to certificates */}
          <div className="flex flex-col bg-black/40 border border-white/10 p-4 rounded-2xl min-w-[200px] text-right shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] relative justify-center overflow-hidden group">
            {/* Holographic scope corner decorators */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-orange-500/50" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-orange-500/20" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-orange-500/20" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-orange-500/50" />

            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mb-1">
              COMMS GATEWAY STATUS
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 tracking-wider font-mono glow-emerald-400 animate-pulse">
              ONLINE
            </div>
            <div className="text-[9px] text-zinc-400 uppercase tracking-wider font-sans mt-0.5">
              SMTP DISPATCH BUFFER READY
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left column: Direct communications (5/12 elements) */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:border-white/15 transition-all select-none">
            <span className="text-[9px] text-zinc-400 font-bold block uppercase mb-4 tracking-wider">SECURE NODE ADDRESSES</span>

            <div className="flex flex-col gap-5">
              {/* Phone Node */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-orange-400" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-zinc-500 uppercase font-black">COMMUNICATION CORES</span>
                  {CONTACT_INFO.mobileNumbers.map((num) => (
                    <a key={num} href={`tel:${num}`} className="text-xs font-bold text-white hover:text-orange-400 transition-colors mt-0.5 block font-mono">
                      +91 {num}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Node */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-orange-400" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-zinc-500 uppercase font-black">SECURE SMTP LOGINS</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs font-bold text-white hover:text-orange-400 transition-colors mt-0.5 break-all font-mono">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location Node */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-orange-400" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] text-zinc-500 uppercase font-black">GEOGRAPHIC LOCALIZE</span>
                  <span className="text-xs font-bold text-white mt-0.5 font-mono">
                    {CONTACT_INFO.address.split(',')[0]}, {CONTACT_INFO.address.split(',')[2]}
                  </span>
                  <span className="text-[9px] text-zinc-400 mt-0.5 font-sans font-medium">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick legal compliance disclosure info box */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex gap-3 text-[10px] text-zinc-400 select-none">
            <ShieldAlert size={16} className="text-orange-500/70 shrink-0 mt-0.5" />
            <div className="flex flex-col font-sans">
              <span className="font-bold text-white uppercase tracking-wider block mb-0.5 font-mono">TLS ENCRYPTED INTERFACE</span>
              <p className="leading-relaxed font-medium">All outbound contact frames utilize standard security envelope encapsulations and direct pipeline routing relays.</p>
            </div>
          </div>
        </div>

        {/* Right column: Interactive terminal Comms shell (7/12 elements) */}
        <div className="col-span-1 md:col-span-7 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/15 p-6 rounded-2xl transition-all shadow-[0_8px_32px_rgba(0,0,0,0.25)] h-[400px] flex flex-col justify-between">
          <div className="flex-grow flex flex-col h-full">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4 select-none">
              <div className="flex items-center gap-1.5 text-[9px] text-orange-400 font-bold">
                <MessageSquareCode size={12} className="text-orange-500" />
                <span>COMMS_DAEMON_SHELL</span>
              </div>
              <span className="text-[9px] text-zinc-500 font-mono">[BUFFER REGISTER]</span>
            </div>

            {/* Direct Form input elements or outputs */}
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                // Sending diagnostic terminal
                <motion.div
                  key="sending-term"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow bg-white/5 p-4 rounded-xl font-mono text-[10px] text-zinc-300 flex flex-col gap-1.5 border border-white/10 shadow-inner h-full select-none"
                >
                  <div className="flex items-center gap-1.5 text-orange-400 font-bold border-b border-white/10 pb-1.5 mb-2 uppercase">
                    <Terminal size={12} />
                    <span>TRANSMITTING MESSAGE FRAME PACKET</span>
                  </div>
                  {submitLog.map((log, idx) => (
                    <div key={idx} className="flex gap-1">
                      <span className="text-orange-500">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </motion.div>
              ) : submitSuccess ? (
                // Success output
                <motion.div
                  key="success-term"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 select-none h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(16,185,129,0.15)] animate-bounce">
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1 font-mono">Packet Dispatched!</h4>
                  <p className="text-[10px] text-zinc-350 max-w-xs leading-relaxed font-sans font-medium">
                    Encryption validated. Your packet has been placed on the priority stack and delivered directly to my inbox with a system beep!
                  </p>
                </motion.div>
              ) : (
                // Form frame
                <motion.form
                  key="form-term"
                  onSubmit={handleMessageSubmit}
                  className="flex-grow flex flex-col justify-between text-xs h-full"
                >
                  <div className="flex flex-col gap-3">
                    {/* Name */}
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide">VISITOR NAME / IDENTITY</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Identifier (e.g. Professor, Recruiter, CTO)..."
                        className="w-full bg-white/5 border border-white/10 text-xs px-4 py-2.5 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all font-sans font-medium placeholder-zinc-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide">smtp return link (email)</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Relay address (e.g. sender@service.com)..."
                        className="w-full bg-white/5 border border-white/10 text-xs px-4 py-2.5 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all font-sans font-medium placeholder-zinc-500"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide font-mono">ENCODING PAYLOAD (MESSAGE)</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Decrypt details, project descriptions, meeting invites..."
                        className="w-full bg-white/5 border border-white/10 text-xs px-4 py-2.5 rounded-xl text-white outline-none focus:border-orange-500/50 transition-all font-sans font-medium resize-none placeholder-zinc-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-450 text-white font-black hover:font-black text-[10px] py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(249,115,22,0.3)] select-none uppercase tracking-widest border border-orange-400/35 font-sans"
                  >
                    <Send size={12} />
                    <span>TRANSMIT PACKET</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

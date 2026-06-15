import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Power, Terminal, Cpu, HardDrive, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [bootStage, setBootStage] = useState('PORTFOLIO OS v1.1 initialization...');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const diagnosticStatements = [
      'Establishing connection to secure node matrix...',
      'Mapping cloud kernel core modules...',
      'Interpreting GitHub Repository Sync index...',
      'Retrieving credential validation signatures...',
      'Synthesizing Interactive Portrait Hotspots...',
      'Initializing developer system environment... [OK]'
    ];

    // Increment Progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Stream logs
    let index = 0;
    const logsTimer = setInterval(() => {
      if (index < diagnosticStatements.length) {
        setLogs((prev) => [...prev, diagnosticStatements[index]]);
        setBootStage(diagnosticStatements[index]);
        index++;
      } else {
        clearInterval(logsTimer);
      }
    }, 400);

    return () => {
      clearInterval(progressTimer);
      clearInterval(logsTimer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const completionTimeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(completionTimeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#060308] flex flex-col items-center justify-center p-6 text-[#eae5ef] overflow-hidden select-none font-mono"
      id="boot-terminal-container"
    >
      {/* Background Matrix HUD styling */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="w-full max-w-lg flex flex-col gap-8 relative z-10">
        {/* Monogram and Loader Identity */}
        <div className="flex items-center gap-4 border-b border-orange-500/10 pb-6">
          <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.15)] animate-pulse">
            <span className="text-xl font-black text-orange-500 font-sans tracking-tighter">CR</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wider text-orange-500">CHETHAN R</h1>
            <p className="text-xs text-purple-400">PORTFOLIO OPERATING SYSTEM v1.1</p>
          </div>
        </div>

        {/* Live Diagnostics Log Panel */}
        <div className="min-h-[140px] bg-black/40 border border-purple-900/20 rounded-lg p-4 font-mono text-[11px] leading-relaxed text-purple-300 flex flex-col gap-1.5 shadow-inner">
          <div className="flex items-center gap-2 text-orange-400 font-semibold mb-1 pb-1 border-b border-purple-900/10">
            <Terminal size={12} />
            <span>CORE OS_SYS_DIAGNOSTICS</span>
          </div>
          {logs.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-1"
            >
              <span className="text-orange-500/60 select-none">&gt;</span>
              <span>{log}</span>
            </motion.div>
          ))}
        </div>

        {/* Diagnostic Bar Indicators */}
        <div className="grid grid-cols-3 gap-2 text-[10px] text-purple-400">
          <div className="flex items-center gap-1.5 bg-purple-950/20 border border-purple-900/20 p-2 rounded">
            <Cpu size={12} className="text-orange-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>MEM CHIP: OK</span>
          </div>
          <div className="flex items-center gap-1.5 bg-purple-950/20 border border-purple-900/20 p-2 rounded">
            <HardDrive size={12} className="text-purple-400" />
            <span>SYS DRIVE: OK</span>
          </div>
          <div className="flex items-center gap-1.5 bg-purple-950/20 border border-purple-900/20 p-2 rounded">
            <ShieldCheck size={12} className="text-green-500" />
            <span>PORT_SEC: SAFE</span>
          </div>
        </div>

        {/* Progress Bar and Indicator */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-semibold text-purple-300">
            <span className="animate-pulse">{bootStage}</span>
            <span className="text-orange-500 font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-purple-950/40 border border-purple-900/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full shadow-[0_0_10px_#f97316]"
              style={{ width: `${progress}%` }}
              layoutId="boot-progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

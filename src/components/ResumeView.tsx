import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Cpu, Award, Download, Terminal, ChevronRight, FileCode, CheckCircle2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { RESUME_DATA, ACHIEVEMENTS, CONTACT_INFO } from '../data';

export default function ResumeView() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills' | 'achievements'>('experience');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState('');

  const triggerDownloadSimulation = () => {
    setIsDownloading(true);
    const steps = [
      'Establishing access authorization to cloud-enabled dossier nodes...',
      'Compacting education matrices and academic studs...',
      'Synthesizing experiences and trainee workflows...',
      'Compiling AWS, Google, and Microsoft certificates database...',
      'Mapping resume binary tree and vector fonts into PDF metadata standard...',
      'Dossier generated successfully! Transmitting payload package...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setDownloadStep(steps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDownloading(false);
          
          try {
            const doc = new jsPDF({
              orientation: 'portrait',
              unit: 'mm',
              format: 'a4'
            });

            // Set Title Metadata
            doc.setProperties({
              title: 'Chethan R - Resume',
              subject: 'Professional Curriculum Vitae',
              author: 'Chethan R',
              keywords: 'Computer Science, Software Engineer, Machine Learning, Resume',
              creator: 'Portfolio OS'
            });

            let y = 15;

            // Helper to prevent page overflow
            const checkPageBreak = (needed: number = 10) => {
              if (y + needed > 275) {
                doc.addPage();
                y = 15; // reset top margin
              }
            };

            // 1. Header (Centered Name & Credentials)
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(22);
            doc.setTextColor(20, 20, 20);
            doc.text('Chethan R', 105, y, { align: 'center' });
            
            y += 6;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('9164018550 | cc9152655@gmail.com | linkedin.com/in/chethan143chiru | github.com/chethan143chiru', 105, y, { align: 'center' });

            // Helper for horizontal separators
            const drawSectionHeader = (title: string) => {
              checkPageBreak(15);
              y += 6;
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(11);
              doc.setTextColor(20, 20, 20);
              doc.text(title, 15, y);
              y += 2;
              doc.setLineWidth(0.25);
              doc.setDrawColor(180, 180, 180);
              doc.line(15, y, 195, y);
              y += 4.5;
            };

            // Summary Section
            drawSectionHeader('SUMMARY');
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.setTextColor(60, 60, 60);
            const summaryText = 'Computer Science engineering student specializing in backend development, machine learning workflows, and cloud-enabled applications. Experienced in building secure REST APIs, database-driven systems, and scalable multi-user platforms using SwiftUI, Node.js, and AWS.';
            const splitSummary = doc.splitTextToSize(summaryText, 180);
            doc.text(splitSummary, 15, y);
            y += splitSummary.length * 4.8;

            // Education Section
            drawSectionHeader('EDUCATION');
            
            // Ed 1
            checkPageBreak(15);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('Mysuru Royal Institute of Technology', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('oct 2023 - jun 2027', 195, y, { align: 'right' });
            
            y += 4.5;
            doc.setFont('helvetica', 'oblique');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('Bachelor of Engineering in Computer Science and Engineering', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.text('Mandya, Karnataka', 195, y, { align: 'right' });
            
            y += 6;

            // Ed 2
            checkPageBreak(15);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('BGS PU College', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('oct 2021 - mar 2023', 195, y, { align: 'right' });
            
            y += 4.5;
            doc.setFont('helvetica', 'oblique');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('Pre-University Course in Science (PCMB)', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.text('Mysuru, Karnataka', 195, y, { align: 'right' });
            
            y += 6;

            // Technical Skills Section
            drawSectionHeader('TECHNICAL SKILLS');
            
            const skills = [
              { label: 'Programming Languages', val: 'Python, Java, JavaScript, SQL, Swift' },
              { label: 'Core Concepts', val: 'Data Structures and Algorithms, Object-Oriented Programming, DBMS' },
              { label: 'Frameworks & Libraries', val: 'SwiftUI, Node.js, Express.js, React.js, TensorFlow, PyTorch' },
              { label: 'Databases & Backend Services', val: 'SQLite, MongoDB, Firebase' },
              { label: 'Cloud & DevOps', val: 'AWS (EC2, S3, Lambda), Docker, GCP (Basics)' },
              { label: 'Tools & Platforms', val: 'Git, GitHub, Postman, VS Code, HTML5, CSS3' }
            ];

            skills.forEach((skill) => {
              checkPageBreak(6);
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(9.5);
              doc.setTextColor(30, 30, 30);
              doc.text(skill.label + ':', 15, y);
              
              const labelWidth = doc.getTextWidth(skill.label + ': ');
              doc.setFont('helvetica', 'normal');
              doc.setTextColor(60, 60, 60);
              doc.text(skill.val, 15 + labelWidth, y);
              y += 4.8;
            });

            // Experience Section
            drawSectionHeader('EXPERIENCE');
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('Machine Learning Trainee | Unlox Academy', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('Mar 2026 - May 2026', 195, y, { align: 'right' });
            y += 5;

            const expBullet1 = 'Built and evaluated machine learning models using Python for classification and prediction tasks.';
            const expBullet2 = 'Processed and prepared structured datasets, improving model accuracy through preprocessing and tuning.';
            const expBullet3 = 'Implemented end-to-end ML workflows including training, validation, and performance evaluation.';

            const drawBullet = (text: string) => {
              checkPageBreak(12);
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(9.5);
              doc.setTextColor(60, 60, 60);
              doc.text('•', 17, y);
              const splitBullet = doc.splitTextToSize(text, 172);
              doc.text(splitBullet, 22, y);
              y += splitBullet.length * 4.6;
            };

            drawBullet(expBullet1);
            drawBullet(expBullet2);
            drawBullet(expBullet3);

            // Projects Section
            drawSectionHeader('PROJECTS');
            
            // Project 1
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('Campus Buddy', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('Personal Project', 105, y, { align: 'center' });
            doc.text('[Mar 2025 - Jul 2025]', 195, y, { align: 'right' });
            y += 4.5;
            
            doc.setFont('helvetica', 'oblique');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('SwiftUI, SQLite, iOS, DBMS, MVC Architecture', 15, y);
            y += 5;
            drawBullet('Built a role-based iOS student utility application with authentication, session management, SQLite persistence, and secure CRUD workflows using MVC architecture and backend APIs.');

            // Project 2
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('CampusDAO', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('Team/Personal Project', 105, y, { align: 'center' });
            doc.text('[Oct 2025 - Dec 2025]', 195, y, { align: 'right' });
            y += 4.5;
            
            doc.setFont('helvetica', 'oblique');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('SwiftUI, iOS, Backend APIs, Database Management, UI/UX', 15, y);
            y += 5;
            drawBullet('Created a campus issue-management system with role-based access control, RESTful APIs, authentication, and database-driven issue tracking for enabling multiple users to report and track issues efficiently.');

            // Project 3
            checkPageBreak(25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(30, 30, 30);
            doc.text('Algorithm Visualization', 15, y);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.text('Academic/Personal Project', 105, y, { align: 'center' });
            doc.text('[Dec 2025 - Mar 2026]', 195, y, { align: 'right' });
            y += 4.5;
            
            doc.setFont('helvetica', 'oblique');
            doc.setFontSize(9.5);
            doc.setTextColor(80, 80, 80);
            doc.text('HTML5, CSS3, JavaScript, D3.js, Matplotlib, UI/UX', 15, y);
            y += 5;
            drawBullet('Developed an interactive web platform to visualize searching and sorting algorithms with real-time execution, modular design, and optimized rendering across multiple dataset sizes.');

            // Certifications
            drawSectionHeader('CERTIFICATIONS');
            const certs = [
              'AWS Academy - Cloud Foundations, Machine Learning Foundations',
              'Google Skills - Introduction to Large Language Models, Introduction to Responsible AI',
              'Microsoft - Model data with Power BI, AZ-400: Development for Enterprise DevOps',
              'IBM - Python for Data Science, AI & Development',
              'Claude AI - Claude AI Developer Specialist Certificate',
              'Gemini - Gemini Generative AI Solutions Certificate'
            ];
            certs.forEach((cert) => {
              checkPageBreak(8);
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(9.5);
              doc.setTextColor(60, 60, 60);
              doc.text('-', 17, y);
              
              const splitCert = doc.splitTextToSize(cert, 172);
              doc.text(splitCert, 22, y);
              y += splitCert.length * 4.6;
            });

            // Achievements & Leadership
            drawSectionHeader('ACHIEVEMENTS & LEADERSHIP');
            ACHIEVEMENTS.forEach((ach) => {
              checkPageBreak(12);
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(9.5);
              doc.setTextColor(30, 30, 30);
              const titleText = ach.title === 'Cleared JEE Main'
                ? 'JEE Main Qualifier'
                : ach.title === 'H2S Hackathon'
                ? 'Industry Certified'
                : ach.title === 'VTU Honours Program'
                ? 'VTU Honour'
                : ach.title;
              doc.text(`• ${titleText} (${ach.year})`, 17, y);
              y += 4.2;
              doc.setFont('helvetica', 'normal');
              doc.setTextColor(60, 60, 60);
              const splitSub = doc.splitTextToSize(ach.subtitle, 170);
              doc.text(splitSub, 21, y);
              y += splitSub.length * 4.4 + 1.5;
            });

            // SAVE BOTH USING ObjectURL AND DIRECT doc.save
            try {
              const blob = doc.output('blob');
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'Chethan_R_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            } catch (innerErr) {
              console.warn('Blob download failed, fallback to doc.save:', innerErr);
              doc.save('Chethan_R_Resume.pdf');
            }
          } catch (error) {
            console.error('PDF generation failed: ', error);
            const docElement = document.createElement('a');
            docElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Chethan R - Curriculum Vitae (CSE Graduate)');
            docElement.setAttribute('download', 'Chethan_R_Resume.txt');
            document.body.appendChild(docElement);
            docElement.click();
            document.body.removeChild(docElement);
          }
        }, 1200);
      }
    }, 400);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 pb-20 relative z-10 text-left font-mono" id="resume-view-main">
      {/* View Segment Header - Holographic Box/Panel */}
      <div className="relative mb-10 border-b border-white/10 pb-8 overflow-hidden bg-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl border border-white/5 shadow-[0_10px_50px_rgba(249,115,22,0.05)]">
        {/* Holographic grid scanner overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-2 flex items-center gap-3" id="resume-matrix-title">
              <span>SYSTEM CREDENTIAL MATRIX</span>
              <Terminal className="text-orange-500 w-7 h-7 animate-pulse shrink-0" />
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed">
              Interactive, database-indexed dossier compiling academic milestones, field experience, and skill directories.
            </p>
          </div>

          {/* Top Right Floating Download Trigger */}
          <button
            onClick={triggerDownloadSimulation}
            className="bg-white/5 hover:bg-orange-500 text-white hover:text-black border border-white/10 hover:border-orange-400 py-2.5 px-5 rounded-full flex items-center justify-center gap-2 text-xs font-black transition-all cursor-pointer shadow-sm active:scale-95 self-start md:self-auto select-none font-sans uppercase tracking-wider relative z-20"
          >
            <Download size={14} />
            <span>DOWNLOAD CV PORT (.PDF)</span>
          </button>
        </div>
      </div>

      {/* Grid: Left tabs controls (40%), Right detail view (60%) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Summary box & Navigation tab items */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-5">
          {/* Summary Decrypt Block */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg hover:border-white/20 transition-all">
            <span className="text-[9px] text-zinc-400 font-bold tracking-[0.15em] block uppercase mb-1.5 select-none font-mono">
              DEC_DOSSIER_SUMMARY
            </span>
            <p className="text-[11px] leading-relaxed text-zinc-300 font-sans font-medium">
              Chethan R is a PCMB-science background Computer Science Engineering Honors-eligible student trained in enterprise systems architecture, statistical workflows, robust API construction, and cloud operations.
            </p>
            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center gap-2 select-none text-[8px] text-zinc-450 font-mono">
              <CheckCircle2 size={10} className="text-emerald-500" />
              <span>ACADEMIC COMPLIANCE STATUS: [ACCREDITED]</span>
            </div>
          </div>

          {/* Navigation vertical selector tab triggers */}
          <div className="flex flex-col gap-2">
            {[
              { id: 'experience', label: 'FIELD EXPERIENCES', icon: Briefcase },
              { id: 'education', label: 'ACADEMIC STUDY', icon: GraduationCap },
              { id: 'skills', label: 'TECHNOLOGY STACK', icon: Cpu },
              { id: 'achievements', label: 'ACHIEVEMENTS SYSTEM', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full py-3.5 px-4 text-left rounded-2xl border flex items-center justify-between cursor-pointer transition-all duration-200 select-none font-mono ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white border-orange-400/40 shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                      : 'bg-transparent text-zinc-300 border-white/10 hover:border-orange-500/40 hover:text-white hover:bg-orange-500/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} className={activeTab === tab.id ? 'text-white' : 'text-zinc-400'} />
                    <span className="text-[10px] font-black tracking-wide">{tab.label}</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === tab.id ? 'text-white' : 'text-zinc-500/50'} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail view dynamic console */}
        <div className="col-span-1 md:col-span-8 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/15 rounded-2xl p-6 min-h-[380px] shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="flex-1"
            >
              {/* TAB 1: Experiences */}
              {activeTab === 'experience' && (
                <div className="flex flex-col gap-6" id="resume_experience_tab font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 select-none text-[9px] text-zinc-450 font-mono">
                    <span>[SYS_LOG: XP_METRICS]</span>
                    <span>[2 ENTRIES LOCATED]</span>
                  </div>

                  <div className="flex flex-col gap-6">
                    {RESUME_DATA.experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-4 border-l border-white/10 hover:border-orange-500/40 transition-colors">
                        <div className="absolute left-0 top-1 w-1.5 h-1.5 -translate-x-[4px] rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <div>
                            <h4 className="text-xs font-black text-white hover:text-orange-400 transition-colors uppercase tracking-wider">{exp.role}</h4>
                            <span className="text-[10px] font-bold text-white bg-white/10 border border-white/5 px-2 py-0.5 rounded-full mt-1.5 inline-block">{exp.company}</span>
                          </div>
                          <div className="text-right flex flex-col items-start sm:items-end font-mono">
                            <span className="text-[9px] font-bold text-orange-400">{exp.period}</span>
                            <span className="text-[8px] text-zinc-400">{exp.location}</span>
                          </div>
                        </div>

                        <ul className="flex flex-col gap-1.5">
                          {exp.highlights.map((hlt, hidx) => (
                            <li key={hidx} className="text-[10.5px] leading-relaxed text-zinc-300 flex items-start gap-1.5 font-sans font-medium">
                              <span className="text-orange-500 select-none mt-0.5">&gt;</span>
                              <span>{hlt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Education */}
              {activeTab === 'education' && (
                <div className="flex flex-col gap-6" id="resume_education_tab font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 select-none text-[9px] text-zinc-450 font-mono">
                    <span>[SYS_LOG: MARKS_RECORD]</span>
                    <span>[VTU ACCREDITED ACTIVE]</span>
                  </div>

                  <div className="flex flex-col gap-5">
                    {RESUME_DATA.education.map((edu, idx) => (
                      <div key={idx} className="pl-4 border-l border-white/10 hover:border-orange-500/40 transition-colors relative">
                        <div className="absolute left-0 top-1 w-1.5 h-1.5 -translate-x-[4px] rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                          <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-wider">{edu.degree}</h4>
                            <span className="text-[10px] text-white mt-1 block font-bold">{edu.institution}</span>
                          </div>
                          <div className="text-right font-mono">
                            <span className="text-[9px] font-bold text-orange-400 block">{edu.period}</span>
                            {edu.grade && (
                              <span className="text-[9px] text-emerald-400 font-bold bg-white/10 border border-white/10 px-2 py-0.5 rounded-full inline-block mt-1">
                                {edu.grade}
                              </span>
                            )}
                          </div>
                        </div>

                        <ul className="flex flex-col gap-1.5 mt-2">
                          {edu.highlights.map((hlt, hidx) => (
                            <li key={hidx} className="text-[10.5px] leading-relaxed text-zinc-300 flex items-start gap-1.5 font-sans font-medium">
                              <span className="text-orange-500 select-none mt-0.5">•</span>
                              <span>{hlt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Skills matrix */}
              {activeTab === 'skills' && (
                <div className="flex flex-col gap-5" id="resume_skills_tab">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1 select-none text-[9px] text-zinc-450 font-mono">
                    <span>[SYS_LOG: COMPILER_STACKS]</span>
                    <span>[30+ STACKS COMPLIANT]</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Programming */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-white/20 transition-all">
                      <span className="text-[9px] font-bold text-orange-400 block mb-2 uppercase tracking-wide">PROGRAMMING LANGUAGES</span>
                      <div className="flex flex-wrap gap-1">
                        {RESUME_DATA.skillsMatrix.programming.map((s) => (
                          <span key={s} className="bg-white/10 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-white">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-white/20 transition-all">
                      <span className="text-[9px] font-bold text-purple-400 block mb-2 uppercase tracking-wide">FRAMEWORKS & LIBRARIES</span>
                      <div className="flex flex-wrap gap-1">
                        {RESUME_DATA.skillsMatrix.frameworks.map((s) => (
                          <span key={s} className="bg-white/10 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-white">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cloud */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-white/20 transition-all">
                      <span className="text-[9px] font-bold text-blue-400 block mb-2 uppercase tracking-wide font-mono">CLOUD NETWORKING & DEVOPS</span>
                      <div className="flex flex-wrap gap-1">
                        {RESUME_DATA.skillsMatrix.cloudAndDevOps.map((s) => (
                          <span key={s} className="bg-white/10 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-white font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ML */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-white/20 transition-all">
                      <span className="text-[9px] font-bold text-amber-500 block mb-2 uppercase tracking-wide">AI, ML & VECTOR DATABASES</span>
                      <div className="flex flex-wrap gap-1">
                        {RESUME_DATA.skillsMatrix.mlAndData.map((s) => (
                          <span key={s} className="bg-white/10 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-white">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Achievements */}
              {activeTab === 'achievements' && (
                <div className="flex flex-col gap-4" id="resume_achievements_tab font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-1 select-none text-[9px] text-zinc-450 font-mono">
                    <span>[SYS_LOG: COGNITIVE_HONOURS]</span>
                    <span>[OK STATUS]</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ACHIEVEMENTS.map((ach) => (
                      <div key={ach.id} className="bg-white/5 border border-white/10 p-4 rounded-xl flex gap-3 hover:border-white/20 transition-all">
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 self-start">
                          <Award size={14} className="text-orange-400 animate-pulse" />
                        </div>
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <span className="text-[10px] font-bold text-white uppercase leading-snug">{ach.title}</span>
                            <span className="text-[8px] font-bold bg-white/10 border border-white/5 px-2 py-0.5 rounded text-white uppercase shrink-0 font-mono">{ach.year}</span>
                          </div>
                          <p className="text-[9.5px] leading-relaxed text-zinc-350 font-sans font-medium">{ach.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Verification / Security log footer of view */}
          <div className="border-t border-white/10 pt-3.5 mt-4 flex items-center justify-between text-[8px] text-zinc-500 font-mono select-none">
            <div className="flex items-center gap-1">
              <FileCode size={11} className="text-zinc-500" />
              <span>LOG: DOSSIER_MATRIX_VALIDATED_SHA256</span>
            </div>
            <span>SIGNATURE: CHETHANR_CSE</span>
          </div>
        </div>
      </div>

      {/* ==================== SECURE COMPILATION EXPORT POPUP MODAL ==================== */}
      <AnimatePresence>
        {isDownloading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950/40 backdrop-blur-3xl border border-white/10 w-full max-w-md rounded-2xl p-6 relative z-10 shadow-[0_16px_50px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-2 mb-3 text-[10px] text-orange-400 font-mono">
                <Terminal size={12} className="animate-pulse" />
                <span>EXPORT_DAEMON_INITIALIZED</span>
              </div>
              <h3 className="text-xs font-black text-white uppercase tracking-wider mb-2 font-sans">Compiling Dossier System Logs...</h3>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-[9px] leading-relaxed text-zinc-300 font-mono min-h-[90px]">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>PROCESS STATUS: DEC_RUNNING</span>
                </div>
                <span>&gt; {downloadStep}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, GitFork, Star, ExternalLink, Download, FolderGit2, AlertCircle, X, Terminal, Cpu } from 'lucide-react';
import { STATIC_PROJECTS } from '../data';
import { ProjectType } from '../types';

export default function ProjectsView() {
  const [projects, setProjects] = useState<ProjectType[]>(STATIC_PROJECTS);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(STATIC_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);

  // Fetch repositories from real GitHub profile
  useEffect(() => {
    async function loadGithubRepos() {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/chethan143chiru/repos?sort=updated&per_page=30');
        if (!response.ok) {
          throw new Error('API Rate limits exceeded or network interruption.');
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Parse and merge live GitHub data with static curated profiles
          const parsed: ProjectType[] = data.map((repo: any) => {
            // Check if we have standard tags or write fallbacks
            const tags = [repo.language || 'Code'];
            if (repo.name.toLowerCase().includes('react') || repo.name.toLowerCase().includes('canvas')) tags.push('React');
            if (repo.name.toLowerCase().includes('blockchain') || repo.name.toLowerCase().includes('dao')) tags.push('Solidity');
            if (repo.name.toLowerCase().includes('predict') || repo.name.toLowerCase().includes('ml')) tags.push('Python');
            
            return {
              id: repo.id,
              name: repo.name.replace(/[-_]/g, ' '),
              description: repo.description || 'No descriptive summary cataloged for this repository.',
              starsCount: repo.stargazers_count,
              forksCount: repo.forks_count,
              language: repo.language || 'TypeScript',
              updatedAt: repo.updated_at.split('T')[0],
              url: repo.html_url,
              tags: Array.from(new Set(tags))
            };
          });

          // Blend static projects (richer descriptors) with rest of repos
          const map = new Map<string, ProjectType>();
          // Put static first
          STATIC_PROJECTS.forEach((p) => map.set(p.name.toLowerCase(), p));
          // Put live next (non-duplicating)
          parsed.forEach((p) => {
            const key = p.name.toLowerCase();
            if (!map.has(key)) {
              map.set(key, p);
            } else {
              // Merge stats
              const existing = map.get(key)!;
              existing.starsCount = Math.max(existing.starsCount, p.starsCount);
              existing.forksCount = Math.max(existing.forksCount, p.forksCount);
            }
          });

          const blended = Array.from(map.values());
          setProjects(blended);
          setFilteredProjects(blended);
        }
      } catch (err) {
        console.warn('Using static projects backup due to rate limits or network offline.', err);
        // Fallback already assigned of static files
      } finally {
        setIsLoading(false);
      }
    }

    loadGithubRepos();
  }, []);

  // Filter application
  useEffect(() => {
    let result = projects;

    if (searchQuery.trim() !== '') {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.language && p.language.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedTag !== 'All') {
      result = result.filter(
        (p) =>
          p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase())) ||
          (p.language && p.language.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    setFilteredProjects(result);
  }, [searchQuery, selectedTag, projects]);

  const startCompilationAnimation = (projName: string, url: string) => {
    setIsCompiling(true);
    setCompileProgress(0);
    const interval = setInterval(() => {
      setCompileProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsCompiling(false);
            window.open(`${url}/archive/refs/heads/main.zip`, '_blank');
          }, 600);
          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  const allTags = ['All', 'React', 'Python', 'Solidity', 'Java', 'TypeScript'];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-6 pb-20 relative z-10 text-left font-mono" id="projects-view-main">
      {/* Title Segment */}
      <div className="flex flex-col gap-1.5 mb-8 border-b border-white/10 pb-6 relative">
        <div className="flex items-center gap-2">
          <FolderGit2 className="text-orange-500" size={18} />
          <h2 className="text-sm font-black text-white tracking-[0.2em] uppercase">GITHUB UNIVERSE // REPOSITORIES</h2>
        </div>
        <p className="text-xs text-zinc-400">
          Syncing directly with GitHub Core repositories. Search, analyze, and checkout source archives.
        </p>
      </div>

      {/* Controller Controls Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
        {/* Search Field */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-450" size={14} />
          <input
            type="text"
            placeholder="Query repos (e.g. Campus, ML)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/5 border border-white/10 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all font-mono shadow-sm"
          />
        </div>

        {/* Filter categories tags */}
        <div className="flex flex-wrap gap-1.5 max-w-xl">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 text-[10px] uppercase font-bold rounded-full border cursor-pointer transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-orange-500 text-white border-orange-400/45 shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                  : 'bg-transparent text-zinc-300 border-white/10 hover:border-orange-500/40 hover:text-white hover:bg-orange-500/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Main projects grid layout */}
      {isLoading && projects.length === STATIC_PROJECTS.length && (
        <div className="text-center py-12 text-xs text-orange-400 animate-pulse">
          Establishing port query and updating repository indexes...
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 p-5 rounded-2xl flex flex-col justify-between group cursor-pointer transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            onClick={() => setSelectedProject(p)}
          >
            <div>
              {/* Header card with name and date */}
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xs font-black text-white group-hover:text-orange-400 transition-colors uppercase tracking-wider">
                  {p.name}
                </h3>
                <span className="text-[9px] text-zinc-400 font-semibold select-none">
                  {p.updatedAt}
                </span>
              </div>

              {/* Description */}
              <p className="text-[11px] leading-relaxed text-zinc-300 mb-4 line-clamp-2 font-sans font-medium">
                {p.description}
              </p>
            </div>

            {/* Footer metrics inside card */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1 text-[10px]">
              <div className="flex gap-2.5 text-zinc-400 select-none">
                <span className="flex items-center gap-1">
                  <Star size={11} className="text-orange-500" />
                  {p.starsCount || 0}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={11} className="text-purple-400" />
                  {p.forksCount || 0}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-orange-400 select-none">
                  [ {p.language || 'TypeScript'} ]
                </span>
                <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-400 transition-all">
                  <ExternalLink size={10} className="text-zinc-300 group-hover:text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-1 md:col-span-2 text-center py-16 bg-white/5 border border-white/10 rounded-2xl">
            <AlertCircle className="mx-auto text-orange-500 mb-2" size={24} />
            <p className="text-xs text-white font-bold">Zero Repositories Decrypted.</p>
            <p className="text-[10px] text-zinc-400 mt-1">Try modifying your filter categories or query term.</p>
          </div>
        )}
      </div>

      {/* ==================== PROJECT DETAILS DECRYPTOR OVERLAY MODAL ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if(!isCompiling) setSelectedProject(null); }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-zinc-950/40 backdrop-blur-3xl border border-white/10 w-full max-w-lg rounded-2xl overflow-hidden p-6 relative z-10 shadow-[0_16px_50px_rgba(0,0,0,0.6)] text-left"
            >
              {/* Close Button */}
              <button
                disabled={isCompiling}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X size={12} />
              </button>

              {/* Core Header */}
              <div className="flex items-center gap-2 mb-3 mt-1 text-[10px] text-zinc-400">
                <Terminal size={12} className="text-orange-500" />
                <span>DECRYPTOR://REPOSITORIES/{selectedProject.name.replace(/\s+/g, '_').toUpperCase()}</span>
              </div>

              <h3 className="text-base font-black text-white uppercase tracking-wider mb-2">
                {selectedProject.name}
              </h3>

              {/* Tagging categories block */}
              <div className="flex flex-wrap gap-1 mb-4 select-none">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full text-zinc-300">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Decrypted Description parameters */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-5 text-[11px] leading-relaxed text-zinc-300 font-sans">
                {selectedProject.description}
              </div>

              {/* File details system details */}
              <div className="grid grid-cols-2 gap-3 mb-5 border-t border-white/10 pt-4 text-[10px] text-zinc-400 font-mono">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[8px] text-zinc-500 block uppercase">LAST SYS_UPDATE</span>
                  <span className="font-bold text-white block mt-0.5">{selectedProject.updatedAt}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[8px] text-zinc-500 block uppercase">LANGUAGE INDEX</span>
                  <span className="font-bold text-orange-400 block mt-0.5">{selectedProject.language || 'TypeScript'}</span>
                </div>
              </div>

              {/* Compilation overlay HUD block */}
              {isCompiling && (
                <div className="mb-5 bg-white/5 border border-white/10 p-3 rounded-xl text-xs flex flex-col gap-2 select-none">
                  <div className="flex justify-between font-bold text-orange-400 text-[10px]">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Cpu size={12} className="animate-spin" />
                      <span>COMPILING REPO AND COMPRESSING ZIP ARCHIVE</span>
                    </div>
                    <span>{compileProgress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: `${compileProgress}%` }} />
                  </div>
                </div>
              )}

              {/* Interactive buttons */}
              <div className="flex gap-2">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all select-none font-sans uppercase tracking-wider"
                >
                  <ExternalLink size={12} />
                  <span>DECRYPT REPO CODE</span>
                </a>

                <button
                  disabled={isCompiling}
                  onClick={() => startCompilationAnimation(selectedProject.name, selectedProject.url)}
                  className="bg-white/5 border border-white/10 hover:bg-white/10 p-2.5 text-orange-400 hover:text-white rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs select-none"
                  title="Source ZIP compilation"
                >
                  <Download size={12} className={isCompiling ? 'animate-bounce' : ''} />
                  <span className="hidden sm:inline font-bold uppercase font-sans text-[10px] tracking-wider">Source ZIP</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

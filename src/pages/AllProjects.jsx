import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sun,
  Moon,
  Layers,
  Building2,
  User,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  // Sinkronisasi tema dengan localStorage & class root
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "enterprise") return project.category === "enterprise";
    if (activeFilter === "personal") return project.category === "personal";
    return true;
  });

  const enterpriseCount = projects.filter((p) => p.category === "enterprise").length;
  const personalCount = projects.filter((p) => p.category === "personal").length;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Top Navbar */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDarkMode
            ? "bg-slate-950/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 font-bold text-sm px-4 py-2 rounded-xl transition-all duration-300 border ${
              isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500"
                : "bg-white border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-400 shadow-sm"
            }`}
          >
            <ArrowLeft size={18} />
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 hidden sm:inline-block">
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Page Title & Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border bg-indigo-500/10 border-indigo-500/30 text-indigo-400">
            <Layers size={14} />
            <span>Portfolio Archive</span>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            All Projects
          </h1>

          <p
            className={`text-base md:text-lg max-w-3xl leading-relaxed ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Daftar lengkap proyek yang pernah saya rancang dan kembangkan, mencakup sistem enterprise skala instansi pemerintahan dengan standar NDA serta aplikasi web dan mobile personal.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slate-800/60">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : isDarkMode
                ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                : "bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-sm"
            }`}
          >
            <Layers size={16} />
            <span>Semua Project</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "all"
                  ? "bg-white/20 text-white"
                  : isDarkMode
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {projects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("enterprise")}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === "enterprise"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : isDarkMode
                ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                : "bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-sm"
            }`}
          >
            <Building2 size={16} />
            <span>Enterprise / NDA</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "enterprise"
                  ? "bg-white/20 text-white"
                  : isDarkMode
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {enterpriseCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("personal")}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeFilter === "personal"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : isDarkMode
                ? "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                : "bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-sm"
            }`}
          >
            <User size={16} />
            <span>Personal Projects</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === "personal"
                  ? "bg-white/20 text-white"
                  : isDarkMode
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {personalCount}
            </span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer ${
              isDarkMode
                ? "bg-slate-900 border border-slate-700 text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600"
                : "bg-white border border-slate-200 text-indigo-600 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 shadow-slate-200"
            }`}
          >
            <ArrowLeft size={18} />
            <span>Kembali ke Beranda Utama</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`py-8 border-t transition-colors text-center text-sm ${
          isDarkMode
            ? "bg-slate-950 border-slate-800/80 text-slate-500"
            : "bg-white border-slate-200 text-slate-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rahmadani Suryanto Dwi Putra. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Rahmadani05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rahmadanisdp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:rahmadanisuryanto05@gmail.com"
              className="hover:text-indigo-500 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

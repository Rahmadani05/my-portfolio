import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Menu,
  X,
  ArrowRight,
  Layers,
  Globe,
  Wrench,
  Network,
  Brain,
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sun, // Icon Matahari
  Moon, // Icon Bulan
  Award as AwardIcon,
} from "lucide-react";

import fotoProfile from "./bgbg.png";
import ecommerce from "./preview e-commerce.png";
import cinemaTicket1 from "./1111.png";
import kinerja1 from "./kinerja1.png";
import eprofile from "./eprofile.jpeg";
import untag from "./Untag.jpg";
import coursenet from "./course net.png";
import dinkes from "./dinkes.jpg";
import smk from "./smkn7.png";
import searchfilm from "./filmsearch1.png";
import procurement from "./procurement.png";
import django1 from "./django1.png";
import tracker from "./Tracker.png";
import dbklik from "./dbklik.png"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  // Fungsi Toggle Tema
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const toggleDesc = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
      setTimeout(handleScroll, 300);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Math.ceil digunakan untuk mencegah bug koma/desimal pada beberapa resolusi layar
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  // Jalankan pengecekan saat web pertama kali dimuat atau saat ukuran layar diubah
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Science - Informatics Engineering",
      school: "Universitas 17 Agustus 1945 Surabaya",
      year: "2022 - 2026",
      gpa: "GPA: 3.73 / 4.00",
      logo: untag,
    },
    {
      degree: "Teknik Komputer dan Jaringan",
      school: "SMKN 7 Surabaya",
      year: "2018 - 2021",
      gpa: "Average Score : 85/100",
      logo: smk,
    },
  ];

  const projects = [
    {
      title: "E-Commerce",
      desc: "Built using Laravel and MySQL for robust data management. Integrated with RajaOngkir API for real-time shipping costs and location data, as well as Midtrans API for secure payment processing.",
      tech: ["Laravel", "MySQL"],
      link: "https://github.com/Rahmadani05/E-Commerce-Laravel",
      color: "from-blue-500 to-cyan-500",
      image: ecommerce,
    },
    {
      title: "Cinema Ticketing Application",
      desc: "Engineered a high-performance cross-platform cinema ticketing application using Flutter. Seamlessly integrated with TMDB API for real-time movie data and utilized Firebase for secure cloud-based ticket storage and user management, ensuring a modern experience on Android and iOS.",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/Rahmadani05/Aplikasi-Tiket-Bioskop-Flutter",
      color: "from-purple-500 to-pink-500",
      images: [cinemaTicket1],
    },
    {
      title: "E-Kinerja Mobile App",
      desc: "An application designed to monitor daily performance and manage Personal Individual Performance Indicators (IKI). It uses RESTful API architecture for efficient data communication (Dinas Kesehatan Provinsi Jawa Timur).",
      tech: ["Flutter", "MySQL"],
      link: "https://github.com/Rahmadani05/E-Kinerja_Mobile",
      color: "from-emerald-500 to-teal-500",
      images: [kinerja1],
    },
    {
      title: "E-Profile Website",
      desc: "A database website designed to record, manage, and display a complete list and data of all Community Health Centers in East Java province. It facilitates centralized data retrieval for agencies (Dinas Kesehatan Provinsi Jawa Timur).",
      tech: ["Laravel", "MySQL"],
      link: "https://github.com/Rahmadani05/Web_E-Profile",
      color: "from-yellow-500 to-orange-500",
      image: eprofile,
    },
    {
      title: "React Search Film",
      desc: "Front-End project which is collection of projects built on the React library.",
      tech: ["React.js", "OMDb API"],
      link: "https://github.com/Rahmadani05/React-Movie-Search",
      color: "from-yellow-500 to-orange-500",
      image: searchfilm,
    },
    {
      title: "Backend Sistem Procurement Internal",
      desc: "Internal Procurement System Backend designed to replace manual email-based procurement processes.",
      tech: ["Laravel", "PostgreeSQL"],
      link: "https://github.com/Rahmadani05/Backend-System-Procurement-Internal",
      color: "from-yellow-500 to-orange-500",
      image: procurement,
    },
    {
      title: "Django CRUD",
      desc: "Fullstack project which is collection of projects built on the Django library.",
      tech: ["Django", "SQLite"],
      link: "https://github.com/Rahmadani05/Django_CRUD",
      color: "from-yellow-500 to-orange-500",
      image: django1,
    },
    {
      title: "Task & Project Tracker",
      desc: "This application was created to enable users to manage projects and tasks within it, with categories serving as task status markers.",
      tech: ["Laravel", "Vue.js + TypeScript", "PostgreeSQL"],
      link: "https://github.com/Rahmadani05/Aplikasi-Task-Project-Tracker",
      color: "from-yellow-500 to-orange-500",
      image: tracker,
    },
  ];

  const experiences = [
    {
      company: "CV DB Klik",
      role: "Fullstak Web Developer",
      type: "Internship",
      period: "Sept 2025 - Dec 2025",
      location: "Surabaya, Jawa Timur, Indonesia",
      site: "On-Site",
      logo: dbklik,
    },
    {
      company: "Dinas Kesehatan Provinsi Jawa Timur",
      role: "Front-end Mobile Developer",
      type: "Internship",
      period: "Aug 2025 - Oct 2025",
      location: "Surabaya, Jawa Timur, Indonesia",
      site: "On-Site",
      logo: dinkes,
    },
    {
      company: "Dinas Kesehatan Provinsi Jawa Timur",
      role: "Fullstack Web Developer",
      type: "Internship",
      period: "Jan 2025 - Apr 2025",
      location: "Surabaya, Jawa Timur, Indonesia",
      site: "On-Site",
      logo: dinkes,
    },
    {
      company: "Course-Net Indonesia",
      role: "Cyber Security Specialist (MSIB Bactch 7)",
      type: "Internship",
      period: "Sept 2024 - Dec 2024",
      location: "Surabaya, Jawa Timur, Indonesia",
      site: "Remote",
      logo: coursenet,
    },
    {
      company: "Universitas 17 Agustus 1945 Surabaya",
      role: "Laboratory Assistant",
      type: "Part Time",
      period: "Sept 2024 - Jan 2026",
      location: "Surabaya, Jawa Timur, Indonesia",
      site: "On-Site",
      logo: untag,
    },
  ];

  const skillsData = [
    {
      category: "Programming Languages",
      data: [
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Dart",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      category: "Frontend Development",
      data: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "React.Js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.Js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.Js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      data: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "NodeJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        },
      ],
    },
    {
      category: "Mobile Development",
      data: [
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
    },
    {
      category: "Database",
      data: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      category: "Tools & DevOps",
      data: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.brandfetch.io/idDpCfN4VD/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1759982772575",
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden transition-colors duration-300 ${isDarkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-50 text-slate-900"
        }`}
    >
      {/* Decorative Background */}
      <div
        className={`fixed top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10 transition-colors duration-500 ${isDarkMode ? "bg-indigo-500/10" : "bg-indigo-500/20"
          }`}
      ></div>
      <div
        className={`fixed bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10 transition-colors duration-500 ${isDarkMode ? "bg-purple-500/10" : "bg-purple-500/20"
          }`}
      ></div>

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${isDarkMode
            ? "bg-slate-950/80 backdrop-blur-lg border-slate-800"
            : "bg-white/70 backdrop-blur-lg border-slate-200/50"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            Dani<span className="text-indigo-600"></span>
          </a>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-8 text-sm font-semibold ${isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
          >
            {["About", "Skills", "Projects", "Experience", "Education"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
                </a>
              ),
            )}

            {/* Tombol Toggle Theme */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full transition shadow-lg ${isDarkMode
                  ? "bg-white text-slate-900 hover:bg-slate-200 shadow-white/10"
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20"
                }`}
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode
                  ? "bg-slate-800 text-yellow-400"
                  : "bg-slate-100 text-slate-600"
                }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className={isDarkMode ? "text-white" : "text-slate-700"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col space-y-4 shadow-xl animate-in slide-in-from-top-5 ${isDarkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-100"
              }`}
          >
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Education",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium hover:text-indigo-600 ${isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Header Section */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-bold tracking-wide ${isDarkMode
                  ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                  : "bg-indigo-50 border-indigo-100 text-indigo-600"
                }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Hire
            </div>

            <h1
              className={`text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"
                }`}
            >
              My Name Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Rahmadani Suryanto Dwi Putra
              </span>
            </h1>

            <p
              className={`text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
              I am a
              <span className="font-semibold text-indigo-500">
                {" "}
                Fullstack Developer{" "}
              </span>
              based in Surabaya, Indonesia. I am a fresh graduate from
              Universitas 17 Agustus 1945 Surabaya. I am always looking for
              opportunities to expand my knowledge and apply my skills in
              practical, real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                Portfolio <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className={`px-8 py-4 border-2 rounded-xl font-bold transition flex items-center justify-center ${isDarkMode
                    ? "bg-transparent border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
              >
                Call Me
              </a>
            </div>

            {/* Skeleton loader decoration */}
            <div
              className={`pt-8 flex gap-6 justify-center lg:justify-start opacity-70 grayscale hover:grayscale-0 transition-all duration-500`}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-8 w-24 rounded animate-pulse ${isDarkMode ? "bg-slate-800" : "bg-slate-300"}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <div
                className={`absolute inset-0 rounded-[2rem] -rotate-6 border-2 ${isDarkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-slate-100 border-slate-200"
                  }`}
              ></div>
              <div
                className={`absolute inset-0 rounded-[2rem] overflow-hidden border-4 shadow-2xl ${isDarkMode ? "border-slate-800" : "border-white"
                  }`}
              >
                <img
                  src={fotoProfile}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Skill */}
      <section
        id="skills"
        className={`py-24 relative ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3
              className={`text-3xl md:text-4xl font-extrabold ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Skills & Expertise
            </h3>
            <p
              className={`mt-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Daftar teknologi dan tools yang saya kuasai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border shadow-xl hover:shadow-2xl transition-all duration-300 ${isDarkMode
                    ? "bg-slate-950 border-slate-800 hover:shadow-indigo-500/10"
                    : "bg-slate-100 border-slate-200 hover:shadow-indigo-500/10"
                  }`}
              >
                {/* Judul Kategori */}
                <h4
                  className={`font-bold text-lg mb-6 border-b pb-2 flex items-center gap-2 ${isDarkMode
                      ? "text-white border-slate-800"
                      : "text-slate-800 border-slate-200"
                    }`}
                >
                  <span className="w-2 h-6 bg-indigo-500 rounded-full inline-block"></span>
                  {category.category}
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {category.data.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-colors group ${isDarkMode
                          ? "bg-slate-800/50 border-slate-700 hover:bg-slate-700 hover:border-indigo-500/50"
                          : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md"
                        }`}
                    >
                      {/* Container Icon */}
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-lg p-1 transition-colors ${isDarkMode
                            ? "bg-slate-800 group-hover:bg-white"
                            : "bg-slate-100 group-hover:bg-indigo-50"
                          }`}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Nama Skill */}
                      <span
                        className={`text-sm font-medium transition-colors ${isDarkMode
                            ? "text-slate-300 group-hover:text-white"
                            : "text-slate-600 group-hover:text-indigo-600"
                          }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      {/* Project Section */}
      <section
        id="projects"
        className={`py-24 overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3
                className={`text-3xl md:text-4xl font-extrabold ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                Project
              </h3>
            </div>

            <div className="flex gap-2">
              {/* Tombol Navigasi Slider Kiri */}
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border transition shadow-sm ${!canScrollLeft
                    ? "opacity-30 cursor-not-allowed " + (isDarkMode ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-white border-slate-200 text-slate-400")
                    : isDarkMode
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white"
                  }`}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Tombol Navigasi Slider Kanan */}
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`p-3 rounded-full border transition shadow-sm ${!canScrollRight
                    ? "opacity-30 cursor-not-allowed " + (isDarkMode ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-white border-slate-200 text-slate-400")
                    : isDarkMode
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white"
                  }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll} // <-- Tambahkan Event Listener ini
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`min-w-[320px] md:min-w-[400px] snap-center group rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${isDarkMode
                    ? "bg-slate-900 border-slate-800 hover:shadow-indigo-500/10"
                    : "bg-white border-slate-100 hover:shadow-indigo-500/10"
                  }`}
              >
                {/* Gambar Project */}
                <div
                  className={`h-64 w-full relative overflow-hidden border-b flex-shrink-0 ${isDarkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-slate-100 border-slate-100"
                    }`}
                >
                  {project.images ? (
                    <div
                      className={`flex h-full w-full items-center justify-center gap-1 p-2 ${isDarkMode ? "bg-slate-950" : "bg-slate-50"
                        }`}
                    >
                      {project.images.map((imgSrc, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex-1 h-full relative flex items-center justify-center"
                        >
                          <img
                            src={imgSrc}
                            alt="screenshot"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  ) : project.image ? (
                    <div
                      className={`w-full h-full flex items-center justify-center p-2 ${isDarkMode ? "bg-slate-950" : "bg-slate-50"
                        }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.color} relative p-6 flex items-center justify-center`}
                    >
                      <ExternalLink size={32} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Deskripsi Project */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4
                    className={`text-xl font-bold mb-3 transition ${isDarkMode
                        ? "text-white group-hover:text-indigo-400"
                        : "text-slate-900 group-hover:text-indigo-600"
                      }`}
                  >
                    {project.title}
                  </h4>
                  <div className="mb-6">
                    <p
                      className={`leading-relaxed text-sm transition-all duration-300 ${isDarkMode ? "text-slate-400" : "text-slate-600"
                        } ${expandedProjects[index] ? "" : "line-clamp-3"}`}
                    >
                      {project.desc}
                    </p>

                    {/* Logika: Muncul jika karakter lebih dari 150 */}
                    {project.desc.length > 150 && (
                      <button
                        onClick={() => toggleDesc(index)}
                        className="mt-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 focus:outline-none hover:underline text-left"
                      >
                        {expandedProjects[index] ? "Tutup" : "Selengkapnya..."}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-bold rounded-full border ${isDarkMode
                              ? "bg-slate-800 text-slate-300 border-slate-700"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                            }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-indigo-500 hover:text-indigo-400"
                      >
                        Lihat Project <ArrowRight size={16} className="ml-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-sm font-bold text-slate-500 cursor-not-allowed">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-24 relative overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-white"}`}
      >
        {/* Background Gradients */}
        {isDarkMode && (
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3
              className={`text-3xl md:text-4xl font-extrabold ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Experience
            </h3>
            <p
              className={`mt-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Where I've contributed and grown.
            </p>
          </div>

          <div className="relative">
            {/* Garis Vertikal Tengah */}
            <div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 ${isDarkMode
                  ? "bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800"
                  : "bg-gradient-to-b from-indigo-400 via-purple-400 to-slate-200"
                }`}
            ></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="hidden md:block w-1/2"></div>

                  {/* Titik Timeline */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 border-2 border-indigo-500 rounded-full z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)] ${isDarkMode ? "bg-slate-950" : "bg-white"
                      }`}
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Konten */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                    <div
                      className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}
                    >
                      {/* Logo & Judul */}
                      <div
                        className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row" : "md:flex-row-reverse flex-row"}`}
                      >
                        <div
                          className={`w-12 h-12 flex-shrink-0 rounded-lg p-1 flex items-center justify-center shadow-lg border ${isDarkMode
                              ? "bg-white border-slate-700"
                              : "bg-white border-slate-200"
                            }`}
                        >
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="text-slate-900 font-bold text-xs text-center">
                              {exp.company.substring(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4
                            className={`text-xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
                          >
                            {exp.company}
                          </h4>
                          <p className="text-indigo-500 text-sm font-medium mt-1">
                            {exp.type}
                          </p>
                        </div>
                      </div>

                      {/* Card Detail Experience */}
                      <div
                        className={`p-6 rounded-2xl border transition-all duration-300 w-full backdrop-blur-sm ${index % 2 === 0
                            ? "rounded-tl-none"
                            : "md:rounded-tr-none rounded-tl-none md:rounded-tl-2xl"
                          } ${isDarkMode
                            ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/30"
                            : "bg-slate-100 border-slate-200 hover:border-indigo-300 hover:shadow-md"
                          }`}
                      >
                        <h5
                          className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                        >
                          {exp.role}
                        </h5>
                        <div
                          className={`flex flex-col gap-1 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"} ${index % 2 === 0 ? "" : "md:items-end"}`}
                        >
                          <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-indigo-500" />{" "}
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <Globe size={14} className="text-indigo-500" />{" "}
                            {exp.location} • {exp.site}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-24 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h3
              className={`text-3xl md:text-4xl font-extrabold ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 group ${isDarkMode
                    ? "bg-slate-950 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900"
                    : "bg-slate-50 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30"
                  }`}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* LOGO INSTITUSI */}
                  <div
                    className={`w-16 h-16 p-2 rounded-2xl shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? "bg-white" : "bg-white"
                      }`}
                  >
                    {/* Jika ada logo pakai gambar, jika tidak pakai icon default */}
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <GraduationCap size={32} className="text-indigo-600" />
                    )}
                  </div>

                  {/* TAHUN */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${isDarkMode
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200 text-slate-700"
                      }`}
                  >
                    <Calendar size={14} /> {edu.year}
                  </span>
                </div>

                {/* NAMA SEKOLAH & GELAR */}
                <h4
                  className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  {edu.school}
                </h4>
                <p className="text-indigo-500 font-semibold mb-6 text-sm md:text-base">
                  {edu.degree}
                </p>

                {/* GPA / NILAI */}
                {edu.gpa && (
                  <div
                    className={`mt-auto pt-4 border-t flex items-center gap-2 ${isDarkMode ? "border-slate-800" : "border-slate-200"
                      }`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${isDarkMode ? "bg-indigo-500/20 text-indigo-300" : "bg-indigo-50 text-indigo-600"}`}
                    >
                      <AwardIcon size={16} />
                    </div>
                    <span
                      className={`font-bold text-sm ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                    >
                      {edu.gpa}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl transition-colors duration-300 ${isDarkMode
                ? "bg-slate-950 border border-slate-800"
                : "bg-slate-100 border border-slate-200"
              }`}
          >
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            {/* Text Paragraph */}
            <p
              className={`text-lg mb-10 max-w-2xl mx-auto relative z-10 ${isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
              Saya terbuka untuk peluang kerja <i>full-time</i> maupun{" "}
              <i> freelance</i>. Siap membantu Anda membangun sistem yang aman,
              efisien, dan dapat diandalkan.
            </p>

            {/* Container Tombol */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
              {/* Tombol Email */}
              <a
                href="mailto:rahmadanisuryanto05@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                <Mail size={20} /> Kirim Email
              </a>

              {/* Tombol WhatsApp */}
              <a
                href="https://wa.me/6285804700802"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </a>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center mt-4 md:mt-0">
                <a
                  href="https://github.com/Rahmadani05"
                  target="_blank"
                  className={`p-4 rounded-xl transition ${isDarkMode
                      ? "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                      : "bg-white text-slate-700 hover:text-indigo-600 shadow-sm border border-slate-200 hover:bg-slate-50"
                    }`}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahmadanisdp"
                  target="_blank"
                  className={`p-4 rounded-xl transition ${isDarkMode
                      ? "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                      : "bg-white text-slate-700 hover:text-indigo-600 shadow-sm border border-slate-200 hover:bg-slate-50"
                    }`}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t ${isDarkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className={`font-medium ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}
          >
            © 2026 Rahmadani Suryanto Dwi Putra. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

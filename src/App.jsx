import React, { useState, useRef } from "react";
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
} from "lucide-react";

import fotoProfile from "./bgbg.png";
import ecommerce from "./preview e-commerce.png";
import cinemaTicket1 from "./preview bioskop1.png";
import cinemaTicket2 from "./preview bioskop2.jpg";
import cinemaTicket3 from "./preview bioskop3.jpg";
import kinerja1 from "./kinerja1.jpg";
import kinerja2 from "./kinerja2.jpg";
import kinerja3 from "./kinerja3.jpg";
import eprofile from "./eprofile.jpeg"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const toggleDesc = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index], // Membalikkan status (buka jadi tutup, tutup jadi buka)
    }));
  };

  const education = [
    {
      degree: "Bachelor of Computer Science - Informatics Engineering",
      school: "Universitas 17 Agustus 1945 Surabaya",
      year: "2022 - 2026",
      gpa: "",
    },
    {
      degree: "Teknik Komputer dan Jaringan",
      school: "SMKN 7 Surabaya",
      year: "2018 - 2021",
      gpa: "",
    },
  ];

  //Projek
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
      images: [cinemaTicket1, cinemaTicket2, cinemaTicket3],
    },
    {
      title: "E-Kinerja Mobile App",
      desc: "An application designed to monitor daily performance and manage Personal Individual Performance Indicators (IKI). It uses RESTful API architecture for efficient data communication.",
      tech: ["Flutter", "MySQL"],
      link: "",
      color: "from-emerald-500 to-teal-500",
      images: [kinerja1, kinerja2, kinerja3],
    },
    {
      title: "E-Profile Website",
      desc: "A database website designed to record, manage, and display a complete list and data of all Community Health Centers in East Java province. It facilitates centralized data retrieval for agencies.",
      tech: ["Laravel", "MySQL"],
      link: "",
      color: "from-yellow-500 to-orange-500",
      image: eprofile,
    },
  ];

  const skills = [
    {
      name: "Languages",
      icon: <Code2 size={28} />,
      items: "PHP, Dart, JavaScript, Python",
      color: "text-blue-600 bg-blue-100",
    },
    {
      name: "Frameworks",
      icon: <Layers size={28} />,
      items: "Laravel, CodeIgniter, Yii2, Flutter, React.js, Next.js",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      name: "Web Skills",
      icon: <Globe size={28} />,
      items: "HTML5, CSS3, RESTful API, Bootstrap",
      color: "text-cyan-600 bg-cyan-100",
    },
    {
      name: "Database",
      icon: <Database size={28} />,
      items: "MySQL, PostgreSQL, MongoDB",
      color: "text-purple-600 bg-purple-100",
    },
    {
      name: "Tools",
      icon: <Wrench size={28} />,
      items: "Git, GitHub, VS Code, Postman",
      color: "text-rose-600 bg-rose-100",
    },
    {
      name: "Networking",
      icon: <Network size={28} />,
      items: "HTTP/HTTPS, TCP/IP, DNS, Routing & Switching, Mikrotik, Cisco",
      color: "text-indigo-600 bg-indigo-100",
    },
    {
      name: "DevOps",
      icon: <Cpu size={28} />,
      items: "Docker, CI/CD",
      color: "text-orange-600 bg-orange-100",
    },
    {
      name: "Soft Skills",
      icon: <Brain size={28} />,
      items:
        "Problem Solving, Communication, Teamwork, Critical Thinking, Time Management",
      color: "text-amber-600 bg-amber-100",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Decorartive Background */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10"></div>

      {/* Navabar */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a className="text-2xl font-extrabold tracking-tight text-slate-900">
            MyPortfolio<span className="text-indigo-600">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            {/* Added 'Education' to Menu */}
            {["About", "Skills", "Projects", "Education"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition shadow-lg shadow-slate-900/20"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl animate-in slide-in-from-top-5">
            {["About", "Skills", "Projects", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-indigo-600"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Section Utama */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Hire
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              My Name Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
                Rahmadani Suryanto Dwi Putra
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Undergraduate student at Universitas 17 Agustus 1945 Surabaya
              specializing in
              <span className="font-semibold text-indigo-600">
                {" "}
                Backend Development
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-600">
                Computer Networking
              </span>
              . I am always looking for opportunities to expand my knowledge and
              apply my skills in practical, real-world projects.
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
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-slate-300 hover:bg-slate-50 transition flex items-center justify-center"
              >
                Call Me
              </a>
            </div>

            <div className="pt-8 flex gap-6 justify-center lg:justify-start opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 w-24 bg-slate-300 rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-slate-300 rounded animate-pulse"></div>
              <div className="h-8 w-24 bg-slate-300 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-slate-100 rounded-[2rem] -rotate-6 border-2 border-slate-200"></div>
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
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
      <section id="skills" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {skill.name}
                </h4>
                <p className="text-slate-600 leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Project */}
      <section id="projects" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header & Tombol Navigasi */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Project
              </h3>
            </div>

            {/* Tombol Panah Kiri/Kanan */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Container Slider */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[320px] md:min-w-[400px] snap-center group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Fungsi Gambar */}
                <div className="h-56 w-full relative overflow-hidden bg-slate-200 group-hover:shadow-md transition-all">
                  {project.images ? (
                    <div className="flex h-full w-full bg-slate-900 gap-0.5">
                      {project.images.map((imgSrc, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex-1 h-full overflow-hidden relative"
                        >
                          <img
                            src={imgSrc}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>
                        </div>
                      ))}
                    </div>
                  ) : project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>
                    </>
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.color} relative p-6 flex items-center justify-center`}
                    >
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-xl text-white">
                        <ExternalLink size={32} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bagian Deskripsi & Tombol */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                    {project.title}
                  </h4>
                  <div className="mb-6">
                    <p 
                      className={`text-slate-600 leading-relaxed text-sm transition-all duration-300 ${
                        expandedProjects[index] ? "" : "line-clamp-3"
                      }`}
                    >
                      {project.desc}
                    </p>
                    
                    <button
                        onClick={() => toggleDesc(index)}
                        className="mt-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 focus:outline-none hover:underline"
                      >
                        {expandedProjects[index] ? "Tutup" : "Selengkapnya..."}
                    </button>
                  </div>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-xs font-bold text-slate-600 rounded-full border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tombol Link */}
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800">
                        Lihat Project <ArrowRight size={16} className="ml-1" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-sm font-bold text-slate-400 cursor-not-allowed">
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

      {/* Section Pendidikan */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Education
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={32} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">
                    <Calendar size={14} /> {edu.year}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  {edu.school}
                </h4>
                <p className="text-indigo-600 font-semibold mb-4">
                  {edu.degree}
                </p>
                <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                  {edu.desc}
                </p>

                {edu.gpa && (
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <span className="font-bold text-slate-800">{edu.gpa}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Kontak */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Saya terbuka untuk peluang kerja <i>full-time</i> maupun
              <i> freelance</i>. Siap membantu Anda membangun sistem yang aman,
              efisien, dan dapat diandalkan untuk pertumbuhan bisnis Anda.
            </p>

            {/* Container Tombol */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
              <a
                href="mailto:rahmadanisuryanto05@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Kirim Email
              </a>

              <a
                href="https://wa.me/6285804700802"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition flex items-center justify-center gap-2"
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

              <div className="flex gap-4 justify-center mt-4 md:mt-0">
                <a
                  href="https://github.com/Rahmadani05"
                  className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition"
                  target="_blank"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahmadanisdp"
                  className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition"
                  target="_blank"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 font-medium">
            © 2026 Rahmadani Suryanto Dwi Putra. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

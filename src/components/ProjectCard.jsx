import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

export const ProjectCard = ({ project, isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${
        isDarkMode
          ? "bg-slate-900 border-slate-800 hover:shadow-indigo-500/10"
          : "bg-white border-slate-100 hover:shadow-indigo-500/10"
      }`}
    >
      {/* Gambar / Logo Project */}
      <div
        className={`h-64 w-full relative overflow-hidden border-b flex-shrink-0 transition-colors duration-300 ${
          isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-100"
        }`}
      >
        {project.images ? (
          <div
            className={`flex h-full w-full items-center justify-center gap-1 p-2 ${
              isDarkMode ? "bg-slate-950" : "bg-slate-50"
            }`}
          >
            {project.images.map((imgSrc, imgIndex) => (
              <div
                key={imgIndex}
                className="flex-1 h-full relative flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} preview ${imgIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <div
            className={`w-full h-full flex items-center justify-center p-4 transition-colors duration-300 ${
              isDarkMode ? "bg-slate-950" : "bg-slate-50"
            }`}
          >
            {project.isLogo ? (
              <div
                className={`w-full h-full max-h-[85%] max-w-[92%] rounded-xl flex items-center justify-center p-6 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/95 shadow-md shadow-black/25 border border-slate-700/60"
                    : "bg-white shadow-sm border border-slate-200/80"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.color} relative p-6 flex items-center justify-center`}
          >
            <ExternalLink size={32} className="text-white" />
          </div>
        )}
      </div>

      {/* Konten Project */}
      <div className="p-8 flex flex-col flex-grow">
        <h4
          className={`text-xl font-bold mb-3 transition line-clamp-2 ${
            isDarkMode
              ? "text-white group-hover:text-indigo-400"
              : "text-slate-900 group-hover:text-indigo-600"
          }`}
          title={project.title}
        >
          {project.title}
        </h4>

        <div className="mb-6">
          <p
            className={`leading-relaxed text-sm transition-all duration-300 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            } ${isExpanded ? "" : "line-clamp-3"}`}
          >
            {project.desc}
          </p>

          {project.desc.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 focus:outline-none hover:underline text-left cursor-pointer"
            >
              {isExpanded ? "Tutup" : "Selengkapnya..."}
            </button>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-bold rounded-full border ${
                  isDarkMode
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
              className="inline-flex items-center text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              Lihat Project <ArrowRight size={16} className="ml-1" />
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                isDarkMode
                  ? "bg-slate-800/80 border-slate-700 text-slate-400"
                  : "bg-slate-100 border-slate-200 text-slate-600"
              }`}
            >
              Private / Enterprise (NDA)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

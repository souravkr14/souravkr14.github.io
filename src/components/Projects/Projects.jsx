import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "Built a scalable AI-powered resume generation platform with modular architecture, enabling fast and reliable PDF creation.",
    highlights: [
      "Designed modular backend for concurrent resume generation",
      "Optimized MongoDB schema for complex profiles",
      "Reduced PDF creation time by 60%",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "AI"],
    link: "https://github.com/sourav-kr14/ai-resume-builder",
    liveLink: null,
  },
  {
    title: "AI Disease Prediction",
    description:
      "Machine learning–based system delivering real-time disease predictions via deployed API.",
    highlights: [
      "Optimized Random Forest, SVM & Naive Bayes",
      "Built Flask-based real-time API",
      "Robust symptom-based prediction pipeline",
    ],
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "ML"],
    link: "https://github.com/sourav-kr14/AI-Powered-Disease-Prediction-System",
    liveLink:
      "https://ai-powered-disease-prediction-syste.vercel.app/",
  },
  {
    title: "AI-PDF Intelligence",
    description:
      "Document intelligence system using RAG pipeline to extract, search, and summarize unstructured PDFs.",
    highlights: [
      "Built RAG pipeline with embeddings",
      "Semantic search for context-aware retrieval",
      "Automated PDF parsing & summarization",
    ],
    tech: ["Python", "LangChain", "Vector DB", "RAG", "NLP"],
    link: "https://github.com/sourav-kr14/Chat-To-PDF",
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* HERO STYLE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Glow */}
      <div className="absolute left-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world systems showcasing frontend engineering, AI integration,
            and scalable architecture.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] p-10 shadow-2xl border border-white/30 dark:border-slate-800 hover:-translate-y-3 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-500"
            >
              {/* TITLE */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              {/* HIGHLIGHTS */}
              <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-3 mb-8 flex-grow">
                {project.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-100/50 dark:border-indigo-800/20 hover:scale-105 transition duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiGithub /> Source
                </a>

                {project.liveLink && (
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
                  >
                    Live Demo <FiExternalLink />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

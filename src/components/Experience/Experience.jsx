import React from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiExternalLink,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      role: "Software Development Engineer (Intern)",
      company: "Bluestock Fintech",
      location: "Remote",
      duration: "Dec 2025 – Jan 2026",
      certificateLink:
        "https://drive.google.com/file/d/1y0NxS2ahzHCYg7PqnUTTCHxzdnFouXa7/view?usp=sharing",
      contributions: [
        "Engineered real-time preview features and cross-section state management ensuring <span class='font-bold text-indigo-600 dark:text-indigo-400'>100%</span> data consistency across financial modules.",
        "Designed responsive React UI dashboards, improving navigation efficiency by <span class='font-bold text-indigo-600 dark:text-indigo-400'>25%</span>.",
        "Participated in Agile sprints and peer code reviews, delivering clean, maintainable production-ready code.",
      ],
      techStack: ["React", "JavaScript", "Tailwind CSS", "Git", "Node.js"],
    },
    {
      role: "Software Development Engineer (Intern)",
      company: "Armus Digital",
      location: "Remote",
      duration: "June 2025 – July 2025",
      certificateLink:
        "https://drive.google.com/file/d/1h8bZ00p9LNKi6W5t_wmCYQADvKwYEj8C/view?usp=sharing",
      contributions: [
        "Developed secure authentication flows across frontend and backend layers.",
        "Optimized rendering cycles reducing load latency by <span class='font-bold text-indigo-600 dark:text-indigo-400'>25%</span>.",
        "Resolved full-stack defects improving overall performance by <span class='font-bold text-indigo-600 dark:text-indigo-400'>15%</span>.",
      ],
      techStack: ["React", "Node.js", "Express.js", "REST APIs", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative pb-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="absolute right-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Industry exposure building scalable, performance-driven web systems
            in production environments.
          </p>
        </motion.div>

        <div className="relative space-y-16">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-3 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white dark:border-black shadow-lg"></div>

              <div className="group bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] p-10 shadow-2xl border border-white/30 dark:border-slate-800 hover:-translate-y-2 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                        {exp.company}
                      </p>

                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />

                      <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <FiMapPin /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700 text-gray-600 dark:text-gray-400 text-sm font-semibold">
                      <FiCalendar /> {exp.duration}
                    </div>

                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Certificate <FiExternalLink />
                    </a>
                  </div>
                </div>

                {/* Contributions */}
                <ul className="space-y-6 mb-10">
                  {exp.contributions.map((text, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                    >
                      <FiCheckCircle className="mt-1.5 text-indigo-500 flex-shrink-0 text-xl" />
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-8 border-t border-gray-100 dark:border-slate-800">
                  <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-100/50 dark:border-indigo-800/20 hover:scale-105 transition duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

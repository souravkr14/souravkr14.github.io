import React from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Trainee",
      company: "Revature",
      location: "Hybrid",
      duration: "Mar 2026 – Present",
      current: true,
      contributions: [
        {
          text: "Undergoing intensive training in ",
          highlight: "enterprise software development",
          suffix: " with focus on scalable backend systems.",
        },
        {
          text: "Strengthening problem-solving skills through advanced ",
          highlight: "Data Structures & Algorithms",
          suffix: " and real-world coding challenges.",
        },
        {
          text: "Developing enterprise-grade applications using ",
          highlight: "Java, Spring ecosystem, and microservices architecture",
          suffix: " following industry best practices.",
        },
        {
          text: "Working within ",
          highlight: "Agile development environments",
          suffix: " and collaborative engineering workflows.",
        },
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "DSA",
        "Git",
        "REST APIs",
      ],
    },
    {
      role: "Software Development Engineer (Intern)",
      company: "Bluestock Fintech",
      location: "Remote",
      duration: "Dec 2025 – Jan 2026",
      certificateLink:
        "https://drive.google.com/file/d/1y0NxS2ahzHCYg7PqnUTTCHxzdnFouXa7/view",
      contributions: [
        {
          text: "Engineered real-time preview features ensuring ",
          highlight: "100%",
          suffix: " data consistency.",
        },
        {
          text: "Improved UI efficiency by ",
          highlight: "25%",
          suffix: " via optimized dashboards.",
        },
      ],
      techStack: ["React", "JavaScript", "Tailwind CSS", "Git", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="relative py-12 sm:py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Experience
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Building strong engineering fundamentals through hands-on product
            work, backend systems, and collaborative development environments.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:left-4 before:top-4 before:bottom-4 before:w-px before:bg-slate-200 dark:before:bg-white/[0.08] sm:before:left-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-10 sm:pl-16"
            >
              {/* Timeline Marker */}
              <div className="absolute left-2 top-7 -translate-x-1/2 sm:left-4">
                {exp.current ? (
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-indigo-600 dark:border-slate-900 dark:bg-indigo-400" />
                  </span>
                ) : (
                  <span className="flex h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-300 dark:border-slate-900 dark:bg-slate-600" />
                )}
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-8">
                {/* Header row */}
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 dark:border-white/[0.06] md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>

                      {exp.current && (
                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <FiCalendar className="text-slate-400" />
                        {exp.duration}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin className="text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                    >
                      <span>Certificate</span>
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Contributions */}
                <ul className="mt-6 space-y-3">
                  {exp.contributions.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                        <FiCheck size={11} strokeWidth={3} />
                      </span>
                      <span>
                        {c.text}
                        {c.highlight && (
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {c.highlight}
                          </span>
                        )}
                        {c.suffix ?? ""}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-7 flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-white/[0.06]">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200/80 bg-white/80 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
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

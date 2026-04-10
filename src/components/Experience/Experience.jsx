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

  const Contribution = ({ item }) => (
    <li className="flex items-start gap-4 text-base leading-7 text-slate-700 dark:text-slate-300">
      <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-300">
        <FiCheckCircle className="text-sm" />
      </span>

      <span>
        {item.text}
        {item.highlight && (
          <span className="font-semibold text-indigo-600 dark:text-indigo-300">
            {item.highlight}
          </span>
        )}
        {item.suffix ?? ""}
      </span>
    </li>
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-10 dark:bg-[#040816]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            Professional journey
          </span> */}

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Building strong engineering fundamentals through hands-on product
            work, backend systems, and collaborative development environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/70 via-violet-400/40 to-transparent md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="relative md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-10 hidden md:flex">
                <span className="h-8 w-8 rounded-full border border-indigo-400/30 bg-[#0b1124] shadow-[0_0_0_6px_rgba(99,102,241,0.08)]" />
              </div>

              {/* Card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)] dark:border-white/10 dark:bg-slate-900/45 md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Header */}
                  <div className="mb-8 flex flex-col gap-6 border-b border-slate-200/70 pb-8 dark:border-white/10 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>

                        {exp.current && (
                          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-base font-semibold text-indigo-600 dark:text-indigo-300">
                        {exp.company}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-2">
                          <FiCalendar className="text-indigo-400" />
                          {exp.duration}
                        </span>

                        <span className="flex items-center gap-2">
                          <FiMapPin className="text-indigo-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/70 px-5 text-sm font-medium text-slate-800 transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200"
                      >
                        Certificate
                        <FiExternalLink />
                      </a>
                    )}
                  </div>

                  {/* Contributions */}
                  <ul className="mb-8 space-y-4">
                    {exp.contributions.map((c, i) => (
                      <Contribution key={i} item={c} />
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/20 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-300"
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

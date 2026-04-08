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
    <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300 text-lg">
      <FiCheckCircle className="mt-1 text-indigo-500 text-xl" />
      <span>
        {item.text}
        {item.highlight && (
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {item.highlight}
          </span>
        )}
        {item.suffix ?? ""}
      </span>
    </li>
  );

  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern" />

      {/* Glow */}
      <div className="absolute right-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 blur-[160px] opacity-20" />

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {/* STRONGER TIMELINE */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-0 top-4">
                <span className="w-5 h-5 rounded-full bg-indigo-600 shadow-lg animate-pulse" />
              </div>

              {/* CARD */}
              <div
                className="group relative p-10 rounded-[2rem]
                bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl
                border border-white/20 dark:border-slate-800
                shadow-2xl hover:-translate-y-3 transition duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[2rem] transition" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-indigo-500 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <FiCalendar /> {exp.duration}
                    </div>
                  </div>

                  {/* Contributions */}
                  <ul className="space-y-4 mb-8">
                    {exp.contributions.map((c, i) => (
                      <Contribution key={i} item={c} />
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-semibold rounded-xl
                        bg-white/60 dark:bg-slate-800/60
                        border border-white/20 dark:border-slate-700
                        hover:scale-105 hover:bg-indigo-500 hover:text-white
                        transition-all duration-300"
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

import React from "react";
import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiOpenjdk,
  SiKubernetes,
  SiGithubactions,
  SiApachekafka,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";
import { FiCode, FiActivity } from "react-icons/fi";

const iconMap = {
  React: {
    icon: <SiReact />,
    color: "text-cyan-500",
  },

  JavaScript: {
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },

  HTML: {
    icon: <SiHtml5 />,
    color: "text-orange-500",
  },

  CSS: {
    icon: <SiCss3 />,
    color: "text-blue-500",
  },

  "Tailwind CSS": {
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },

  Java: {
    icon: <SiOpenjdk />,
    color: "text-red-600",
  },

  Python: {
    icon: <SiPython />,
    color: "text-yellow-500",
  },

  "Spring Boot": {
    icon: <FiActivity />,
    color: "text-green-500",
  },

  "REST APIs": {
    icon: <FiCode />,
    color: "text-indigo-500",
  },

  "JWT Auth": {
    icon: <FiActivity />,
    color: "text-purple-500",
  },

  Kafka: {
    icon: <SiApachekafka />,
    color: "text-orange-500",
  },

  MongoDB: {
    icon: <SiMongodb />,
    color: "text-green-600",
  },

  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-blue-600",
  },

  MySQL: {
    icon: <SiMysql />,
    color: "text-blue-400",
  },

  Docker: {
    icon: <SiDocker />,
    color: "text-blue-500",
  },

  Kubernetes: {
    icon: <SiKubernetes />,
    color: "text-blue-500",
  },

  Azure: {
    icon: <FaMicrosoft />,
    color: "text-sky-500",
  },

  "GitHub Actions": {
    icon: <SiGithubactions />,
    color: "text-gray-300",
  },

  Git: {
    icon: <SiGit />,
    color: "text-red-500",
  },

  GitHub: {
    icon: <SiGithub />,
    color: "text-gray-300",
  },

  Postman: {
    icon: <SiPostman />,
    color: "text-orange-500",
  },
  Spring: {
    icon: <FiActivity />,
    color: "text-green-400",
  },

  Microservices: {
    icon: <FiCode />,
    color: "text-pink-500",
  },

  Hibernate: {
    icon: <FiActivity />,
    color: "text-yellow-500",
  },
};

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
  },

  {
    title: "Frontend Engineering",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },

  {
    title: "Backend & Microservices",
    skills: [
      "Java",
      "Spring Boot",
      "Spring",
      "REST APIs",
      "JWT Auth",
      "Hibernate",
      "Kafka",
      "Microservices",
    ],
  },

  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Azure",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-10 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* GLOW */}
      <div className="absolute right-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Java Full Stack Developer
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Building scalable Java full stack and microservices applications
            with modern cloud and DevOps technologies.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] p-10 shadow-2xl border border-white/30 dark:border-slate-800 overflow-hidden hover:-translate-y-3 transition-all duration-500"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transition duration-500"></div>

              {/* TITLE */}
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="relative flex flex-wrap gap-4">
                {group.skills.map((skill, i) => {
                  const item = iconMap[skill];

                  return (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-2xl
                      bg-white/60 dark:bg-slate-800/60 backdrop-blur-md
                      text-gray-800 dark:text-gray-200
                      font-semibold border border-white/20 dark:border-slate-700
                      shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span className={`text-lg ${item.color}`}>
                        {item.icon}
                      </span>

                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

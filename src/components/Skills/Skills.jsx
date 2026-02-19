import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiDocker,
  SiOpenjdk,
} from "react-icons/si";
import { FiCode, FiActivity } from "react-icons/fi";

const iconMap = {
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  "REST APIs": <FiCode />,
  "JWT Auth": <FiActivity />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Python: <SiPython />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  "Scikit-learn": <SiScikitlearn />,
  EDA: <FiActivity />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Postman: <SiPostman />,
  Firebase: <SiFirebase />,
  Docker: <SiDocker />,
  Java: <SiOpenjdk />,
};

const skillGroups = [
  {
    title: "Programming & Foundations",
    skills: ["Java", "Python"],
  },
  {
    title: "Frontend Engineering",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Systems",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "EDA"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Docker"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pb-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* HERO GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Glow */}
      <div className="absolute right-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

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
              Technical Arsenal
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A focused toolkit for frontend engineering, scalable backend
            systems, and AI-powered applications.
          </p>
        </motion.div>

        {/* SKILL GROUP GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] p-10 shadow-2xl border border-white/30 dark:border-slate-800 hover:-translate-y-2 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-500"
            >
              {/* Group Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-2xl
                    bg-indigo-50 dark:bg-indigo-900/30
                    text-indigo-700 dark:text-indigo-300
                    font-semibold border border-indigo-100/50 dark:border-indigo-800/30
                    transition-all duration-200"
                  >
                    <span className="text-lg">{iconMap[skill]}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

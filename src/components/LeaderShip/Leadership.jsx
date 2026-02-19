import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiCode, FiCheck } from "react-icons/fi";

const leadership = [
  {
    title: "Club Administrator",
    org: "ALFA Coding Club",
    icon: <FiUsers />,
    points: [
      "Led Web Development workshop for 50+ students",
      "Coordinated TECH SAMAAROH tech fest with 500+ participants",
      "Managed cross-team execution and event logistics",
    ],
  },
  {
    title: "Head Boy",
    org: "Mount Assisi School",
    icon: <FiAward />,
    points: [
      "Represented 800+ students in leadership discussions",
      "Led student committees for major annual events",
      "Organized school-wide initiatives and outreach programs",
    ],
  },
  {
    title: "Problem Solving",
    org: "Personal Milestone",
    icon: <FiCode />,
    points: [
      "Solved 150+ problems across coding platforms",
      "Strengthened DSA fundamentals and analytical thinking",
      "Maintained consistency alongside internships & academics",
    ],
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative pb-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* HERO STYLE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Glow */}
      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Leadership & Impact
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Ownership, collaboration, and initiative beyond individual
            technical contributions.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] p-10 shadow-2xl border border-white/30 dark:border-slate-800 hover:-translate-y-3 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-8 text-sm tracking-wide">
                {item.org}
              </p>

              {/* Points */}
              <ul className="space-y-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className="mt-1 text-indigo-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;

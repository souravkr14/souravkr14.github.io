import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiCode, FiCheck } from "react-icons/fi";

const leadership = [
  {
    title: "Club Administrator",
    org: "ALFA Coding Club",
    institution: "TIPS, Dwarka, New Delhi",
    icon: <FiUsers size={20} />,
    points: [
      "Led Web Development workshop for 50+ students",
      "Coordinated TECH SAMAAROH tech fest with 500+ participants",
      "Managed cross-team execution and event logistics",
    ],
  },
  {
    title: "Head Boy",
    org: "Mount Assisi School",
    icon: <FiAward size={20} />,
    points: [
      "Represented 800+ students in leadership discussions",
      "Led student committees for major annual events",
      "Organized school-wide initiatives and outreach programs",
    ],
  },
  {
    title: "Problem Solving",
    org: "Personal Milestone",
    icon: <FiCode size={20} />,
    points: [
      "Solved 150+ problems across coding platforms",
      "Strengthened DSA fundamentals and analytical thinking",
      "Maintained consistency alongside internships & academics",
    ],
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="relative py-12 sm:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Leadership & Impact
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Moments where ownership, teamwork, and consistency created impact
            beyond writing code.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-7"
            >
              {/* Icon Container */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200/60 bg-indigo-50 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
                {item.icon}
              </div>

              {/* Title & Organization */}
              <div className="mt-5">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {item.org}
                </p>

                {item.institution && (
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    {item.institution}
                  </p>
                )}
              </div>

              {/* Points */}
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5 dark:border-white/[0.06]">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <FiCheck size={11} strokeWidth={3} />
                    </span>
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

import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiCode, FiCheck } from "react-icons/fi";

const leadership = [
  {
    title: "Club Administrator",
    org: "ALFA Coding Club",
    institution: "TIPS, Dwarka, New Delhi",
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
      className="relative overflow-hidden bg-white py-10 dark:bg-[#040816]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            Beyond technical execution
          </span> */}

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Leadership & Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Moments where ownership, teamwork, and consistency created impact
            beyond writing code.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)] dark:border-white/10 dark:bg-slate-900/45"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-200/60 bg-indigo-100 text-2xl text-indigo-600 transition duration-300 group-hover:scale-110 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                  {item.title}
                </h3>

                {/* Meta */}
                <div className="mt-3 mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                    {item.org}
                  </p>

                  {item.institution && (
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {item.institution}
                    </p>
                  )}
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-300">
                        <FiCheck className="text-sm" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

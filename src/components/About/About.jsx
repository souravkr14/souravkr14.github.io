import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen, FiBriefcase, FiZap } from "react-icons/fi";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const infoCards = [
    {
      icon: <FiBriefcase />,
      title: "Software Engineer Trainee",
      subtitle: "Revature • 2026 – Present",
      label: "Current Role",
      iconClass:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
    },
    {
      icon: <FiMapPin />,
      title: "Ranchi, India",
      subtitle: "IST (UTC +5:30)",
      label: "Location",
      iconClass:
        "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
    },
    {
      icon: <FiZap />,
      title: "Software Development",
      subtitle: "Java | Microservices | Full Stack | ML | DL",
      label: "Current Focus",
      iconClass:
        "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
    },
  ];

  const cardBase =
    "group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_80px_rgba(99,102,241,0.18)] dark:border-white/10 dark:bg-slate-900/45";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-10 dark:bg-[#040816]"
    >
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
            A quick introduction
          </span> */}

          <h2 className="mt-6 text-4xl font-black sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A snapshot of my academic path, current role, and the engineering
            direction I am actively growing into.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main About */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            className={`lg:col-span-7 ${cardBase} p-10`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
                Profile
              </p>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                <p>
                  I&apos;m{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                    Sourav Kumar
                  </span>
                  , a final year MCA student at{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    BIT Mesra
                  </span>{" "}
                  and currently working as a{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                    Software Engineer Trainee at Revature
                  </span>
                  .
                </p>

                <p>
                  I build scalable, high-performance web applications by
                  combining modern frontend experiences with reliable backend
                  systems.
                </p>

                <p>
                  My current learning is focused on enterprise Java, Data
                  Structures and Algorithms, microservices architecture, and
                  production-oriented backend engineering.
                </p>

                <p>
                  I also explore{" "}
                  <span className="font-medium text-indigo-600 dark:text-indigo-300">
                    Machine Learning and Deep Learning
                  </span>{" "}
                  to create practical, intelligent products that solve real user
                  problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-[0_28px_80px_rgba(99,102,241,0.28)] transition-all duration-500 hover:-translate-y-3 lg:col-span-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-md transition duration-300 group-hover:scale-110">
                <FiBookOpen />
              </div>

              <h3 className="mt-8 text-3xl font-bold">Education</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                Academic foundations that shaped my software engineering
                journey.
              </p>

              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-white/30 pl-5">
                  <p className="text-lg font-semibold">MCA - BIT Mesra</p>
                  <p className="mt-1 text-sm text-white/80">
                    2024 - 2026 (Expected)
                  </p>
                </div>

                <div className="border-l-2 border-white/30 pl-5">
                  <p className="text-lg font-semibold">BCA - GGSIPU Delhi</p>
                  <p className="mt-1 text-sm text-white/80">Graduated 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 text-[120px] font-black tracking-tight text-white/10 transition-transform duration-700 group-hover:scale-110">
              EDU
            </div>
          </motion.div>

          {/* Info Cards */}
          {infoCards.map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              className={`lg:col-span-4 ${cardBase}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-5">
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-xl transition duration-300 group-hover:scale-110 ${item.iconClass}`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

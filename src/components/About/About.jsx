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

  const cardBase =
    "group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden";

  return (
    <section
      id="about"
      className="relative pb-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* GLOW */}
      <div className="absolute left-[-200px] top-1/3 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>
      <div className="absolute right-[-200px] bottom-[-150px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[160px] opacity-20"></div>

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
              About Me
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A snapshot of my academic journey, industry exposure, and current
            technical direction.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ABOUT */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`lg:col-span-7 p-10 ${cardBase}`}
          >
            {/* subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 transition duration-500"></div>

            <div className="relative space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p>
                I’m{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Sourav Kumar
                </span>
                , a final year MCA student at{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  BIT Mesra
                </span>{" "}
                and currently working as a{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Software Engineer Trainee at Revature
                </span>
                .
              </p>

              <p>
                I build scalable, high-performance web applications — combining
                modern React frontends with robust backend systems.
              </p>

              <p>
                Currently undergoing enterprise-level training in Java, Data
                Structures & Algorithms, microservices architecture, and
                scalable backend systems.
              </p>

              <p>
                I also work with{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  Machine Learning & Deep Learning
                </span>{" "}
                to create intelligent, production-ready AI-powered products.
              </p>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="lg:col-span-5 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-3 transition-all duration-500"
          >
            <div className="relative z-10 space-y-8">
              <div>
                <FiBookOpen className="text-3xl mb-4 opacity-90 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-white/30 pl-5">
                  <p className="text-lg font-semibold">MCA – BIT Mesra</p>
                  <p className="text-sm opacity-80">2024 – 2026 (Expected)</p>
                </div>

                <div className="border-l-2 border-white/30 pl-5">
                  <p className="text-lg font-semibold">BCA – GGSIPU Delhi</p>
                  <p className="text-sm opacity-80">Graduated 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 text-white/10 text-[140px] font-black tracking-widest group-hover:scale-110 transition-transform duration-700">
              EDU
            </div>
          </motion.div>

          {/* CARDS */}
          {[
            {
              icon: <FiBriefcase />,
              title: "Software Engineer Trainee",
              subtitle: "Revature • 2026 – Present",
              label: "Current Role",
              color: "indigo",
            },
            {
              icon: <FiMapPin />,
              title: "Ranchi, India",
              subtitle: "IST (UTC +5:30)",
              label: "Location",
              color: "red",
            },
            {
              icon: <FiZap />,
              title: "Software Development",
              subtitle: "Java | Microservices | Full Stack | ML | DL",
              label: "Current Focus",
              color: "orange",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`lg:col-span-4 p-8 ${cardBase}`}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`p-4 rounded-2xl bg-${item.color}-100 dark:bg-${item.color}-900/40 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                    {item.label}
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
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

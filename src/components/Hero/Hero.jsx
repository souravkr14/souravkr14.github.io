import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* GLOW BLOBS */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative container mx-auto px-6 md:w-[85%] grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Namaste! Welcome to my space.
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-7xl font-black tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sourav Kumar
            </span>
          </motion.h1>

          {/* DYNAMIC TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl mt-6 font-bold text-gray-700 dark:text-gray-300 h-[40px]"
          >
            Designing
            <TypeAnimation
              sequence={[
                " Scalable Full-Stack Systems",
                2000,
                " AI-Powered Web Applications",
                2000,
                " Intelligent Software Products",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="span"
              className="text-indigo-600 dark:text-indigo-400 ml-2"
            />
          </motion.h2>

          {/* BIO */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            Software Engineer Trainee at{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Revature
            </span>{" "}
            • MCA @{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              BIT Mesra
            </span>{" "}
            <br />
            Building scalable web systems and intelligent AI-powered
            applications.
          </motion.p>

          {/* METRICS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-10 mt-10 text-center"
          >
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">150+</p>
              <p className="text-sm text-gray-500">DSA Problems</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">2</p>
              <p className="text-sm text-gray-500">Internships</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">4+</p>
              <p className="text-sm text-gray-500">Web & AI Projects</p>
            </div>
          </motion.div>

          {/* TECH STACK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {[
              "Java",
              "Python",
              "React",
              "Node.js",
              "Express.js",
              "Machine Learning",
              "Deep Learning",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-xs font-semibold bg-gray-100 dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-12 flex-wrap"
          >
            <a
              href="#projects"
              className="flex items-center justify-center px-8 h-12 rounded-xl
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold shadow-md
              hover:shadow-lg hover:-translate-y-1
              transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="/Sourav_Kumar_Resume.pdf"
              download
              className="flex items-center justify-center px-8 h-12 rounded-xl
              border border-indigo-500 text-indigo-600 dark:text-indigo-400
              hover:bg-indigo-50 dark:hover:bg-slate-800
              hover:-translate-y-1 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4 text-xl"
          >
            {[
              { icon: <FiGithub />, link: "https://github.com/sourav-kr14" },
              {
                icon: <FiLinkedin />,
                link: "https://www.linkedin.com/in/thesouravv/",
              },
              { icon: <FiMail />, link: "mailto:souravkr93@gmail.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="flex items-center justify-center w-12 h-12 rounded-xl
                bg-white/20 dark:bg-white/10 backdrop-blur-md
                border border-white/20 dark:border-white/10
                hover:scale-110 hover:bg-indigo-500 hover:text-white
                transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* GLOW */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* IMAGE */}
            <div className="relative bg-white/30 dark:bg-slate-900/40 backdrop-blur-2xl p-2 rounded-full shadow-2xl border border-white/20 dark:border-white/10">
              <img
                src="/3D_Self2.png"
                alt="Sourav Kumar"
                className="rounded-full w-[320px] h-[320px] object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

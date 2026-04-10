import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const stats = [
    { value: "150+", label: "DSA Problems" },
    { value: "2", label: "Internships" },
    { value: "4+", label: "Web & AI Projects" },
  ];

  const techStack = [
    "Java",
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "Machine Learning",
    "Deep Learning",
  ];

  const socials = [
    {
      icon: <FiGithub />,
      link: "https://github.com/sourav-kr14",
      label: "GitHub",
      hoverClass:
        "hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-white dark:hover:text-slate-900 dark:hover:border-white",
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/thesouravv/",
      label: "LinkedIn",
      hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      icon: <FiMail />,
      link: "mailto:souravkr93@gmail.com",
      label: "Email",
      hoverClass: "hover:bg-red-400 hover:text-white hover:border-red-400",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-24 dark:bg-[#040816]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] dark:opacity-[0.12]" />
      <div className="absolute right-[-180px] top-[-80px] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px]" />
      <div className="absolute left-[-160px] bottom-[-100px] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[140px]" />

      <div className="relative container mx-auto grid items-center gap-16 px-6 md:w-[85%] lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left */}
        <div>
          {/* <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Namaste! Welcome to my space.
          </motion.div> */}
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-slate-900 dark:text-white">Sourav</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Kumar
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-3xl"
          >
            Building
            <TypeAnimation
              sequence={[
                " scalable full-stack systems",
                2000,
                " AI-powered web applications",
                2000,
                " intelligent software products",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="span"
              className="ml-2 text-indigo-600 dark:text-indigo-300"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            Software Engineer Trainee at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Revature
            </span>{" "}
            and MCA student at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              BIT Mesra
            </span>
            . I focus on scalable backend systems, modern web apps, and
            practical AI-powered products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-4"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/50 p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/45"
              >
                <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex max-w-2xl flex-wrap gap-3"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition duration-300 hover:border-indigo-400/30 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 transition duration-300 hover:scale-[1.02]"
            >
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="/Sourav_Kumar_Resume.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-xl border border-indigo-400/30 bg-white/60 px-8 text-sm font-semibold text-indigo-600 backdrop-blur-md transition duration-300 hover:bg-indigo-50 dark:bg-slate-900/45 dark:text-indigo-300 dark:hover:bg-slate-800"
            >
              Download Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-4 text-xl"
          >
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.link}
                aria-label={item.label}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/50 text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/45 dark:text-slate-300 ${item.hoverClass}`}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="group relative">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-fuchsia-500/30 blur-3xl transition duration-500 group-hover:opacity-90" />

            <div className="relative rounded-full border border-white/20 bg-white/50 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/45">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-indigo-500/10" />

              <img
                src="/3D_Self2.png"
                alt="Sourav Kumar"
                className="relative h-[320px] w-[320px] rounded-full object-cover object-top sm:h-[380px] sm:w-[380px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

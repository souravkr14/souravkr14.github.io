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
    "Spring Boot",
    "React",
    "JavaScript",
    "Python",
    "MySQL",
    "MongoDB",
    "Microservices",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "Azure",
    "LangChain",
    "Ollama",
  ];

  const socials = [
    {
      icon: <FiGithub size={18} />,
      link: "https://github.com/sourav-kr14",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin size={18} />,
      link: "https://www.linkedin.com/in/thesouravv/",
      label: "LinkedIn",
    },
    {
      icon: <FiMail size={18} />,
      link: "mailto:krsourav.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              <span className="block text-slate-900 dark:text-white">Sourav</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-400 dark:from-indigo-400 dark:via-violet-400 dark:to-sky-400 bg-clip-text text-transparent">
                Kumar
              </span>
            </motion.h1>

            {/* Sub-headline with Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl"
            >
              <span>Building</span>
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
                className="ml-2 font-bold text-indigo-600 dark:text-indigo-400"
              />
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
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

            {/* Metrics / Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none transition-transform hover:-translate-y-0.5"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex max-w-xl flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium font-mono text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:bg-indigo-600 hover:shadow-indigo-600/25 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
              >
                <span>View Projects</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Sourav_Kumar_Resume.pdf"
                download
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/80 px-7 text-sm font-semibold text-slate-800 backdrop-blur-sm transition duration-200 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex items-center gap-3"
            >
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Hero Visual / Portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle ambient backlighting */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-sky-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Pedestal / Frame Container */}
              <div className="relative rounded-3xl border border-slate-200/80 bg-white/60 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/[0.1] dark:bg-white/[0.03] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/60 dark:from-white/[0.04] dark:to-white/[0.01]">
                  <img
                    src="/3D_Self2.png"
                    alt="Sourav Kumar"
                    className="h-[320px] w-[300px] object-cover object-top sm:h-[400px] sm:w-[360px] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

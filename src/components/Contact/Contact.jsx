import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      link: "https://github.com/sourav-kr14",
      color:
        "hover:border-white/30 hover:bg-white hover:text-slate-950 dark:hover:bg-slate-100 dark:hover:text-slate-950",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://linkedin.com/in/thesouravv",
      color:
        "hover:border-blue-400/40 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/sourav__14/",
      color:
        "hover:border-amber-400/40 hover:bg-amber-400 hover:text-slate-950",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-10 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {/* <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            Available for Full-Stack and AI opportunities
          </span> */}

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
            Let&apos;s build
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              something remarkable
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I enjoy turning ambitious ideas into clean, scalable products. If
            you&apos;re hiring or building something meaningful, I&apos;d love
            to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto grid max-w-5xl gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:grid-cols-[1.15fr_0.85fr] md:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-indigo-500/10" />

          {/* Left Panel */}
          <div className="relative rounded-[1.5rem] border border-white/10 bg-[#060b1a]/80 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
              Contact
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Have a role, project, or idea in mind?
            </h3>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              I&apos;m open to software engineering roles, internship
              opportunities, and collaboration on products that need thoughtful
              frontend and strong backend foundations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Java", "Spring Boot", "Node.js", "AI Tools"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:souravkr93@gmail.com"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition duration-300 hover:scale-[1.02]"
              >
                <FiMail className="text-lg" />
                Email Me
                <FiArrowRight />
              </a>

              <a
                href="https://linkedin.com/in/thesouravv"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-semibold text-slate-200 transition duration-300 hover:border-indigo-400/30 hover:bg-white/10"
              >
                <FiLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Panel */}
          <div className="relative flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Quick Info
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#070d1f]/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:souravkr93@gmail.com"
                    className="mt-2 block text-base font-medium text-white transition hover:text-indigo-300"
                  >
                    souravkr93@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#070d1f]/80 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-base font-medium text-white">
                    <FiMapPin className="text-indigo-300" />
                    Ranchi, India
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Open to remote roles and relocation opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Find Me Online
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-slate-200 transition-all duration-300 hover:-translate-y-1 ${item.color}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="relative mt-16 border-t border-white/10 pt-8">
          <div className="container mx-auto flex flex-col items-center gap-5 px-6">
            <nav className="flex flex-wrap justify-center gap-6">
              {["About", "Experience", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-400 transition hover:text-indigo-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Designed and built by{" "}
              <span className="font-semibold text-indigo-300">
                Sourav Kumar
              </span>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

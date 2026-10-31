import React from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { BlurFade } from "../magicui/BlurFade";
import { AnimatedShinyText } from "../magicui/AnimatedShinyText";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <FiGithub size={18} />,
      link: "https://github.com/sourav-kr14",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={18} />,
      link: "https://linkedin.com/in/thesouravv",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode size={18} />,
      link: "https://leetcode.com/u/sourav__14/",
    },
  ];

  return (
    <section id="contact" className="relative py-12 sm:py-20 overflow-hidden">
      {/* Grounding Finale Ambient Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-gradient-to-t from-indigo-500/[0.06] via-violet-500/[0.02] to-transparent dark:from-indigo-500/[0.1] dark:via-violet-500/[0.04] rounded-full blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <BlurFade delay={0.05} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-mono dark:border-white/[0.08] dark:bg-white/[0.03]">
            <AnimatedShinyText className="text-[11px] font-semibold uppercase tracking-wider">
              06 / Get In Touch
            </AnimatedShinyText>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
              something remarkable
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            I enjoy turning ambitious ideas into clean, scalable products. If
            you&apos;re hiring or building something meaningful, I&apos;d love
            to connect.
          </p>
        </BlurFade>

        {/* Main Showcase Container */}
        <BlurFade delay={0.15}>
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-9 md:grid md:grid-cols-12 md:gap-10">
            {/* Left Panel */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Contact
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  Have a role, project, or idea in mind?
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                  I&apos;m open to software engineering roles, internship
                  opportunities, and collaboration on products that need thoughtful
                  frontend and strong backend foundations.
                </p>

                {/* Stack tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Java", "Spring Boot", "Node.js", "AI Tools"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200/70 bg-slate-50/80 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:krsourav.dev@gmail.com"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                >
                  <FiMail size={15} />
                  <span>Email Me</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://linkedin.com/in/thesouravv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-6 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  <FiLinkedin size={15} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Panel */}
            <div className="mt-8 md:mt-0 md:col-span-5 flex flex-col justify-between border-t border-slate-100 pt-8 dark:border-white/[0.06] md:border-t-0 md:border-l md:pl-10 md:pt-0">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Quick Info
                </span>

                <div className="mt-4 space-y-4">
                  {/* Email Info Card */}
                  <div className="rounded-xl border border-slate-200/70 bg-white/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email
                    </p>
                    <a
                      href="mailto:krsourav.dev@gmail.com"
                      className="mt-1 block text-sm font-semibold text-slate-900 dark:text-white transition hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      krsourav.dev@gmail.com
                    </a>
                  </div>

                  {/* Location Info Card */}
                  <div className="rounded-xl border border-slate-200/70 bg-white/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white">
                      <FiMapPin size={14} className="text-indigo-600 dark:text-indigo-400" />
                      <span>Ranchi, India</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Open to remote roles and relocation opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Find Me Online
                </p>

                <div className="mt-3 flex items-center gap-2.5">
                  {socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-white/20 dark:hover:text-white"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Footer */}
        <BlurFade delay={0.25} className="mt-14 border-t border-slate-200/70 pt-8 dark:border-white/[0.06]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <nav className="flex flex-wrap items-center gap-6">
              {["About", "Experience", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Designed and built by{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Sourav Kumar
              </span>
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;

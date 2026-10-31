import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { NumberTicker } from "../magicui/NumberTicker";
import { BorderBeam } from "../magicui/BorderBeam";
import { BlurFade } from "../magicui/BlurFade";
import { InteractiveHoverButton } from "../magicui/InteractiveHoverButton";
import { AnimatedShinyText } from "../magicui/AnimatedShinyText";
import { DotPattern } from "../magicui/DotPattern";

const Hero = () => {
  const stats = [
    { numValue: 150, suffix: "+", label: "DSA Problems" },
    { numValue: 2, suffix: "", label: "Internships" },
    { numValue: 4, suffix: "+", label: "Web & AI Projects" },
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
      className="relative flex min-h-[92vh] items-center pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      {/* Hero Distinctive Background Treatment: Architectural Dot Pattern & Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_25%,transparent_85%)]">
        <DotPattern
          width={26}
          height={26}
          cx={1.2}
          cy={1.2}
          cr={1.2}
          className="text-slate-300/70 dark:text-slate-700/50"
        />
      </div>

      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.12] rounded-full blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7">
            {/* Live Status Eyebrow */}
            <BlurFade delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.04]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <AnimatedShinyText className="font-mono text-xs font-semibold tracking-wide">
                  Software Engineer Trainee • MCA Final Year
                </AnimatedShinyText>
              </div>
            </BlurFade>

            {/* Main Headline */}
            <BlurFade delay={0.15}>
              <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
                <span className="block text-slate-900 dark:text-white">
                  Sourav
                </span>
                <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-400 dark:from-indigo-400 dark:via-violet-400 dark:to-sky-400 bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
            </BlurFade>

            {/* Sub-headline with Typing Animation */}
            <BlurFade delay={0.25}>
              <div className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
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
              </div>
            </BlurFade>

            {/* Bio Paragraph */}
            <BlurFade delay={0.35}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
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
              </p>
            </BlurFade>

            {/* Metrics / Stats Cards with Magic UI NumberTicker */}
            <BlurFade delay={0.45}>
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none transition-transform hover:-translate-y-0.5"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center justify-center">
                      <NumberTicker value={item.numValue} />
                      <span>{item.suffix}</span>
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Tech Stack Chips */}
            <BlurFade delay={0.55}>
              <div className="mt-8 flex max-w-xl flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200/80 bg-white/80 px-3 py-1 font-mono text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BlurFade>

            {/* Action Buttons */}
            <BlurFade delay={0.65}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <InteractiveHoverButton href="#projects">
                  View Projects
                </InteractiveHoverButton>

                <a
                  href="/Sourav_Kumar_Resume.pdf"
                  download
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300/80 bg-white/80 px-7 text-xs font-semibold text-slate-800 backdrop-blur-sm transition duration-200 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]"
                >
                  Download Resume
                </a>
              </div>
            </BlurFade>

            {/* Social Links */}
            <BlurFade delay={0.75}>
              <div className="mt-8 flex items-center gap-3">
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
              </div>
            </BlurFade>
          </div>

          {/* Right Column (Hero Visual / Portrait Pedestal with BorderBeam) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Subtle ambient backlighting */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-sky-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Pedestal Container with Magic UI BorderBeam */}
              <div className="relative rounded-3xl border border-slate-200/80 bg-white/60 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/[0.1] dark:bg-white/[0.03] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <BorderBeam size={80} duration={8} colorFrom="#6366f1" colorTo="#a855f7" />

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

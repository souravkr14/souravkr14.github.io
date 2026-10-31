import React from "react";
import { FiMapPin, FiBookOpen, FiBriefcase, FiZap } from "react-icons/fi";
import { BlurFade } from "../magicui/BlurFade";
import { AnimatedShinyText } from "../magicui/AnimatedShinyText";

const About = () => {
  const infoCards = [
    {
      icon: <FiBriefcase className="text-lg" />,
      title: "Software Engineer Trainee",
      subtitle: "Revature • 2026 – Present",
      label: "Current Role",
      accent: "text-indigo-600 dark:text-indigo-400",
      bgAccent:
        "bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200/60 dark:border-indigo-500/20",
    },
    {
      icon: <FiMapPin className="text-lg" />,
      title: "Chennai, India",
      subtitle: "IST (UTC +5:30)",
      label: "Location",
      accent: "text-rose-600 dark:text-rose-400",
      bgAccent:
        "bg-rose-50 dark:bg-rose-500/10 border-rose-200/60 dark:border-rose-500/20",
    },
    {
      icon: <FiZap className="text-lg" />,
      title: "Software Development",
      subtitle: "Java | Microservices | Full Stack | Cloud | AI",
      label: "Current Focus",
      accent: "text-amber-600 dark:text-amber-400",
      bgAccent:
        "bg-amber-50 dark:bg-amber-500/10 border-amber-200/60 dark:border-amber-500/20",
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <BlurFade delay={0.05} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-mono dark:border-white/[0.08] dark:bg-white/[0.03]">
            <AnimatedShinyText className="text-[11px] font-semibold uppercase tracking-wider">
              01 / About Me
            </AnimatedShinyText>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            About Me
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            A snapshot of my academic path, current role, and the engineering
            direction I am actively growing into.
          </p>
        </BlurFade>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main About / Profile Card */}
          <BlurFade delay={0.15} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-9">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Profile
                </span>

                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  <p>
                    I&apos;m{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Sourav Kumar
                    </span>
                    , a final year MCA student at{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      BIT Mesra
                    </span>{" "}
                    and currently working as a{" "}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
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
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Machine Learning and Deep Learning
                    </span>{" "}
                    to create practical, intelligent products that solve real
                    user problems.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Education Card */}
          <BlurFade delay={0.25} className="lg:col-span-5">
            <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200/60 bg-indigo-50 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
                <FiBookOpen size={20} />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Academic foundations that shaped my software engineering
                journey.
              </p>

              <div className="mt-6 relative space-y-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-[2px] before:bg-slate-200 dark:before:bg-white/[0.08]">
                {/* MCA */}
                <div className="relative pl-7">
                  <span className="absolute left-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-600 dark:border-slate-900 dark:bg-indigo-400" />
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    MCA - BIT Mesra
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                    2024 - 2026 (Expected)
                  </p>
                </div>

                {/* BCA */}
                <div className="relative pl-7">
                  <span className="absolute left-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-400 dark:border-slate-900 dark:bg-slate-500" />
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    BCA - GGSIPU Delhi
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                    Graduated 2024
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Info Cards */}
          {infoCards.map((item, i) => (
            <BlurFade
              key={item.label}
              delay={0.35 + i * 0.1}
              className="lg:col-span-4"
            >
              <div className="h-full rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${item.bgAccent} ${item.accent}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {item.label}
                    </p>

                    <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

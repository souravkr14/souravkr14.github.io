import React from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiOpenjdk,
  SiKubernetes,
  SiGithubactions,
  SiApachekafka,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FiCode, FiActivity } from "react-icons/fi";
import { BlurFade } from "../magicui/BlurFade";
import { AnimatedShinyText } from "../magicui/AnimatedShinyText";

const iconMap = {
  React: {
    icon: <SiReact />,
    color: "text-[#00d8ff]",
  },
  JavaScript: {
    icon: <SiJavascript />,
    color: "text-[#f7df1e]",
  },
  HTML: {
    icon: <SiHtml5 />,
    color: "text-[#e34f26]",
  },
  CSS: {
    icon: <SiCss3 />,
    color: "text-[#1572b6]",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss />,
    color: "text-[#38bdf8]",
  },
  Java: {
    icon: <SiOpenjdk />,
    color: "text-[#e76f00]",
  },
  Python: {
    icon: <SiPython />,
    color: "text-[#3776ab]",
  },
  "Spring Boot": {
    icon: <FiActivity />,
    color: "text-[#6db33f]",
  },
  "REST APIs": {
    icon: <FiCode />,
    color: "text-indigo-500",
  },
  "JWT Auth": {
    icon: <FiActivity />,
    color: "text-purple-500",
  },
  Kafka: {
    icon: <SiApachekafka />,
    color: "text-orange-500",
  },
  MongoDB: {
    icon: <SiMongodb />,
    color: "text-[#47a248]",
  },
  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-[#336791]",
  },
  MySQL: {
    icon: <SiMysql />,
    color: "text-[#00758f]",
  },
  Docker: {
    icon: <SiDocker />,
    color: "text-[#2496ed]",
  },
  Kubernetes: {
    icon: <SiKubernetes />,
    color: "text-[#326ce5]",
  },
  Azure: {
    icon: <FaMicrosoft />,
    color: "text-[#0089d6]",
  },
  "GitHub Actions": {
    icon: <SiGithubactions />,
    color: "text-slate-500 dark:text-slate-300",
  },
  Git: {
    icon: <SiGit />,
    color: "text-[#f05032]",
  },
  GitHub: {
    icon: <SiGithub />,
    color: "text-slate-800 dark:text-slate-200",
  },
  Postman: {
    icon: <SiPostman />,
    color: "text-[#ff6c37]",
  },
  Spring: {
    icon: <FiActivity />,
    color: "text-[#6db33f]",
  },
  Microservices: {
    icon: <FiCode />,
    color: "text-pink-500",
  },
  Hibernate: {
    icon: <FiActivity />,
    color: "text-[#59666c] dark:text-[#b0bec5]",
  },
};

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend Engineering",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Microservices",
    skills: [
      "Java",
      "Spring Boot",
      "Spring",
      "REST APIs",
      "JWT Auth",
      "Hibernate",
      "Kafka",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Azure",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 border-y border-slate-200/60 bg-slate-50/50 dark:border-white/[0.04] dark:bg-white/[0.012] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/[0.035] dark:bg-indigo-600/[0.05] rounded-full blur-[130px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        {/* Header */}
        <BlurFade delay={0.05} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-mono dark:border-white/[0.08] dark:bg-white/[0.03]">
            <AnimatedShinyText className="text-[11px] font-semibold uppercase tracking-wider">
              04 / Technical Arsenal
            </AnimatedShinyText>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Java Full Stack Developer
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Building scalable Java full stack and microservices applications
            with modern cloud and DevOps technologies.
          </p>
        </BlurFade>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const isWide = group.title === "Backend & Microservices";
            return (
              <BlurFade
                key={group.title}
                delay={0.15 + index * 0.1}
                className={isWide ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/15 sm:p-7">
                  {/* Group Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/[0.06]">
                    <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      <span>{group.title}</span>
                    </h3>

                    <span className="font-mono text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 rounded-md">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.skills.map((skill, i) => {
                      const item = iconMap[skill];
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/20"
                        >
                          <span className={`text-base ${item?.color || ""}`}>
                            {item?.icon}
                          </span>
                          <span>{skill}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

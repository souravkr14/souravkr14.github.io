import React, { Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SectionDivider from "./components/common/SectionDivider";

const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Leadership = lazy(() => import("./components/LeaderShip/Leadership"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#fbfbfe] dark:bg-[#090a10] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300 transition-colors duration-400">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 z-[100] origin-left shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      {/* Subtle Page-Wide Ambient Background Mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 editorial-grid opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/[0.04] dark:bg-indigo-500/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-violet-500/[0.03] dark:bg-violet-500/[0.05] rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Suspense
          fallback={
            <div className="flex h-96 items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
            </div>
          }
        >
          <Experience />
          <SectionDivider />

          <Projects />
          <SectionDivider />

          <Skills />
          <SectionDivider />

          <Leadership />
          <SectionDivider />

          <Contact />
        </Suspense>
      </main>

      <div className="pb-8" />
    </div>
  );
}

export default App;

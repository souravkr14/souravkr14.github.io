import React, { Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SectionDivider from "./components/common/SectionDivider";
import NoiseTexture from "./components/magicui/NoiseTexture";

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
    <div className="relative min-h-screen bg-[#fbfbfe] dark:bg-[#090a10] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300 transition-colors duration-400 overflow-x-hidden">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 z-[100] origin-left shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      {/* Global Grain/Noise Texture Layer */}
      <div className="pointer-events-none fixed inset-0 z-20 opacity-[0.03] dark:opacity-[0.045]">
        <NoiseTexture frequency={0.65} octaves={3} slope={0.2} noiseOpacity={0.6} />
      </div>

      {/* Global Subtle Architectural Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 editorial-grid opacity-50" />

      {/* Global Ambient Depth Mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top-center ambient illumination */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-500/[0.06] via-violet-500/[0.03] to-transparent dark:from-indigo-500/[0.09] dark:via-violet-500/[0.04] rounded-full blur-[130px]" />
        
        {/* Mid-page ambient wash */}
        <div className="absolute top-[45%] -left-32 w-[650px] h-[650px] bg-sky-500/[0.025] dark:bg-indigo-600/[0.04] rounded-full blur-[150px]" />

        {/* Lower-page ambient wash */}
        <div className="absolute bottom-[10%] -right-32 w-[700px] h-[700px] bg-violet-500/[0.025] dark:bg-purple-600/[0.04] rounded-full blur-[160px]" />
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

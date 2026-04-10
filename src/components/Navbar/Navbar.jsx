import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";

const navMenus = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Experience", link: "#experience", id: "experience" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Contact", link: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = saved ? saved === "dark" : prefersDark;
    setIsDark(initialDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navMenus.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -120, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed left-1/2 top-4 z-50 w-[94%] -translate-x-1/2 md:w-[88%] xl:w-[82%]"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55">
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-indigo-500/10 dark:from-white/5 dark:to-indigo-500/10" />

              <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="#home"
                  className="text-2xl font-black tracking-tight"
                >
                  <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Sourav
                  </span>
                  <span className="text-slate-900 dark:text-white">.</span>
                </motion.a>

                <ul className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/50 px-3 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex">
                  {navMenus.map((item) => (
                    <li key={item.id} className="relative">
                      <a
                        href={item.link}
                        className={`relative block rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                          active === item.id
                            ? "text-white"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        }`}
                      >
                        {item.name}

                        {active === item.id && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-900/20"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 md:gap-3">
                  <motion.button
                    whileTap={{ rotate: 180, scale: 0.95 }}
                    onClick={() => setIsDark(!isDark)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/50 text-slate-700 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                    aria-label="Toggle theme"
                  >
                    {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </motion.button>

                  <a
                    href="#contact"
                    className="hidden h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 transition duration-300 hover:scale-[1.02] md:inline-flex"
                  >
                    Let&apos;s Talk
                    <FiArrowUpRight />
                  </a>

                  <button
                    onClick={() => setOpen(!open)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/50 text-xl text-slate-700 backdrop-blur-md transition-all duration-300 hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 lg:hidden"
                    aria-label="Toggle menu"
                  >
                    {open ? <FiX /> : <FiMenu />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.25 }}
                    className="relative border-t border-white/15 px-4 pb-4 pt-3 dark:border-white/10 lg:hidden"
                  >
                    <ul className="flex flex-col gap-2">
                      {navMenus.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.link}
                            onClick={() => setOpen(false)}
                            className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                              active === item.id
                                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
                                : "bg-white/40 text-slate-700 hover:bg-indigo-500 hover:text-white dark:bg-white/5 dark:text-slate-300"
                            }`}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="mt-3 flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20"
                    >
                      Let&apos;s Talk
                      <FiArrowUpRight />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

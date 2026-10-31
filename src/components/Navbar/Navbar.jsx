import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <nav className="relative rounded-2xl border border-slate-200/80 bg-white/80 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0d0f17]/85 dark:shadow-[0_12px_40px_rgb(0,0,0,0.45)]">
              <div className="flex items-center justify-between px-3 py-1">
                {/* Brand */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#home"
                  className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                  <span className="font-extrabold">Sourav</span>
                  <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                </motion.a>

                {/* Desktop Nav Links */}
                <ul className="hidden items-center gap-1 rounded-xl bg-slate-100/70 p-1 dark:bg-white/[0.04] md:flex">
                  {navMenus.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id} className="relative">
                        <a
                          href={item.link}
                          className={`relative block rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                            isActive
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="nav-pill"
                              className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-white/[0.12] dark:shadow-none"
                              transition={{
                                type: "spring",
                                stiffness: 420,
                                damping: 32,
                              }}
                            />
                          )}
                          <span className="relative z-10">{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                  {/* Theme Toggle */}
                  <motion.button
                    whileTap={{ scale: 0.92, rotate: 20 }}
                    onClick={() => setIsDark(!isDark)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-700 transition hover:bg-slate-100 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08]"
                    aria-label="Toggle theme"
                  >
                    {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
                  </motion.button>

                  {/* Desktop CTA */}
                  <a
                    href="#contact"
                    className="group hidden sm:inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    <span>Let&apos;s Talk</span>
                    <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-base text-slate-700 transition hover:bg-slate-100 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-300 dark:hover:bg-white/[0.08] md:hidden"
                    aria-label="Toggle menu"
                  >
                    {open ? <FiX /> : <FiMenu />}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-slate-200/70 pt-3 pb-2 dark:border-white/[0.08] md:hidden"
                  >
                    <ul className="flex flex-col gap-1 px-1">
                      {navMenus.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.link}
                            onClick={() => setOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                              active === item.id
                                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
                            }`}
                          >
                            <span>{item.name}</span>
                            {active === item.id && (
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 px-1">
                      <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500"
                      >
                        <span>Let&apos;s Talk</span>
                        <FiArrowUpRight />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

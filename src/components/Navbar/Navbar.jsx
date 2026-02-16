import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

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

  // Dark Mode Init
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

  // Hide on scroll down, show on scroll up
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

  // Auto active section
  useEffect(() => {
    const sections = navMenus.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800"
          >
            <div className="container mx-auto px-6 md:w-[85%] py-4 flex items-center justify-between">

              {/* LOGO */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#home"
                className="text-2xl font-black text-gray-900 dark:text-white"
              >
                Sourav<span className="text-indigo-600">.</span>
              </motion.a>

              {/* DESKTOP MENU */}
              <ul className="hidden md:flex items-center gap-8">
                {navMenus.map((item) => (
                  <li key={item.id} className="relative">
                    <a
                      href={item.link}
                      className={`text-sm font-semibold transition-colors ${
                        active === item.id
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>

                    {active === item.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </li>
                ))}
              </ul>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-4">

                {/* DARK MODE */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-all active:scale-90"
                >
                  {isDark ? <FiSun /> : <FiMoon />}
                </button>

                {/* CTA */}
                <div className="hidden md:block">
                  <a
                    href="#contact"
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
                  >
                    Let’s Talk
                  </a>
                </div>

                {/* MOBILE */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-xl text-gray-800 dark:text-white"
                >
                  {open ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-slate-800"
                >
                  <ul className="flex flex-col px-6 py-6 gap-4">
                    {navMenus.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className={`block text-lg font-semibold ${
                            active === item.id
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

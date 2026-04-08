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

  // DARK MODE INIT
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

  // SCROLL VISIBILITY
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

  // ACTIVE SECTION
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
      {/* 🔥 SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50
            bg-white/10 dark:bg-slate-900/20
            backdrop-blur-2xl
            border border-white/20 dark:border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            rounded-2xl"
          >
            <div className="px-6 py-3 flex items-center justify-between">
              {/* 🌈 LOGO */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#home"
                className="text-2xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
              >
                Sourav<span className="text-white">.</span>
              </motion.a>

              {/* 💎 DESKTOP MENU */}
              <ul className="hidden md:flex items-center gap-3 bg-white/10 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-xl">
                {navMenus.map((item) => (
                  <li key={item.id} className="relative">
                    <a
                      href={item.link}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
                      ${
                        active === item.id
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}

                      {active === item.id && (
                        <motion.span
                          layoutId="pill"
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full -z-10 shadow-lg"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ⚡ RIGHT SIDE (FIXED) */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* 🌙 DARK MODE */}
                <motion.button
                  whileTap={{ rotate: 180 }}
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center justify-center h-10 w-10 rounded-xl
                  bg-white/20 dark:bg-white/10 backdrop-blur-md
                  border border-white/20 dark:border-white/10
                  hover:scale-110 transition-all"
                >
                  {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.button>

                {/* 🚀 CTA */}
                <div className="hidden md:block">
                  <a
                    href="#contact"
                    className="flex items-center justify-center h-10 px-5 rounded-xl
                    font-semibold text-sm text-white
                    bg-gradient-to-r from-indigo-500 to-purple-600
                    shadow-md hover:shadow-lg
                    transition-all duration-300"
                  >
                    Let’s Talk
                  </a>
                </div>

                {/* 📱 MOBILE */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl
                  bg-white/20 dark:bg-white/10 text-xl"
                >
                  {open ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>

            {/* 📱 MOBILE MENU */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden px-6 pb-6"
                >
                  <ul className="flex flex-col gap-3">
                    {navMenus.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-2 rounded-lg font-semibold ${
                            active === item.id
                              ? "bg-indigo-500 text-white"
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

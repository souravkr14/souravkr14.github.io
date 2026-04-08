import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pb-28 bg-white dark:bg-black overflow-hidden"
    >
      {/* GRID */}
      <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>

      {/* GLOW */}
      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 blur-[160px] opacity-20"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="mt-6 text-gray-500 max-w-xl mx-auto text-lg">
            Open to Full-Stack & AI roles. Let’s build scalable systems
            together.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="group relative max-w-3xl mx-auto p-12 rounded-[2.5rem]
          bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl
          border border-white/20 dark:border-slate-800
          shadow-2xl text-center hover:-translate-y-3 transition duration-500"
        >
          {/* HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[2.5rem] transition"></div>

          <div className="relative">
            <h3 className="text-2xl font-bold mb-10">
              Let’s build something meaningful together.
            </h3>

            {/* CTA */}
            <a
              href="mailto:souravkr93@gmail.com"
              className="relative inline-flex items-center gap-3 px-10 h-14 rounded-xl
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white font-semibold shadow-lg
              overflow-hidden group"
            >
              <FiMail />
              Say Hello
              {/* Shine */}
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700 skew-x-12"></span>
            </a>

            {/* SOCIAL */}
            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              {[
                {
                  icon: <FiGithub />,
                  link: "https://github.com/sourav-kr14",
                  color: "hover:bg-gray-900 hover:text-white",
                },
                {
                  icon: <FiLinkedin />,
                  link: "https://linkedin.com/in/thesouravv",
                  color: "hover:bg-blue-600 hover:text-white",
                },
                {
                  icon: <SiLeetcode />,
                  link: "https://leetcode.com/u/sourav__14/",
                  color: "hover:bg-yellow-500 hover:text-white",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className={`w-12 h-12 flex items-center justify-center rounded-xl
                  bg-white/60 dark:bg-slate-800/60
                  border border-white/20 dark:border-slate-700
                  hover:scale-110 ${item.color}
                  transition-all duration-300`}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* LOCATION */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
              <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiMapPin className="text-indigo-500" /> Ranchi, India
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Open to Remote & Relocation
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 pt-10 border-t border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <nav className="flex gap-6">
            {["About", "Experience", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-indigo-500 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Designed and Built by{" "}
            <span className="text-indigo-500 font-semibold">Sourav Kumar</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

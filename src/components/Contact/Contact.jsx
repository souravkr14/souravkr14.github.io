import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* HERO GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

      {/* Glow */}
      <div className="absolute left-[-200px] top-1/2 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      <div className="relative container mx-auto px-6 md:w-[85%]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let’s Connect
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
  Open to roles in{" "}
  <span className="font-semibold text-gray-900 dark:text-white">
    Full-Stack Software Engineering
  </span>{" "}
  and{" "}
  <span className="font-semibold text-gray-900 dark:text-white">
    AI & Machine Learning Systems
  </span>
  . Let’s build scalable, intelligent products together.
</p>

        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] p-12 shadow-2xl border border-white/30 dark:border-slate-800 text-center hover:-translate-y-2 hover:shadow-indigo-300/30 dark:hover:shadow-indigo-900/30 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
            Let’s build something meaningful together.
          </h3>

          {/* EMAIL BUTTON */}
          <a
            href="mailto:souravkr93@gmail.com"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FiMail className="text-2xl" />
            Say Hello
          </a>

          {/* SOCIAL LINKS */}
          <div className="mt-14 flex justify-center gap-6 flex-wrap">
            {[
              { href: "https://github.com/sourav-kr14", icon: <FiGithub />, label: "GitHub" },
              { href: "https://linkedin.com/in/thesouravv", icon: <FiLinkedin />, label: "LinkedIn" },
              { href: "https://leetcode.com/u/sourav__14/", icon: <SiLeetcode />, label: "LeetCode" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 shadow-md border border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl">{social.icon}</div>
              </a>
            ))}
          </div>

          {/* LOCATION */}
          <div className="mt-14 pt-10 border-t border-gray-100 dark:border-slate-800 flex flex-col items-center gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              <FiMapPin className="text-indigo-500" /> Ranchi, India
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              Open to Remote & Relocation
            </p>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-gray-100 dark:border-white/5 pt-10">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <nav className="flex gap-8">
            {["About", "Experience", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-gray-500 hover:text-indigo-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-sm text-gray-400 dark:text-gray-600 text-center">
            © {new Date().getFullYear()} Designed & Built by{" "}
            <span className="text-indigo-600 dark:text-indigo-500 font-semibold">
              Sourav Kumar
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

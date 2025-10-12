import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll tracking
  useEffect(() => {
    const links = ["Home", "Astronomy", "Planets", "Astrology", "ContactUs"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(link.toLowerCase());
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Astronomy", "Planets", "Astrology", "ContactUs"];

  return (
    <Motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full bg-black/70 backdrop-blur-md text-white py-4 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide text-indigo-400 select-none"
        >
          Cosmic Verse
        </Motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 uppercase tracking-wide font-semibold">
          {links.map((link) => (
            <li key={link}>
              <Motion.a
                href={`#${link.toLowerCase()}`}
                className={`
                  relative px-4 py-2
                  transition-all duration-150
                  ${active === link.toLowerCase()
                    ? "text-indigo-400"
                    : "text-gray-200"
                  }
                `}
                whileHover={{
                  scale: 1.15,            
                  borderRadius: "9999px",
                  backgroundColor: "#6366f1aa",
                  transition: { type: "spring", stiffness: 2000, damping: 75 }, // faster spring
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </Motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-1 w-6 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-6 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-1 w-6 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 px-6 text-lg font-semibold"
          >
            {links.map((link) => (
              <li key={link}>
                <Motion.a
                  href={`#${link.toLowerCase()}`}
                  className={`
                    relative px-4 py-2 rounded-full block text-center
                    transition-all duration-150
                    ${
                      active === link.toLowerCase()
                        ? "bg-indigo-500 text-white shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]"
                        : "hover:bg-indigo-600/80 hover:text-white hover:shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]"
                    }
                  `}
                  whileHover={{
                    scale: 1.15,
                    borderRadius: "9999px",
                    transition: { type: "spring", stiffness: 500, damping: 20 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Motion.a>
              </li>
            ))}
          </Motion.ul>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}

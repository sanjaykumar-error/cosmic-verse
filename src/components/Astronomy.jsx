import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion"; // ✅ Capitalized alias fixes the ESLint warning

export default function Astronomy() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=Zl7EaRhsNfv2Z9i8dR2iuoXBcmHpkhdEb3jZ0CVy")
      .then(res => res.json())
      .then(data => setApod(data))
      .catch(() => setApod({ error: true }));
  }, []);

  return (
    <Motion.section
      id="astronomy"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-black text-white px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Motion.h2
        className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        NASA Astronomy Picture of the Day
      </Motion.h2>

      {apod ? (
        <Motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {apod.url ? (
            <Motion.img
              src={apod.url}
              alt={apod.title}
              className="rounded-2xl shadow-2xl w-full max-h-[450px] object-cover border border-indigo-700/30 hover:scale-[1.02] transition"
              whileHover={{ scale: 1.03 }}
            />
          ) : (
            <div className="text-gray-400">No image available</div>
          )}
          <Motion.h3
            className="text-2xl font-semibold mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {apod.title}
          </Motion.h3>
          <Motion.p
            className="text-gray-300 mt-3 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {apod.explanation}
          </Motion.p>
        </Motion.div>
      ) : (
        <p className="text-gray-400 animate-pulse">Loading picture...</p>
      )}
    </Motion.section>
  );
}

import { motion as Motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-b from-black to-indigo-900 overflow-hidden"
    >
      {/* Main Heading */}
      <Motion.h1
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Cosmic Verse
      </Motion.h1>

      {/* Description */}
      <Motion.p
        className="text-1g max-w-x2 mb-6 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Where Astronomy meets Astrology — explore the universe outside and within.
      </Motion.p>

      {/* Button */}
      <Motion.a
        href="#astronomy"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-pink-500 text-gray-900 hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 0.9 }}
        transition={{ delay: 0.01, duration: 0.05 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px #a78bfa" }}
      >
        Start Exploring
      </Motion.a>
    </section>
  );
}

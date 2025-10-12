import { useState } from "react";
import { motion as Motion } from "framer-motion";

const zodiacSigns = [
  { name: "Aries", start: "03-21", end: "04-19", planet: "Mars", message: "Bold and passionate." },
  { name: "Taurus", start: "04-20", end: "05-20", planet: "Venus", message: "Grounded and loyal." },
  { name: "Gemini", start: "05-21", end: "06-20", planet: "Mercury", message: "Curious and social." },
  { name: "Cancer", start: "06-21", end: "07-22", planet: "Moon", message: "Nurturing and emotional." },
  { name: "Leo", start: "07-23", end: "08-22", planet: "Sun", message: "Creative and confident." },
  { name: "Virgo", start: "08-23", end: "09-22", planet: "Mercury", message: "Analytical and caring." },
  { name: "Libra", start: "09-23", end: "10-22", planet: "Venus", message: "Balanced and charming." },
  { name: "Scorpio", start: "10-23", end: "11-21", planet: "Pluto", message: "Intense and mysterious." },
  { name: "Sagittarius", start: "11-22", end: "12-21", planet: "Jupiter", message: "Adventurous and wise." },
  { name: "Capricorn", start: "12-22", end: "01-19", planet: "Saturn", message: "Disciplined and ambitious." },
  { name: "Aquarius", start: "01-20", end: "02-18", planet: "Uranus", message: "Innovative and free-spirited." },
  { name: "Pisces", start: "02-19", end: "03-20", planet: "Neptune", message: "Dreamy and compassionate." },
];

export default function Astrology() {
  const [birthDate, setBirthDate] = useState("");
  const [sign, setSign] = useState(null);

  const findZodiac = () => {
    if (!birthDate) return;
    const [_year, month, day] = birthDate.split("-");
    const mmdd = `${month}-${day}`;
    const zodiac = zodiacSigns.find(
      (z) =>
        (mmdd >= z.start && mmdd <= z.end) ||
        (z.start > z.end && (mmdd >= z.start || mmdd <= z.end))
    );
    setSign(zodiac);
  };

  return (
    <section
      id="astrology"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-black text-white px-6 py-20 overflow-hidden"
    >
      {/* Title */}
      <Motion.h2
        className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover Your Zodiac Sign
      </Motion.h2>

      {/* Input & Button */}
      <Motion.div
        className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="flex-1 px-5 py-3 rounded-full bg-gradient-to-b from-indigo-900 to-black text-white text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 w-full"
        />
        <Motion.button
          onClick={findZodiac}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-semibold shadow-lg w-full md:w-auto"
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 500, damping: 20 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Find My Sign
        </Motion.button>
      </Motion.div>

      {/* Animated Card */}
      {sign && (
        <Motion.div
          key={sign.name}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-gradient-to-b from-indigo-800 to-black rounded-2xl shadow-2xl p-8 w-full max-w-md text-center border border-purple-500/30"
        >
          <Motion.h3
            className="text-3xl font-bold mb-2 text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {sign.name}
          </Motion.h3>
          <p className="text-gray-300 mb-2">
            Ruling Planet: <span className="font-semibold">{sign.planet}</span>
          </p>
          <p className="italic text-gray-400 text-lg">"{sign.message}"</p>
        </Motion.div>
      )}
    </section>
  );
}

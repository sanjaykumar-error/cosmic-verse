import { motion as Motion } from "framer-motion";

const planets = [
  { name: "Mercury", fact: "Smallest planet", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" },
  { name: "Venus", fact: "Hottest planet", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" },
  { name: "Earth", fact: "Our home planet", img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" },
  { name: "Mars", fact: "Known as the Red Planet", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" },
  { name: "Jupiter", fact: "Largest planet", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" },
  { name: "Saturn", fact: "Famous for its rings", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" },
  { name: "Uranus", fact: "Rotates on its side", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" },
  { name: "Neptune", fact: "Strongest winds in the solar system", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" },
  { name: "Pluto", fact: "Dwarf planet, was considered 9th planet", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg" },
];

export default function Planets() {
  return (
    <section id="planets" className="py-20 bg-gradient-to-b from-black to-indigo-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Planets of Our Solar System</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {planets.map((p, index) => (
          <Motion.div
            key={p.name}
            className="bg-gray-800 p-6 rounded-xl shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)", borderRadius: "2rem", transition: { type: "tween" } }}
          >
            <img src={p.img} alt={p.name} className="rounded-lg mb-2 w-full h-65 object-cover" />
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-400">{p.fact}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

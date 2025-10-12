import { motion as Motion } from "framer-motion";

export default function ContactUs() {
  return (
    <Motion.section
      id="contactus"
      className="text-white bg-gradient-to-b from-black to-indigo-900 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto h-full">
          <Motion.div
            className="text-center py-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-semibold tracking-tight text-indigo-500">
              Contact Us
            </div>
          </Motion.div>

          <hr className="my-6 border-indigo-800/40" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold leading-tight">
                This is the part where you get in touch and we make{" "}
                <span className="text-indigo-400">amazing</span> things happen!
              </h1>
            </Motion.div>

            <Motion.div
              className="space-y-6 md:space-y-8 md:text-right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <hr className="border-gray-800 md:hidden" />

              <div>
                <h2 className="font-bold mb-2">
                  <div className="mt-6 space-y-1">
                    <a
                      href="mailto:kumharsanjay992@gmail.com"
                      className="block hover:text-white transition duration-300"
                    >
                      kumharsanjay992@gmail.com
                    </a>
                    <a
                      href="tel:8999020627"
                      className="block hover:text-white transition duration-300"
                    >
                      +91 8237006990
                    </a>
                  </div>
                </h2>
              </div>

              <hr className="border-gray-800" />

              <div>
                <h2 className="font-bold text-indigo-300 mb-2">Stalk Us</h2>
                <div className="space-y-1 text-gray-400">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition duration-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>

      <Motion.footer
        className="w-full px-4 bg-[#191c1e] md:px-8 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <hr className="border-gray-800 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Copyright 2025</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </Motion.footer>
    </Motion.section>
  );
}

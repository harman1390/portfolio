"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen relative text-gray-800">
      {/* Top-right menu button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-700 transition-all"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Pop-out menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-200 grid gap-4 w-60"
          >
            <Link href="/projects">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-all">
                View My Projects
              </button>
            </Link>
            <Link href="/education">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-all">
                Education
              </button>
            </Link>
            <Link href="/contact">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-all">
                Contact
              </button>
            </Link>
            <Link href="/Harmanjyot_Sandhu_Resume.pdf" download>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-all">
                📄 Download Resume
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-purple-200"
        >
          <h1 className="text-5xl font-extrabold text-purple-900 mb-6 drop-shadow-lg">
            Harmanjyot Singh Sandhu
          </h1>

          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-4">
            I&apos;m a passionate full-stack developer and blockchain enthusiast with a background in data analysis and smart contract development. I love building clean, interactive user experiences powered by modern web technologies and decentralized systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen flex flex-col items-center justify-center text-gray-800 p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-purple-200"
      >
        <h1 className="text-5xl font-extrabold text-purple-900 mb-6 drop-shadow-lg">Harmanjyot Singh Sandhu</h1>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/projects">
            <button className="px-6 py-3 bg-purple-700 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-all">
              View My Projects
            </button>
          </Link>
          <Link href="/education">
            <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-all">
              Education
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-pink-600 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-all">
              Contact
            </button>
          </Link>
          <Link href="/Harmanjyot_Sandhu_Resume.pdf" download>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-all">
              📄 Download Resume
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
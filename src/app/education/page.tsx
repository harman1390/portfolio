"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen p-10 text-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10 text-center text-purple-900 drop-shadow-lg"
      >
        My Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-semibold text-purple-800">George Brown College</h3>
          <p className="text-gray-700">Graduate Certificate in Blockchain Development (2022–2023)</p>
          <p className="text-sm text-gray-600">
            CGPA: 7.50 | Specialized in Solidity, smart contracts, and full-stack DApp development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-semibold text-purple-800">Guru Nanak Khalsa College</h3>
          <p className="text-gray-700">Bachelor of Science in Information Technology (2017–2020)</p>
          <p className="text-sm text-gray-600">
            CGPA: 5.84 | Studied networking, hardware, software testing, and Android development.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

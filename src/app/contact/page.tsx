"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen p-10 text-gray-800">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-bold mb-10 text-center text-purple-900 drop-shadow-lg"
>
  {"Let's Connect"}
</motion.h2>


      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-purple-200"
      >
        <p className="mb-6 text-lg leading-relaxed text-center">
          Whether you have an idea, opportunity, or just want to say hello, feel free to reach out:
        </p>
        <ul className="space-y-4 text-lg text-center">
          <li>
            <span className="font-medium text-purple-700">Email:</span>
            <a href="mailto:harms1390@gmail.com" className="ml-2 text-blue-700 underline hover:text-blue-900">harms1390@gmail.com</a>
          </li>
          <li>
            <span className="font-medium text-purple-700">LinkedIn:</span>
            <a href="https://linkedin.com/in/harman1390" target="_blank" className="ml-2 text-blue-700 underline hover:text-blue-900">linkedin.com/in/harman1390</a>
          </li>
          <li>
            <span className="font-medium text-purple-700">GitHub:</span>
            <a href="https://github.com/harman1390" target="_blank" className="ml-2 text-blue-700 underline hover:text-blue-900">github.com/harman1390</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

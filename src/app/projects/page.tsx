"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "NFT Marketplace",
      description:
        "Blockchain-based platform using Next.js and Solidity. Managed 500+ transactions with 99.9% uptime.",
      link: "https://github.com/harman1390/NFT-Marketplace"
    },
    {
      title: "E-Voting DApp",
      description:
        "Secure voting system built on Avalanche Blockchain. Achieved 99.8% transaction accuracy.",
      link: "https://github.com/harman1390/AvalancheProject"
    },
    {
      title: "Medchain Project",
      description:
        "Decentralized medical data platform. Reduced unauthorized access by 40% and improved secure sharing.",
      link: "https://github.com/harman1390/HyperLedgerFabricProject"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen p-10 text-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10 text-center text-purple-900 drop-shadow-lg"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-200 hover:shadow-purple-300 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2 text-purple-800">{project.title}</h3>
            <p className="mb-3 text-base text-gray-700">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-blue-700 underline hover:text-blue-900"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

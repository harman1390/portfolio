"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-400 text-gray-100 font-sans">
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-indigo-800/30 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-indigo-400 max-w-2xl"
        >
          <Image
            src="/profile-pic.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="mx-auto mb-4 rounded-full shadow-md object-cover"
          />
          <h1 className="text-5xl font-extrabold text-indigo-200 mb-4">
            Harmanjyot Singh Sandhu
          </h1>
          <p className="text-lg text-gray-300">
            I'm a full-stack developer and blockchain enthusiast focused on building impactful decentralized apps and sleek frontend experiences. With a strong foundation in smart contract development and data analytics, I bring ideas to life through clean, scalable code.
          </p>
        </motion.div>
      </div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-100 mb-8">Portfolio Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* NFT Marketplace Project */}
          <div className="bg-indigo-800/20 backdrop-blur-md p-6 rounded-lg shadow-md">
            <Image src="/nft-marketplace.jpg" alt="NFT Marketplace" width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-300 mt-4">
              Decentralized NFT Marketplace
            </h3>
            <p className="text-gray-200 mt-2">
              Built an Ethereum-based NFT marketplace with smart contracts, allowing users to mint, buy, and sell NFTs.
            </p>
            <a href="https://github.com/harman1390/NFT-Marketplace" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 border border-indigo-400 text-indigo-300 rounded hover:bg-indigo-800">
                VIEW PROJECT
              </button>
            </a>
          </div>

          {/* E-Voting DApp */}
          <div className="bg-indigo-800/30 backdrop-blur p-6 rounded-lg shadow-md">
            <Image src="/evoting.png" alt="E-Voting DApp" width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-200 mt-4">
              E-Voting DApp
            </h3>
            <p className="text-gray-200 mt-2">
              Developed a secure and transparent electronic voting application using smart contracts to ensure fairness and immutability.
            </p>
            <a href="https://github.com/harman1390/AvalancheProject" target="_blank" rel="noopener noreferrer">
             <button className="mt-4 px-4 py-2 border border-indigo-400 text-indigo-300 rounded hover:bg-indigo-800">
                VIEW PROJECT
              </button>
            </a>
          </div>

          {/* MedChain Project */}
          <div className="bg-indigo-800/40 backdrop-blur p-6 rounded-lg shadow-md">
            <Image src="/medchain.jpg" alt="MedChain" width={300} height={200} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mt-4">
              MedChain: Decentralized Medical Records
            </h3>
            <p className="text-gray-200 mt-2">
              A blockchain-powered system to manage and share electronic medical records securely between patients and providers.
            </p>
            <a href="https://github.com/harman1390/HyperLedgerFabricProject" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 border border-indigo-400 text-indigo-300 rounded hover:bg-indigo-800">
                VIEW PROJECT
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-100 mb-8">Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-indigo-200">
            <h3 className="text-xl font-semibold text-indigo-100">George Brown College</h3>
            <p className="text-gray-200">Graduate Certificate in Blockchain Development (2022–2023)</p>
            <p className="text-sm text-gray-400 mt-2">CGPA: 7.50 | Specialized in Solidity, smart contracts, and full-stack DApp development.</p>
          </div>
          <div className="bg-indigo-800/30 rounded-lg shadow-lg p-6 border border-indigo-200">
            <h3 className="text-xl font-semibold text-indigo-100">Guru Nanak Khalsa College</h3>
            <p className="text-gray-200">Bachelor of Science in Information Technology (2017–2020)</p>
            <p className="text-sm text-gray-400 mt-2">CGPA: 5.84 | Studied networking, hardware, software testing, and Android development.</p>
          </div>
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-100 mb-8">Certifications</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-100">Networking Level 1</h3>
            <p className="text-gray-200 text-sm mt-2">Guru Nanak Khalsa College</p>
          </div>
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-100">Software Testing</h3>
            <p className="text-gray-200 text-sm mt-2">Guru Nanak Khalsa College</p>
          </div>
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-100">PL/SQL Programming</h3>
            <p className="text-gray-200 text-sm mt-2">Udemy</p>
          </div>
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-lg shadow-lg p-6 border border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-100">Blockchain Development</h3>
            <p className="text-gray-200 text-sm mt-2">George Brown College</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="py-12 px-4 text-center"
>
  <h2 className="text-3xl font-bold text-indigo-100 mb-2">Connect</h2>
  <div className="w-20 mx-auto border-b-2 border-blue-400 mb-4"></div>
  <p className="text-gray-200 mb-6">You can reach me via LinkedIn</p>
  <Link href="/Harmanjyot_Sandhu_Resume.pdf" download>
    <button className="bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-800 transition-all mb-6">
      RESUME
    </button>
  </Link>
  <div className="flex justify-center gap-6">
    <a href="https://www.linkedin.com/in/harman1390" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-indigo-300 text-3xl hover:text-indigo-200 transition-all" />
    </a>
    <a href="https://github.com/harman1390" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-gray-100 text-3xl hover:text-gray-600 transition-all" />
    </a>
    <button 
      onClick={() => {
        navigator.clipboard.writeText("harms1390@gmail.com")
          .then(() => alert("Email copied!"))
          .catch(() => alert("Failed to copy email."));
      }} 
      className="text-indigo-300 text-3xl hover:text-indigo-200 transition-all"
    >
      <FaEnvelope />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

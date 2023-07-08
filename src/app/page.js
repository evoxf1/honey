"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      <Navbar isAuthenticated={false} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header"
        >
          <h1>GET FOUND</h1>
          <p>
            SIGN UP and get the benefits of all the available opportunities
            across the globe and work from home flexibly according to your
            needs....
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="image-section"
        >
          <img
            src="https://source.unsplash.com/random"
            alt="Recruitment"
            className="max-w-[400px] max-h-[400px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h2>Efficiency for Hiring Managers and HR Professionals</h2>
          <p>
            Our online recruitment solution is designed to streamline the
            hiring process, providing efficiency and effectiveness to hiring
            managers and HR professionals. With our cutting-edge features and
            user-friendly interface, you can find the best candidates quickly
            and easily.
          </p>
          <p>
            🎯 Find top talent with ease
            <br />
            📝 Simplify job posting and applications
            <br />
            💼 Streamline candidate screening and selection
            <br />
            💡 Gain insights with analytics and reporting
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="cta-button"
          >
            <Link href="/signup"
              className="px-4 mt-4 py-2 bg-purple-500 text-white rounded-md">
                Get Started
              
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};



export default HomePage;

'use client' 
 
 // LoginPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setSubmitted(true);
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };

  return (
    <div>
      <Navbar isAuthenticated={false} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white text-gray-700 p-8 rounded shadow-md">
          <h2 className="text-2xl text-black mb-4">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={handleReset}
              >
                Reset
              </button>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded-md"
                >
                  LOGIN
                </button>
                <Link href="/" className="px-4 py-2 bg-purple-500 text-white rounded-md">
                  Home
                </Link>
              </div>
            </div>
          </form>
          {submitted && (
            <>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                🎉 Logged in Successfully!
              </motion.div>
              <div className="mt-4">
                <Link href="/company-dashboard"  className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-md">
                    COMPANY DASHBOARD
                 
                </Link>
              </div>
            </>
          )}
          <div className="mt-4">
            <Link href="/company-signup" className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Company Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

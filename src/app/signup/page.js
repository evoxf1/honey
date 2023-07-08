"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic or API call here
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setRole('');
    setEmail('');
    setPassword('');
    setBio('');
    setAddress('');
    setBio('');
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white text-gray-700 p-8 rounded shadow-md">
        <h2 className="text-2xl text-black mb-4">Sign Up</h2>
        {submitted ? (
          <div className="mb-4 text-green-500">
            Thanks for the submission! Your details are saved. You will receive an email for confirmation, and you will be contacted when a suitable position is available.
          </div>
        ) : null}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="webDevelopment"
                name="role"
                value="webDevelopment"
                checked={role === 'webDevelopment'}
                onChange={() => setRole('webDevelopment')}
              />
              <label
                htmlFor="webDevelopment"
                className="text-purple-500 cursor-pointer"
              >
                Web Development
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="humanResources"
                name="role"
                value="humanResources"
                checked={role === 'humanResources'}
                onChange={() => setRole('humanResources')}
              />
              <label
                htmlFor="humanResources"
                className="text-purple-500 cursor-pointer"
              >
                Human Resources
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="accounting"
                name="role"
                value="accounting"
                checked={role === 'accounting'}
                onChange={() => setRole('accounting')}
              />
              <label
                htmlFor="accounting"
                className="text-purple-500 cursor-pointer"
              >
                Accounting
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
              <label
                htmlFor="admin"
                className="text-purple-500 cursor-pointer"
              >
                Admin
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2">
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
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2">
              <label htmlFor="address" className="block mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="address" className="block mb-1">
                BIO
              </label>
              <input
                type="text"
                id="bio"
                className="w-full border-gray-300 rounded-md p-2"
                placeholder="Tell us about your background"
                isRequire='true'
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
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
                Submit
              </button>
              <Link href="/"
                 className="px-4 py-2 bg-purple-500 text-white rounded-md">
                  Home
               
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

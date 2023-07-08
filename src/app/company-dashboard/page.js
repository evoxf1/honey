'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Dashboard = ({ candidates }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const fullName = candidate.fullName.toLowerCase();
    const email = candidate.email.toLowerCase();
    const role = candidate.role.toLowerCase();
    const address = candidate.address.toLowerCase();
    const bio = candidate.bio.toLowerCase();

    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase()) ||
      role.includes(searchTerm.toLowerCase()) ||
      address.includes(searchTerm.toLowerCase()) ||
      bio.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <Navbar isAuthenticated={false} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white text-gray-700 p-8 rounded shadow-md">
          <h2 className="text-2xl text-black mb-4">Dashboard</h2>
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Search candidates"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-2 bg-purple-500 text-white rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : filteredCandidates.length === 0 ? (
            <p>No candidates found.</p>
          ) : (
            <ul className="space-y-2">
              {filteredCandidates.map((candidate, index) => (
                <li key={index}>
                  <h3>{candidate.fullName}</h3>
                  <p>Email: {candidate.email}</p>
                  <p>Role: {candidate.role}</p>
                  <p>Address: {candidate.address}</p>
                  <p>Bio: {candidate.bio}</p>
                  <hr />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Dummy data for testing purposes
const dummyCandidates = [
  {
    fullName: 'John Doe',
    email: 'john@example.com',
    role: 'Web Developer',
    address: '123 Main St',
    bio: 'Lorem ipsum dolor sit amet',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    role: 'UX Designer',
    address: '456 Elm St',
    bio: 'Lorem ipsum dolor sit amet',
  },
  // Add more dummy candidate objects as needed
];

export default () => <Dashboard candidates={dummyCandidates} />;

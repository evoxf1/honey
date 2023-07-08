'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Simulating an API request to fetch candidates
    const fetchCandidates = async () => {
      setIsLoading(true);
      try {
        // Simulated response from the server with dummy data
        const response = [
          {
            id: 1,
            fullName: 'Ravi Kumar',
            email: 'ravi@example.com',
            role: 'Web Developer',
            address: '123 Main St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 2,
            fullName: 'Sneha Sharma',
            email: 'sneha@example.com',
            role: 'UX Designer',
            address: '456 Elm St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 3,
            fullName: 'Vikram Singh',
            email: 'vikram@example.com',
            role: 'Software Engineer',
            address: '789 Oak St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 4,
            fullName: 'Neha Patel',
            email: 'neha@example.com',
            role: 'Data Analyst',
            address: '987 Pine St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 5,
            fullName: 'Amit Sharma',
            email: 'amit@example.com',
            role: 'Mobile App Developer',
            address: '654 Cedar St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 6,
            fullName: 'Priya Gupta',
            email: 'priya@example.com',
            role: 'UI/UX Designer',
            address: '321 Maple St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 7,
            fullName: 'Rahul Verma',
            email: 'rahul@example.com',
            role: 'Frontend Developer',
            address: '543 Birch St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 8,
            fullName: 'Smita Das',
            email: 'smita@example.com',
            role: 'Backend Developer',
            address: '876 Oak St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 9,
            fullName: 'Aryan Rajput',
            email: 'aryan@example.com',
            role: 'Software Engineer',
            address: '567 Elm St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 10,
            fullName: 'Anjali Kapoor',
            email: 'anjali@example.com',
            role: 'Product Manager',
            address: '987 Maple St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 11,
            fullName: 'Alok Sharma',
            email: 'alok@example.com',
            role: 'Web Developer',
            address: '345 Pine St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 12,
            fullName: 'Riya Singh',
            email: 'riya@example.com',
            role: 'UI Designer',
            address: '789 Cedar St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 13,
            fullName: 'Akash Patel',
            email: 'akash@example.com',
            role: 'Full Stack Developer',
            address: '234 Oak St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 14,
            fullName: 'Tanvi Verma',
            email: 'tanvi@example.com',
            role: 'Data Analyst',
            address: '567 Elm St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 15,
            fullName: 'Rajeev Kapoor',
            email: 'rajeev@example.com',
            role: 'Software Engineer',
            address: '123 Pine St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 16,
            fullName: 'Sarika Gupta',
            email: 'sarika@example.com',
            role: 'Frontend Developer',
            address: '876 Cedar St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 17,
            fullName: 'Aditya Das',
            email: 'aditya@example.com',
            role: 'Backend Developer',
            address: '345 Maple St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 18,
            fullName: 'Pooja Rajput',
            email: 'pooja@example.com',
            role: 'Software Engineer',
            address: '789 Elm St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 19,
            fullName: 'Vivek Sharma',
            email: 'vivek@example.com',
            role: 'Product Manager',
            address: '234 Cedar St',
            bio: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 20,
            fullName: 'Nisha Singh',
            email: 'nisha@example.com',
            role: 'UI Designer',
            address: '567 Maple St',
            bio: 'Lorem ipsum dolor sit amet',
          },
        ];

        setCandidates(response);
        setIsLoading(false);
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };

    fetchCandidates();
  }, []);

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
            <div className="grid grid-cols-4 gap-4">
              {filteredCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className={`p-4 rounded shadow-md ${getRandomColor()}`}
                >
                  <h3 className="text-xl font-semibold mb-2">{candidate.fullName}</h3>
                  <p className="mb-2">Email: {candidate.email}</p>
                  <p className="mb-2">Role: {candidate.role}</p>
                  <p className="mb-2">Address: {candidate.address}</p>
                  <p className="mb-2">Bio: {candidate.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Generate a random background color
const getRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-gray-500',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import axios from 'axios';

// const Dashboard = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       setIsLoading(true);

//       try {
//         // Make a GET request to the API to retrieve all candidates
//         const response = await axios.get('/api/candidates');
//         console.log('Response from server:', response.data);
//         setCandidates(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log('Error occurred:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const handleSearch = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   const filteredCandidates = candidates.filter((candidate) => {
//     const fullName = candidate.fullName.toLowerCase();
//     const email = candidate.email.toLowerCase();
//     const role = candidate.role.toLowerCase();
//     const address = candidate.address.toLowerCase();
//     const bio = candidate.bio.toLowerCase();
// })
//   return (
//     <div>
//       <Navbar isAuthenticated={false} />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-white text-gray-700 p-8 rounded shadow-md">
//           <h2 className="text-2xl text-black mb-4">Dashboard</h2>
//           <div className="flex space-x-4 mb-4">
//             <input
//               type="text"
//               className="w-full border-gray-300 rounded-md p-2"
//               placeholder="Search candidates"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               type="button"
//               className="px-4 py-2 bg-purple-500 text-white rounded-md"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : filteredCandidates.length === 0 ? (
//             <p>No candidates found.</p>
//           ) : (
//             <ul className="space-y-2">
//               {filteredCandidates.map((candidate, index) => (
//                 <li key={index}>
//                   <h3>{candidate.fullName}</h3>
//                   <p>Email: {candidate.email}</p>
//                   <p>Role: {candidate.role}</p>
//                   <p>Address: {candidate.address}</p>
//                   <p>Bio: {candidate.bio}</p>
//                   <hr />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
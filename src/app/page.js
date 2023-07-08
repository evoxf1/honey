import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar isAuthenticated={false} />
      <h1>Welcome to the Recruitment App</h1>
      {/* Add more content */}
    </div>
  );
};

export default HomePage;

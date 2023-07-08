import Link from 'next/link';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="flex items-center justify-between bg-purple-500 p-4">
      <ul className="flex space-x-4 text-white text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link href="/search">Search</Link>
            </li>
            {/* Add more links for authenticated users */}
          </>
        )}
        {!isAuthenticated && (
          <li>
            <Link href="/login">
              <span className="text-white">Login</span>
            </Link>
          </li>
        )}
        <li>
          <Link href="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

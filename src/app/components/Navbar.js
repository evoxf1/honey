import Link from 'next/link';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="flex items-center justify-between bg-purple-500 p-4">
      <ul className="flex space-x-4 text-white text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
       
          
          
        
        {!isAuthenticated && (
          <li>
           <Link href="/login">
 Company Login
</Link>

          </li>
        )}
        <li>
          <Link href="/signup">Signup for Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

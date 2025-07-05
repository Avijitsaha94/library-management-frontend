
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Minimal Library</h1>
      <div className="flex space-x-4">
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive ? 'underline' : 'hover:underline'
          }
        >
          Books
        </NavLink>
        <NavLink
          to="/create-book"
          className={({ isActive }) =>
            isActive ? 'underline' : 'hover:underline'
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to="/borrow-summary"
          className={({ isActive }) =>
            isActive ? 'underline' : 'hover:underline'
          }
        >
          Borrow Summary
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

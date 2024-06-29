import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = true;
  const user = {
    username: 'johndoe',
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Fitness Recipes</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {isAuthenticated ? (
            <>
              <li><Link to={`/profile/${user.username}`} className="btn btn-ghost">Profile</Link></li>
              <li><button className="btn btn-ghost">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="btn btn-ghost">Login</Link></li>
              <li><Link to="/register" className="btn btn-ghost">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

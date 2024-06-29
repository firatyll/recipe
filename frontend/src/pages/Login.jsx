import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="p-8 bg-neutral rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-secondary">Email</label>
            <input type="email" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-secondary">Password</label>
            <input type="password" className="input input-bordered w-full" />
          </div>
          <button type="submit" className="btn btn-primary w-full mb-4">Login</button>
        </form>
        <p className="text-center text-accent">
          Don't have an account? <Link to="/register" className="text-info">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

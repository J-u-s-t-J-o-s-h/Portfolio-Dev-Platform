import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
      >
        <div className="flex items-center">
          <Link 
            to="/"
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>
        
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h2>
        
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login; 
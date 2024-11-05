import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layout as LayoutIcon, 
  Code, 
  Users, 
  BarChart, 
  Settings, 
  LogOut,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen text-white">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          width: isCollapsed ? '5rem' : '16rem'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 h-screen bg-gray-800/50 backdrop-blur-xl border-r border-gray-700/50 z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent
            transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
            DevPortfolio
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight size={20} className="text-gray-400" />
            ) : (
              <ChevronLeft size={20} className="text-gray-400" />
            )}
          </button>
        </div>
        
        <nav className="px-4 py-2">
          <NavItem icon={<LayoutIcon size={20} />} text="Dashboard" to="/dashboard" active={pathname === '/dashboard'} isCollapsed={isCollapsed} />
          <NavItem icon={<Code size={20} />} text="Projects" to="/dashboard/projects" active={pathname === '/dashboard/projects'} isCollapsed={isCollapsed} />
          <NavItem icon={<Briefcase size={20} />} text="Portfolio" to="/dashboard/portfolio" active={pathname === '/dashboard/portfolio'} isCollapsed={isCollapsed} />
          <NavItem icon={<Users size={20} />} text="Collaborations" to="/dashboard/collaborations" active={pathname === '/dashboard/collaborations'} isCollapsed={isCollapsed} />
          <NavItem icon={<BarChart size={20} />} text="Analytics" to="/dashboard/analytics" active={pathname === '/dashboard/analytics'} isCollapsed={isCollapsed} />
          <NavItem icon={<Settings size={20} />} text="Settings" to="/dashboard/settings" active={pathname === '/dashboard/settings'} isCollapsed={isCollapsed} />
          <NavItem icon={<LogOut size={20} />} text="Logout" className="mt-auto" isCollapsed={isCollapsed} />
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        {children}
      </div>
    </div>
  );
};

// Helper Components
const NavItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  to?: string;
  active?: boolean;
  className?: string;
  isCollapsed: boolean;
}> = ({ icon, text, to = '#', active, className = '', isCollapsed }) => (
  <Link to={to}>
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
        ${active ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white'}
        ${className}`}
    >
      {icon}
      <span className={`transition-all duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
        {text}
      </span>
    </motion.div>
  </Link>
);

export default Layout; 
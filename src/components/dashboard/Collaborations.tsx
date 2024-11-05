import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Clock,
  CheckCircle,
  XCircle,
  MessageCircle,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';

const Collaborations: React.FC = () => {
  return (
    <div className="min-h-screen text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Collaborations</h1>
          <p className="text-gray-400">Manage your project collaborations and requests</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold 
            inline-flex items-center gap-2 shadow-lg shadow-purple-500/30"
        >
          <UserPlus size={20} />
          Find Collaborators
        </motion.button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search collaborations..."
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl py-3 pl-12 pr-4 
                text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <button className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 
          inline-flex items-center gap-2 hover:border-purple-500 transition-colors">
          <Filter size={20} />
          Filter
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          icon={<Users className="text-purple-400" />}
          title="Active Collaborations"
          value="8"
        />
        <StatsCard 
          icon={<Clock className="text-blue-400" />}
          title="Pending Requests"
          value="3"
        />
        <StatsCard 
          icon={<CheckCircle className="text-green-400" />}
          title="Completed Projects"
          value="12"
        />
      </div>

      {/* Active Collaborations */}
      <div className="space-y-6 mb-12">
        <h2 className="text-xl font-semibold">Active Collaborations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CollaborationCard 
            title="AI Chat Assistant"
            description="Working with @johndoe on implementing new chat features"
            role="Frontend Developer"
            status="active"
            members={['JD', 'AS', 'MK']}
          />
          <CollaborationCard 
            title="E-commerce Platform"
            description="Collaborating on payment integration and UI improvements"
            role="Full Stack Developer"
            status="active"
            members={['RK', 'JD', 'AS', 'PL']}
          />
        </div>
      </div>

      {/* Collaboration Requests */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Collaboration Requests</h2>
        <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
          {[1, 2, 3].map((_, index) => (
            <RequestRow key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const StatsCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
  >
    <div className="flex items-center gap-4">
      {icon}
      <div>
        <h3 className="text-gray-400">{title}</h3>
        <span className="text-3xl font-bold">{value}</span>
      </div>
    </div>
  </motion.div>
);

const CollaborationCard: React.FC<{
  title: string;
  description: string;
  role: string;
  status: string;
  members: string[];
}> = ({ title, description, role, status, members }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
          <MessageCircle size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
          <ExternalLink size={20} className="text-gray-400" />
        </button>
      </div>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Role:</span>
        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
          {role}
        </span>
      </div>
      <div className="flex -space-x-2">
        {members.map((initial, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-medium ring-2 ring-gray-900"
          >
            {initial}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const RequestRow: React.FC = () => (
  <div className="p-4 border-b border-gray-700/50 last:border-0 hover:bg-gray-700/20 transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-medium">
          JD
        </div>
        <div>
          <h4 className="font-medium">John Doe</h4>
          <p className="text-sm text-gray-400">Requesting to collaborate on "AI Chat Assistant"</p>
        </div>
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
        >
          Accept
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
        >
          Decline
        </motion.button>
      </div>
    </div>
  </div>
);

export default Collaborations; 
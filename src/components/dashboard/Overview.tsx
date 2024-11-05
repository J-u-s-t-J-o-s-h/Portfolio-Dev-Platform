import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp,
  ArrowDown,
  Users,
  Eye,
  Activity,
  Clock,
  Plus
} from 'lucide-react';
import AnimatedCard from '../shared/AnimatedCard';

const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, User!</h1>
          <p className="text-gray-400">Here's what's happening with your projects.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold 
            inline-flex items-center gap-2 shadow-lg shadow-purple-500/30"
        >
          <Plus size={20} />
          New Project
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Views"
          value="12.5k"
          trend="+12.3%"
          isPositive={true}
          icon={<Eye className="text-blue-400" />}
        />
        <StatsCard 
          title="Profile Visits"
          value="3.2k"
          trend="+8.1%"
          isPositive={true}
          icon={<Users className="text-green-400" />}
        />
        <StatsCard 
          title="Project Interactions"
          value="856"
          trend="-2.3%"
          isPositive={false}
          icon={<Activity className="text-purple-400" />}
        />
        <StatsCard 
          title="Avg. Session"
          value="4m 32s"
          trend="+1.2%"
          isPositive={true}
          icon={<Clock className="text-pink-400" />}
        />
      </div>

      {/* Recent Projects */}
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
        <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="AI Chat Assistant"
            description="A real-time chat application powered by OpenAI's GPT-3"
            tech={['React', 'Node.js', 'OpenAI']}
            progress={75}
          />
          <ProjectCard 
            title="E-commerce Platform"
            description="Full-stack e-commerce solution with payment integration"
            tech={['Next.js', 'Stripe', 'MongoDB']}
            progress={45}
          />
          <ProjectCard 
            title="Portfolio Website"
            description="Personal portfolio website with modern design"
            tech={['React', 'TypeScript', 'Tailwind']}
            progress={90}
          />
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<{
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
}> = ({ title, value, trend, isPositive, icon }) => (
  <AnimatedCard className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
    <div className="flex justify-between items-start mb-4">
      {icon}
      <span className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {trend}
      </span>
    </div>
    <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
    <span className="text-2xl font-bold">{value}</span>
  </AnimatedCard>
);

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tech: string[];
  progress: number;
}> = ({ title, description, tech, progress }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
  >
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, i) => (
        <span key={i} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
          {t}
        </span>
      ))}
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </motion.div>
);

export default Overview; 
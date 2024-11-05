import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Star,
  Clock,
  ArrowUp,
  ArrowDown,
  Activity,
  Globe,
  Calendar
} from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-400">Track your portfolio and project performance</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-4 mb-8">
        <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400">Last 7 days</button>
        <button className="px-4 py-2 rounded-lg hover:bg-gray-800/50">Last 30 days</button>
        <button className="px-4 py-2 rounded-lg hover:bg-gray-800/50">Last 3 months</button>
        <button className="px-4 py-2 rounded-lg hover:bg-gray-800/50">All time</button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard 
          title="Total Views"
          value="12.5k"
          trend="+12.3%"
          isPositive={true}
          icon={<Eye className="text-blue-400" />}
        />
        <MetricCard 
          title="Profile Visits"
          value="3.2k"
          trend="+8.1%"
          isPositive={true}
          icon={<Users className="text-green-400" />}
        />
        <MetricCard 
          title="Project Interactions"
          value="856"
          trend="-2.3%"
          isPositive={false}
          icon={<Activity className="text-purple-400" />}
        />
        <MetricCard 
          title="Avg. Session"
          value="4m 32s"
          trend="+1.2%"
          isPositive={true}
          icon={<Clock className="text-pink-400" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traffic Chart */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Traffic Overview</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
                Views
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-pink-400" />
                Visits
              </span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Placeholder for actual chart */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="relative w-full">
                <div 
                  className="w-full bg-purple-400/20 rounded-t-lg"
                  style={{ height: `${Math.random() * 100}%` }}
                />
                <div 
                  className="absolute bottom-0 w-full bg-pink-400/20 rounded-t-lg"
                  style={{ height: `${Math.random() * 60}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-semibold mb-6">Geographic Distribution</h3>
          <div className="space-y-4">
            <LocationRow country="United States" percentage={35} visits="4.2k" />
            <LocationRow country="United Kingdom" percentage={22} visits="2.8k" />
            <LocationRow country="Germany" percentage={18} visits="2.1k" />
            <LocationRow country="India" percentage={15} visits="1.8k" />
            <LocationRow country="Others" percentage={10} visits="1.2k" />
          </div>
        </div>
      </div>

      {/* Project Performance */}
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
        <h3 className="text-xl font-semibold mb-6">Project Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700/50">
                <th className="pb-4">Project</th>
                <th className="pb-4">Views</th>
                <th className="pb-4">Interactions</th>
                <th className="pb-4">Conversion</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <ProjectRow 
                name="AI Chat Assistant"
                views="2.4k"
                interactions="856"
                conversion="3.2%"
                status="Active"
              />
              <ProjectRow 
                name="E-commerce Platform"
                views="1.8k"
                interactions="654"
                conversion="2.8%"
                status="Completed"
              />
              <ProjectRow 
                name="Portfolio Website"
                views="1.2k"
                interactions="432"
                conversion="2.1%"
                status="Active"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const MetricCard: React.FC<{
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
}> = ({ title, value, trend, isPositive, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
  >
    <div className="flex justify-between items-start mb-4">
      {icon}
      <span className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {trend}
      </span>
    </div>
    <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
    <span className="text-2xl font-bold">{value}</span>
  </motion.div>
);

const LocationRow: React.FC<{
  country: string;
  percentage: number;
  visits: string;
}> = ({ country, percentage, visits }) => (
  <div className="flex items-center gap-4">
    <Globe size={20} className="text-gray-400" />
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span>{country}</span>
        <span className="text-gray-400">{visits}</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  </div>
);

const ProjectRow: React.FC<{
  name: string;
  views: string;
  interactions: string;
  conversion: string;
  status: string;
}> = ({ name, views, interactions, conversion, status }) => (
  <tr className="h-16">
    <td>{name}</td>
    <td>{views}</td>
    <td>{interactions}</td>
    <td>{conversion}</td>
    <td>
      <span className={`px-3 py-1 rounded-full text-sm
        ${status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'}`}>
        {status}
      </span>
    </td>
  </tr>
);

export default Analytics; 
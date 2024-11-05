import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900/90 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Showcase Your Projects
              <br />
              <span className="text-white">Like Never Before</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Build your developer portfolio, collaborate with others, and track your success
              with our modern platform.
            </p>
            
            <div className="flex gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-48"
              >
                <Link
                  to="/signup"
                  className="w-full h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                    px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 
                    shadow-lg shadow-purple-500/30 transition-all duration-200"
                >
                  Get Started <ArrowRight className="animate-pulse" size={20} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-48"
              >
                <Link
                  to="/login"
                  className="w-full h-14 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 hover:border-purple-500
                    px-8 rounded-xl font-semibold inline-flex items-center justify-center
                    shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
                >
                  Sign In
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Code className="w-8 h-8 text-purple-400" />}
            title="Showcase Projects"
            description="Display your work with beautiful project cards and detailed descriptions."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-purple-400" />}
            title="Collaborate"
            description="Connect with other developers and work together on exciting projects."
          />
          <FeatureCard
            icon={<Rocket className="w-8 h-8 text-purple-400" />}
            title="Track Growth"
            description="Monitor your progress with detailed analytics and insights."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing; 
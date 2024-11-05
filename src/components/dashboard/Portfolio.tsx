import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github,
  Linkedin, 
  Twitter,
  MapPin,
  Edit,
  ExternalLink,
  Code,
  Brain,
  Rocket
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Adjusted parallax values for smoother transitions
  const heroY = useTransform(scrollY, [0, 1000], [0, -150]);
  const aboutY = useTransform(scrollY, [0, 1000], [0, -50]);  // Added for about section
  const skillsY = useTransform(scrollY, [800, 1800], [100, -100]);
  const projectsY = useTransform(scrollY, [1600, 2600], [100, -100]);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/20">
              <img
                src="https://via.placeholder.com/160"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              John Doe
            </h1>
            <p className="text-2xl text-gray-300 mt-4">Full Stack Developer</p>
            <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <SocialLink icon={<Github />} href="#" />
            <SocialLink icon={<Linkedin />} href="#" />
            <SocialLink icon={<Twitter />} href="#" />
            <SocialLink icon={<Mail />} href="#" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
        >
          Scroll to explore
        </motion.div>
      </motion.section>

      {/* About Section - Updated */}
      <motion.section 
        style={{ y: aboutY }}
        className="min-h-screen flex items-center py-40 relative"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ 
              once: true,
              margin: "-100px",
              amount: "some"
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Full Stack Developer with 5+ years of experience building scalable web applications.
              Passionate about clean code, user experience, and solving complex problems.
              Currently working on projects involving AI and machine learning.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        style={{ y: skillsY }}
        className="min-h-screen flex items-center py-20 bg-gray-800/30"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard 
                icon={<Code />}
                title="Frontend"
                skills={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
              />
              <SkillCard 
                icon={<Brain />}
                title="Backend"
                skills={['Node.js', 'Python', 'PostgreSQL', 'GraphQL']}
              />
              <SkillCard 
                icon={<Rocket />}
                title="DevOps"
                skills={['AWS', 'Docker', 'CI/CD', 'Kubernetes']}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        style={{ y: projectsY }}
        className="min-h-screen flex items-center py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="AI Chat Assistant"
                description="A real-time chat application powered by OpenAI's GPT-3"
                tech={['React', 'Node.js', 'OpenAI']}
                image="https://via.placeholder.com/600x400"
              />
              <ProjectCard
                title="E-commerce Platform"
                description="Full-stack e-commerce solution with payment integration"
                tech={['Next.js', 'Stripe', 'MongoDB']}
                image="https://via.placeholder.com/600x400"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section - Updated */}
      <motion.section 
        className="min-h-screen flex items-center py-20 bg-gray-800/30 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ 
          margin: "-200px",
          amount: 0.3
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ 
              margin: "-200px",
              amount: 0.3
            }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <form className="space-y-6">
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3"
                />
              </motion.div>
              <motion.textarea
                rows={6}
                placeholder="Message"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

// Helper Components
const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
  >
    {icon}
  </a>
);

const SkillCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  skills: string[];
}> = ({ icon, title, skills }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
  >
    <div className="text-purple-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tech: string[];
  image: string;
}> = ({ title, description, tech, image }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700/50"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a href="#" className="text-purple-400 hover:text-purple-300">
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Portfolio;
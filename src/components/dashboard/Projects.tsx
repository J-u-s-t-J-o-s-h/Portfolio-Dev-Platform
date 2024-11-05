import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Grid, List, Edit, Trash2, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import AnimatedCard from '../shared/AnimatedCard';

// Update the Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  progress: number;
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  dueDate?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Planning' | 'In Progress' | 'Testing' | 'Completed';
  collaborators?: string[];
  image?: string;
}

// Sample data with new fields
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'AI Chat Assistant',
    description: 'A real-time chat application powered by OpenAI\'s GPT-3',
    tech: ['React', 'Node.js', 'OpenAI'],
    progress: 75,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    startDate: '2024-01-01',
    dueDate: '2024-03-31',
    priority: 'High',
    status: 'In Progress',
    collaborators: ['JD', 'AS', 'MK'],
    image: 'https://via.placeholder.com/300'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    progress: 45,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    startDate: '2024-02-01',
    dueDate: '2024-04-30',
    priority: 'Medium',
    status: 'Planning',
    collaborators: ['MK', 'AS'],
    image: 'https://via.placeholder.com/300'
  }
];

// Update the ProjectCard component
const ProjectCard: React.FC<{
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}> = ({ project, onEdit, onDelete }) => (
  <AnimatedCard>
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium
              ${project.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                project.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-green-500/20 text-green-400'}`}>
              {project.priority} Priority
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <span className={`text-sm px-2 py-1 rounded-full
              ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                project.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'}`}>
              {project.status}
            </span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(project)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <Edit size={18} className="text-gray-400" />
            </button>
            <button 
              onClick={() => onDelete(project.id)}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <Trash2 size={18} className="text-gray-400" />
            </button>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <ExternalLink size={18} className="text-gray-400" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <div>
            <p>Started</p>
            <p className="font-medium text-white">
              {new Date(project.startDate).toLocaleDateString()}
            </p>
          </div>
          {project.dueDate && (
            <div>
              <p>Due Date</p>
              <p className="font-medium text-white">
                {new Date(project.dueDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        {/* Collaborators */}
        {project.collaborators && (
          <div className="flex justify-between items-center">
            <div className="flex -space-x-2">
              {project.collaborators.map((initial, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 
                    flex items-center justify-center text-sm font-medium ring-2 ring-gray-900"
                >
                  {initial}
                </div>
              ))}
            </div>
            <button className="text-sm text-purple-400 hover:text-purple-300">
              Manage Team
            </button>
          </div>
        )}
      </div>
    </div>
  </AnimatedCard>
);

// Update the main Projects component to use the new card
const Projects: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const handleAddProject = (projectData: any) => {
    const newProject = {
      id: Date.now().toString(),
      ...projectData
    };
    setProjects([...projects, newProject]);
  };

  const handleEditProject = (projectData: any) => {
    setProjects(projects.map(p => 
      p.id === editingProject.id ? { ...p, ...projectData } : p
    ));
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const openEditModal = (project: any) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header with Add Project Button */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-400">Manage and track all your projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold 
            inline-flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 
            transition-all duration-200 z-10"
        >
          <Plus size={20} />
          Add New Project
        </motion.button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl py-3 pl-12 pr-4 
                text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 
            inline-flex items-center gap-2 hover:border-purple-500 transition-colors">
            <Filter size={20} />
            Filter
          </button>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-1 flex">
            <button className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors">
              <Grid size={20} />
            </button>
            <button className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors">
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={openEditModal}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProject(null);
        }}
        project={editingProject}
        onSubmit={editingProject ? handleEditProject : handleAddProject}
      />
    </div>
  );
};

export default Projects; 
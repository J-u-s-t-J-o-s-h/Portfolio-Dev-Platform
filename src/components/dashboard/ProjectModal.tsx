import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Upload, Calendar } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project;
  onSubmit: (project: ProjectFormData) => void;
}

export interface Project {
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

export interface ProjectFormData {
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

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project, onSubmit }) => {
  const [formData, setFormData] = useState<ProjectFormData>(project || {
    title: '',
    description: '',
    tech: [],
    progress: 0,
    githubUrl: '',
    liveUrl: '',
    startDate: new Date().toISOString().split('T')[0],
    priority: 'Medium',
    status: 'Planning',
    collaborators: []
  });

  const [techInput, setTechInput] = useState('');
  const [collaboratorInput, setCollaboratorInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tech: [...prev.tech, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const addCollaborator = () => {
    if (collaboratorInput.trim()) {
      setFormData(prev => ({
        ...prev,
        collaborators: [...(prev.collaborators || []), collaboratorInput.trim()]
      }));
      setCollaboratorInput('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-800/90 backdrop-blur-xl rounded-xl p-6 w-full max-w-2xl border border-gray-700/50 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {project ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  {formData.image ? (
                    <img src={formData.image} alt="Project" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Upload className="text-gray-400" />
                  )}
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
                >
                  Upload Image
                </button>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                    required
                  />
                </div>
              </div>

              {/* Status and Priority */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as Project['status'] }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  >
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Testing">Testing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={e => setFormData(prev => ({ ...prev, priority: e.target.value as Project['priority'] }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Due Date</label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={e => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              {/* Progress */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Progress: {formData.progress}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={e => setFormData(prev => ({ ...prev, progress: parseInt(e.target.value) }))}
                  className="w-full"
                />
              </div>

              {/* Technologies */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Technologies</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                    placeholder="Add technology..."
                  />
                  <button
                    type="button"
                    onClick={addTech}
                    className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-2"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          tech: prev.tech.filter((_, i) => i !== index)
                        }))}
                        className="hover:text-purple-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaborators */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Collaborators</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={collaboratorInput}
                    onChange={e => setCollaboratorInput(e.target.value)}
                    className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                    placeholder="Add collaborator..."
                  />
                  <button
                    type="button"
                    onClick={addCollaborator}
                    className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.collaborators?.map((collaborator, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm flex items-center gap-2"
                    >
                      {collaborator}
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          collaborators: prev.collaborators?.filter((_, i) => i !== index)
                        }))}
                        className="hover:text-purple-300"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* URLs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={e => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Live URL</label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={e => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-gray-700/50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold"
                >
                  {project ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 
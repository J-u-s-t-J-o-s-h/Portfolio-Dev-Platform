import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User,
  Lock,
  Bell,
  Palette,
  Globe,
  Shield,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Save,
  Moon,
  Sun
} from 'lucide-react';

// Create a custom Toggle component
const Toggle: React.FC<{
  checked: boolean;
  onChange: () => void;
  className?: string;
}> = ({ checked, onChange, className = '' }) => (
  <button
    onClick={onChange}
    className={`${checked ? 'bg-purple-500' : 'bg-gray-600'} 
      relative inline-flex h-6 w-11 items-center rounded-full transition-colors
      focus:outline-none cursor-pointer ${className}`}
  >
    <span
      className={`${checked ? 'translate-x-6' : 'translate-x-1'}
        inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
    />
  </button>
);

// Update the email notifications type
interface EmailNotifications {
  projectUpdates: boolean;
  newCollaborations: boolean;
  securityAlerts: boolean;
  newsletter: boolean;
}

// Update the privacy settings type
interface PrivacySettings {
  profileVisible: boolean;
  showEmail: boolean;
  showLocation: boolean;
  allowMessages: boolean;
}

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const [emailNotifications, setEmailNotifications] = useState<EmailNotifications>({
    projectUpdates: true,
    newCollaborations: true,
    securityAlerts: true,
    newsletter: false
  });
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    profileVisible: true,
    showEmail: false,
    showLocation: true,
    allowMessages: true
  });

  // Update the email notifications handler
  const handleEmailNotificationChange = (key: keyof EmailNotifications) => {
    setEmailNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Update the privacy settings handler
  const handlePrivacySettingChange = (key: keyof PrivacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Render different sections based on active tab
  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            
            {/* Password Change */}
            <div className="space-y-4">
              <h3 className="font-medium">Change Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2"
                />
              </div>
            </div>

            {/* Two Factor Authentication */}
            <div className="space-y-4">
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Enable 2FA</span>
                <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">
                  Setup 2FA
                </button>
              </div>
            </div>

            {/* Active Sessions */}
            <div className="space-y-4">
              <h3 className="font-medium">Active Sessions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div>
                    <p className="font-medium">MacBook Pro - Chrome</p>
                    <p className="text-sm text-gray-400">Last active: 2 minutes ago</p>
                  </div>
                  <button className="text-red-400 hover:text-red-300">Logout</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div>
                    <p className="font-medium">iPhone 13 - Safari</p>
                    <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
                  </div>
                  <button className="text-red-400 hover:text-red-300">Logout</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
            
            {/* Email Notifications */}
            <div className="space-y-4">
              <h3 className="font-medium">Email Notifications</h3>
              <div className="space-y-4">
                {Object.entries(emailNotifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-400">
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </span>
                    <Toggle
                      checked={value}
                      onChange={() => handleEmailNotificationChange(key as keyof EmailNotifications)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Push Notifications */}
            <div className="space-y-4">
              <h3 className="font-medium">Push Notifications</h3>
              <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">
                Manage Browser Notifications
              </button>
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Appearance Settings</h2>
            
            {/* Theme Toggle */}
            <div className="space-y-4">
              <h3 className="font-medium">Theme</h3>
              <div className="flex items-center gap-4">
                <button
                  className={`p-4 rounded-lg flex items-center gap-2 ${
                    !darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-700/30'
                  }`}
                  onClick={() => setDarkMode(false)}
                >
                  <Sun size={20} />
                  Light
                </button>
                <button
                  className={`p-4 rounded-lg flex items-center gap-2 ${
                    darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-700/30'
                  }`}
                  onClick={() => setDarkMode(true)}
                >
                  <Moon size={20} />
                  Dark
                </button>
              </div>
            </div>

            {/* Font Size */}
            <div className="space-y-4">
              <h3 className="font-medium">Font Size</h3>
              <input
                type="range"
                min="12"
                max="20"
                className="w-full"
              />
            </div>
          </div>
        );
      case 'language':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Language Settings</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'].map((lang, i) => (
                <button
                  key={i}
                  className={`p-4 rounded-lg text-left ${
                    language === lang.toLowerCase().slice(0, 2)
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-gray-700/30 hover:bg-gray-700/50'
                  }`}
                  onClick={() => setLanguage(lang.toLowerCase().slice(0, 2))}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
            
            {/* Privacy Toggles */}
            <div className="space-y-4">
              {Object.entries(privacySettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-400">
                    {key.split(/(?=[A-Z])/).join(' ')}
                  </span>
                  <Toggle
                    checked={value}
                    onChange={() => handlePrivacySettingChange(key as keyof PrivacySettings)}
                  />
                </div>
              ))}
            </div>

            {/* Data Management */}
            <div className="space-y-4">
              <h3 className="font-medium">Data Management</h3>
              <div className="space-y-2">
                <button className="w-full p-4 bg-gray-700/30 rounded-lg text-left hover:bg-gray-700/50">
                  Download My Data
                </button>
                <button className="w-full p-4 bg-red-500/20 text-red-400 rounded-lg text-left hover:bg-red-500/30">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2 bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50 h-fit">
          <NavButton 
            icon={<User />} 
            text="Profile" 
            active={activeSection === 'profile'}
            onClick={() => setActiveSection('profile')}
          />
          <NavButton 
            icon={<Lock />} 
            text="Security" 
            active={activeSection === 'security'}
            onClick={() => setActiveSection('security')}
          />
          <NavButton 
            icon={<Bell />} 
            text="Notifications" 
            active={activeSection === 'notifications'}
            onClick={() => setActiveSection('notifications')}
          />
          <NavButton 
            icon={<Palette />} 
            text="Appearance" 
            active={activeSection === 'appearance'}
            onClick={() => setActiveSection('appearance')}
          />
          <NavButton 
            icon={<Globe />} 
            text="Language" 
            active={activeSection === 'language'}
            onClick={() => setActiveSection('language')}
          />
          <NavButton 
            icon={<Shield />} 
            text="Privacy" 
            active={activeSection === 'privacy'}
            onClick={() => setActiveSection('privacy')}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const NavButton: React.FC<{
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick: () => void;
}> = ({ icon, text, active, onClick }) => (
  <motion.button
    whileHover={{ x: 4 }}
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left
      ${active 
        ? 'bg-purple-500/20 text-purple-400' 
        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
      }`}
  >
    {icon}
    <span>{text}</span>
  </motion.button>
);

// Profile Section Component (moved to separate component for clarity)
const ProfileSection: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
    
    {/* Avatar Upload */}
    <div className="flex items-center gap-6 mb-8">
      <div className="relative">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <button className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition-colors">
          <User size={16} />
        </button>
      </div>
      <div>
        <h3 className="font-medium mb-1">Profile Photo</h3>
        <p className="text-sm text-gray-400 mb-2">PNG, JPG or GIF, max 2MB</p>
        <button className="text-sm text-purple-400 hover:text-purple-300">
          Change photo
        </button>
      </div>
    </div>

    {/* Form */}
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Display Name</label>
          <input
            type="text"
            defaultValue="johndoe"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Email</label>
        <input
          type="email"
          defaultValue="john@example.com"
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Bio</label>
        <textarea
          rows={4}
          defaultValue="Full Stack Developer with 5+ years of experience..."
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Location</label>
        <input
          type="text"
          defaultValue="San Francisco, CA"
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="font-medium">Social Links</h3>
        <div className="space-y-4">
          <SocialInput icon={<Mail />} placeholder="Email" />
          <SocialInput icon={<Github />} placeholder="GitHub Profile" />
          <SocialInput icon={<Linkedin />} placeholder="LinkedIn Profile" />
          <SocialInput icon={<Twitter />} placeholder="Twitter Profile" />
        </div>
      </div>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg 
          font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
      >
        <Save size={20} />
        Save Changes
      </motion.button>
    </form>
  </div>
);

const SocialInput: React.FC<{
  icon: React.ReactNode;
  placeholder: string;
}> = ({ icon, placeholder }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-12 pr-4 py-2 
        focus:outline-none focus:border-purple-500"
    />
  </div>
);

export default Settings; 
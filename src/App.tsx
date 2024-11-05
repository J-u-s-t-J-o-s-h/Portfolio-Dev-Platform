import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Landing from './components/landing/Landing';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Projects from './components/dashboard/Projects';
import Portfolio from './components/dashboard/Portfolio';
import AnimatedBackground from './components/shared/AnimatedBackground';
import Collaborations from './components/dashboard/Collaborations';
import Analytics from './components/dashboard/Analytics';
import Settings from './components/dashboard/Settings';
import Overview from './components/dashboard/Overview';

function App() {
  return (
    <div className="min-h-screen bg-gray-900/80 relative">
      <AnimatedBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="projects" element={<Projects />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="collaborations" element={<Collaborations />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

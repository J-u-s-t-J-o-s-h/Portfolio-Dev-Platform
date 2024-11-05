import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../shared/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen text-white">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 
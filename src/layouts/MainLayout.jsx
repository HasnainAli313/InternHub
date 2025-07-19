import React from 'react';
import Sidebar from '../pages/Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <main className="w-[80%] overflow-auto bg-gray-100 border-l">
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;

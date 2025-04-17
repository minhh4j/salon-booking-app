'use client';
import React from 'react';
import SideBar from '../components/layout/SideBar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#3e3e08]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1B1B1A] text-white shadow-lg">
        <SideBar />
      </aside>
      {/* Main Content */}
      <main className="flex-1 ml-0.5 overflow-auto ">
        {children}
      </main>
    </div>
  );
}

export default Layout;

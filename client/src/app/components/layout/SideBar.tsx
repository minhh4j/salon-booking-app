'use client';

import { useRouter  } from 'next/navigation';
import React from 'react';
import { FaHome, FaCut, FaUserTie } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const router = useRouter();


        
  return (
    <div className="min-h-screen flex bg-[#2B2B2B] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1B1B1A] p-6 flex flex-col justify-between shadow-xl">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#D6D7D6] text-center">Admin Panel</h2>

          <nav className="flex flex-col gap-4">
            <button
              onClick={() => router.push('/admin')}
              className="flex items-center gap-3 px-4 py-3 bg-[#757442] rounded-xl hover:opacity-90 transition"
            >
              <FaHome /> Dashboard
            </button>

            <button
              onClick={() => router.push(`/admin/services`)}
              className="flex items-center gap-3 px-4 py-3 bg-[#757442] rounded-xl hover:opacity-90 transition"
            >
              <FaCut /> Services
            </button>

            <button
              onClick={() => router.push('/admin/barbers')}
              className="flex items-center gap-3 px-4 py-3 bg-[#757442] rounded-xl hover:opacity-90 transition"
            >
              <FaUserTie /> Barbers
            </button>
          </nav>
        </div>

        <p className="text-sm text-[#D6D7D6] text-center">© 2025 New Cut</p>
      </aside>


    </div>
  );
};

export default Dashboard;

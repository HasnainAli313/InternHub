import React from 'react';
import { FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';

function DashboardContent() {
  return (
    <div className="text-white bg-gray-900 min-h-full p-4">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Welcome to InternHub 🎓</h2>
        <p className="text-base text-gray-400 mt-1">
          Manage internships, candidates, and your hiring dashboard all in one place.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Open Internships */}
        <div className="bg-gray-800 shadow-md rounded-xl p-5 border-l-4 border-blue-500">
          <div className="flex items-center gap-4">
            <FaBriefcase className="text-blue-400 text-3xl" />
            <div>
              <p className="text-xl font-semibold text-white">12</p>
              <p className="text-sm text-gray-300">Open Internships</p>
            </div>
          </div>
        </div>

        {/* Interns Hired */}
        <div className="bg-gray-800 shadow-md rounded-xl p-5 border-l-4 border-green-500">
          <div className="flex items-center gap-4">
            <FaUserGraduate className="text-green-400 text-3xl" />
            <div>
              <p className="text-xl font-semibold text-white">28</p>
              <p className="text-sm text-gray-300">Interns Hired</p>
            </div>
          </div>
        </div>

        {/* Total Applicants */}
        <div className="bg-gray-800 shadow-md rounded-xl p-5 border-l-4 border-yellow-500">
          <div className="flex items-center gap-4">
            <FaUsers className="text-yellow-400 text-3xl" />
            <div>
              <p className="text-xl font-semibold text-white">67</p>
              <p className="text-sm text-gray-300">Total Applicants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;

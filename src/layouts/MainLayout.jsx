// import React from 'react'
// import Dashboard from '../pages/Dashboard'
// import Profile from '../pages/Profile'
// import { Outlet } from 'react-router-dom'

// function MainLayout() {
//   return (
//     <>
//     <section className='flex  h-screen' >
//         <Dashboard></Dashboard>
//         <main className='w-[80%] p-6 flex-1 overflow-auto bg-gray-100 border-l'>
//             <Outlet></Outlet>
//         </main>
//     </section>    
//     </>
//   )
// }

// export default MainLayout

// import React from 'react';
// import Dashboard from '../pages/Dashboard';
// import { Outlet, useLocation } from 'react-router-dom';
// import { FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';

// function MainLayout() {
//   const location = useLocation();
//   const isDashboardHome = location.pathname === "/dashboardHome/dashboard";

//   return (
//     <section className="flex h-screen">
//       <Dashboard />

//       <main className="w-[80%] p-6 overflow-auto bg-gray-100 border-l">
//         {/* Show this content only on the Dashboard page */}
//         {isDashboardHome && (
//           <>
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold text-gray-800">Welcome to InternHub 🎓</h2>
//               <p className="text-lg text-gray-600 mt-1">
//                 Manage internships, candidates, and your hiring dashboard all in one place.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-blue-500">
//                 <div className="flex items-center gap-3">
//                   <FaBriefcase className="text-blue-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">12</p>
//                     <p className="text-gray-600">Open Internships</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-green-500">
//                 <div className="flex items-center gap-3">
//                   <FaUserGraduate className="text-green-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">28</p>
//                     <p className="text-gray-600">Interns Hired</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-yellow-500">
//                 <div className="flex items-center gap-3">
//                   <FaUsers className="text-yellow-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">67</p>
//                     <p className="text-gray-600">Total Applicants</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {/* Render current page */}
//         <Outlet />
//       </main>
//     </section>
//   );
// }

// export default MainLayout;


// import React from 'react';
// import Sidebar from '../pages/Sidebar'; // renamed import
// import { Outlet, useLocation } from 'react-router-dom';
// import { FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';

// function MainLayout() {
//   const location = useLocation();
//   const isDashboardHome = location.pathname === "/dashboardHome/dashboard";

//   return (
//     <section className="flex h-screen">
//       <Sidebar />

//       <main className="w-[80%] p-6 overflow-auto bg-gray-100 border-l">
//         {isDashboardHome && (
//           <>
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold text-gray-800">Welcome to InternHub 🎓</h2>
//               <p className="text-lg text-gray-600 mt-1">
//                 Manage internships, candidates, and your hiring dashboard all in one place.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-blue-500">
//                 <div className="flex items-center gap-3">
//                   <FaBriefcase className="text-blue-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">12</p>
//                     <p className="text-gray-600">Open Internships</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-green-500">
//                 <div className="flex items-center gap-3">
//                   <FaUserGraduate className="text-green-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">28</p>
//                     <p className="text-gray-600">Interns Hired</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-yellow-500">
//                 <div className="flex items-center gap-3">
//                   <FaUsers className="text-yellow-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">67</p>
//                     <p className="text-gray-600">Total Applicants</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         <Outlet />
//       </main>
//     </section>
//   );
// }

// export default MainLayout;


// import React from 'react';
// import Sidebar from '../pages/Sidebar'; // renamed import
// import { Outlet, useLocation } from 'react-router-dom';
// import { FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';

// function MainLayout() {
//   const location = useLocation();
//   const isDashboardHome = location.pathname === "/dashboardHome/dashboard";

//   return (
//     <section className="flex h-screen">
//       <Sidebar />

//       <main className="w-[80%] p-6 overflow-auto bg-gray-100 border-l">
//         {isDashboardHome && (
//           <>
//             <div className="mb-6">
//               <h2 className="text-3xl font-bold text-gray-800">Welcome to InternHub 🎓</h2>
//               <p className="text-lg text-gray-600 mt-1">
//                 Manage internships, candidates, and your hiring dashboard all in one place.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-blue-500">
//                 <div className="flex items-center gap-3">
//                   <FaBriefcase className="text-blue-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">12</p>
//                     <p className="text-gray-600">Open Internships</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-green-500">
//                 <div className="flex items-center gap-3">
//                   <FaUserGraduate className="text-green-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">28</p>
//                     <p className="text-gray-600">Interns Hired</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white shadow rounded-xl p-5 border-l-4 border-yellow-500">
//                 <div className="flex items-center gap-3">
//                   <FaUsers className="text-yellow-500 text-3xl" />
//                   <div>
//                     <p className="text-xl font-semibold">67</p>
//                     <p className="text-gray-600">Total Applicants</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         <Outlet />
//       </main>
//     </section>
//   );
// }

// export default MainLayout;


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

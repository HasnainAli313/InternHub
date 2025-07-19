// import React from 'react'
// import { Link } from 'react-router-dom'

// function Dashboard() {
//   return ( 
//     <header className='h-screen      border w-[20%]' >
//         <h1 className='text-4xl font-semibold p-1'>InternHub</h1>

//         <ul className='text-2xl font-semibold mt-5 p-2 '>
//             <li><Link to="/dashboardHome/dashboard" >Dashboard</Link></li>
//             <li><Link to="/dashboardHome/profile" >Profile</Link></li>
//             <li><Link to="/dashboardHome/internship" >Internship</Link></li>
//             <li><Link to="/dashboardHome/candidate" >Candidate</Link></li>
//         </ul>
//     </header>
//   )
// }

// export default Dashboard

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaUser, FaBriefcase, FaUsers } from 'react-icons/fa';

// function Dashboard() {
//   return (
//     <aside className='h-screen w-[20%] bg-gray-900 text-white border-r'>
//       <h1 className='text-4xl font-bold p-4 text-center border-b border-gray-700'>InternHub</h1>

//       <ul className='mt-8 space-y-4 px-4'>
//         <li>
//           <Link
//             to="/dashboardHome/dashboard"
//             className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
//           >
//             <FaTachometerAlt /> Dashboard
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="/dashboardHome/profile"
//             className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
//           >
//             <FaUser /> Profile
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="/dashboardHome/internship"
//             className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
//           >
//             <FaBriefcase /> Internship
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="/dashboardHome/candidate"
//             className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
//           >
//             <FaUsers /> Candidate
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Dashboard;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaBriefcase, FaUsers, FaBell, FaRegUserCircle } from 'react-icons/fa';

function Dashboard() {
  return (
    <aside className='h-screen w-[20%] bg-gray-900 text-white border-r flex flex-col justify-between'>
      {/* Top Profile Header */}
      <div>
        <div className='flex items-center justify-between p-4 border-b border-gray-700'>
          <div className='flex items-center gap-3'>
            <FaRegUserCircle size={30}/>
            <div>
              <p className="text-sm font-semibold">Hasnain Ali</p>
              <p className="text-xs text-gray-400">Frontend Intern</p>
            </div>
          </div>
          <FaBell className="text-xl text-gray-300 hover:text-white cursor-pointer" />
        </div>

        {/* App Title */}
        <h1 className='text-3xl font-bold p-4 text-center border-b border-gray-700'>InternHub</h1>

        {/* Navigation */}
        <ul className='mt-8 space-y-4 px-4'>
          <li>
            <Link
              to="/dashboardHome/dashboard"
              className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
            >
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/dashboardHome/profile"
              className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
            >
              <FaUser /> Profile
            </Link>
          </li>

          <li>
            <Link
              to="/dashboardHome/internship"
              className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
            >
              <FaBriefcase /> Internship
            </Link>
          </li>

          <li>
            <Link
              to="/dashboardHome/candidate"
              className='flex items-center gap-3 text-lg hover:bg-gray-800 p-2 rounded transition'
            >
              <FaUsers /> Candidate
            </Link>
          </li>
        </ul>
      </div>

      {/* Optional: Add footer or logout */}
      <div className="p-4 text-xs text-gray-500 text-center border-t border-gray-700">
        © 2025 InternHub
      </div>
    </aside>
  );
}

export default Dashboard;

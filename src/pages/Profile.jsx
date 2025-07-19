// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegUserCircle } from "react-icons/fa";

// function Profile() {
//   return (
//     <>
//       <section className="h-[100vh] border pl-[20px] pt-[10px] ">
//         <div>
//          <FaRegUserCircle size={80}/>
//         </div>
//         <table className=" mt-[30px] text-xl ">
//           <tbody>
//             <tr>
//             <th>Name</th>
//             <td className="px-[10px]">Admin</td>
//             </tr>
//             <tr>
//                <th>Email</th>
//             <td className="px-[10px]">admin@devsum.com.pk</td>
//             </tr>
//             <tr>
//             <th>Role</th>
//             <td className="px-[10px]">Admin</td>
//             </tr>
//           </tbody>
//         </table>
        
//         {/* Change Password */}
//         <div className="mt-[30px]">
//             <form action="" className='border m-auto gap-2 border-black rounded-xl flex flex-col w-[25%] p-5 '>
//              <label htmlFor="newPassword">New Password</label>
//              <input className="border rounded p-1" type="password"  id="newPassword" placeholder="New Password"/>
//              <label htmlFor="confirmPassword">Confirm Password</label>
//              <input className="border rounded p-1" type="password"  id="confirmPassword" placeholder="Confirm Password"/>
//              <button className="border rounded p-2 bg-blue-500 text-white hover:bg-blue-600">Change Password</button>
//             </form>
//         </div>
       
//       </section>
//     </>
//   );
// }

// export default Profile;



import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

function Profile() {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <FaRegUserCircle size={80} className="text-blue-400" />
        <h2 className="text-3xl font-bold">Profile</h2>
      </div>

      <table className="w-full text-left border border-gray-700 bg-gray-800 rounded overflow-hidden">
        <tbody>
          <tr className="border-b border-gray-700">
            <th className="p-3 border-r border-gray-700 font-semibold">Name</th>
            <td className="p-3">Admin</td>
          </tr>
          <tr className="border-b border-gray-700">
            <th className="p-3 border-r border-gray-700 font-semibold">Email</th>
            <td className="p-3">admin@devsum.com.pk</td>
          </tr>
          <tr>
            <th className="p-3 border-r border-gray-700 font-semibold">Role</th>
            <td className="p-3">Admin</td>
          </tr>
        </tbody>
      </table>

      {/* Change Password Form */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
        <form
          action=""
          className="border border-gray-700 rounded-xl p-6 bg-gray-800 w-full max-w-md space-y-4"
        >
          <div>
            <label htmlFor="newPassword" className="block mb-1 font-medium">
              New Password
            </label>
            <input
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
              type="password"
              id="newPassword"
              placeholder="New Password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">
              Confirm Password
            </label>
            <input
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-500"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;

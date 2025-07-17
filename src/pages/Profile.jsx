import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

function Candidates() {
  return (
    <>
      <section className="h-[100vh] border pl-[20px] pt-[10px] ">
        <div>
         <FaRegUserCircle size={80}/>
        </div>
        <table className=" mt-[30px] text-xl ">
          <tbody>
            <tr>
            <th>Name</th>
            <td className="px-[10px]">Admin</td>
            </tr>
            <tr>
               <th>Email</th>
            <td className="px-[10px]">admin@devsum.com.pk</td>
            </tr>
            <tr>
            <th>Role</th>
            <td className="px-[10px]">Admin</td>
            </tr>
          </tbody>
        </table>
        
        {/* Change Password */}
        <div className="mt-[30px]">
            <form action="" className='border m-auto gap-2 border-black rounded-xl flex flex-col w-[25%] p-5 '>
             <label htmlFor="newPassword">New Password</label>
             <input className="border rounded p-1" type="password"  id="newPassword" placeholder="New Password"/>
             <label htmlFor="confirmPassword">Confirm Password</label>
             <input className="border rounded p-1" type="password"  id="confirmPassword" placeholder="Confirm Password"/>
             <button className="border rounded p-2 bg-blue-500 text-white hover:bg-blue-600">Change Password</button>
            </form>
        </div>
       
      </section>
    </>
  );
}

export default Candidates;

import React from "react";
import { Link } from "react-router-dom";

function Candidates() {
  return (
    <>
      <section className="  h-[100vh] border border-black">
        <table>
          <tbody>
            <tr>
            <th>Name</th>
            <td className="px-[10px]">Hasnain Ali</td>
            </tr>
            <tr>
               <th>Email</th>
            <td className="px-[10px]">aliorakzai407@gmail.com</td>
            </tr>
            <tr>
            <th>Role</th>
            <td className="px-[10px]">Frontend Developer</td>
            </tr>
          </tbody>
        </table>
        
        <p><Link to="/changePassword" >Change password</Link></p>
      </section>
    </>
  );
}

export default Candidates;

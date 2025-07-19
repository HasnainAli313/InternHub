import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return ( 
    <header className='h-[100vh]    border w-[20%]' >
        <h1 className='text-4xl font-semibold p-1'>InternHub</h1>

        <ul className='text-2xl font-semibold mt-5 p-2 '>
            <li><Link to="/dashboardHome/dashboard" >Dashboard</Link></li>
            <li><Link to="/dashboardHome/profile" >Profile</Link></li>
            <li><Link to="/dashboardHome/internship" >Internship</Link></li>
            <li><Link to="/dashboardHome/candidate" >Candidate</Link></li>
        </ul>
    </header>
  )
}

export default Dashboard
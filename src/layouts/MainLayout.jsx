import React from 'react'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <section className='flex ' >
        <Dashboard></Dashboard>
        <main className='w-[80%] p-6 bg-gray-100 border-l'>
            <Outlet></Outlet>
        </main>
    </section>    
    </>
  )
}

export default MainLayout
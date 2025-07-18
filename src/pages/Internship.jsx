import React from 'react'

function Internship() {
  return (
    <>
        <section>
            <h1 className='text-3xl p-3 font-semibold'>Internship</h1>

<div className='flex justify-evenly mt-10   flex-wrap'>

            {/* Cards */}
            <div className='p-5 m-5 border rounded w-[20%] h-[40vh] text-center '>
                <h1 className='font-semibold'>MERN Stack</h1>
                <h1>Department: CS</h1>
                <h1>Duration: 6 Weeks</h1>
                <h1>Stipend: 8000 Rs</h1>
                <button className='border p-1 rounded text-sm mt-2 bg-green-200' >Open</button>
            </div>

            <div className='p-5 border rounded m-5 w-[20%] h-[40vh] text-center'>
                <h1 className='font-semibold'>Data Science</h1>
                <h1>Department: DS</h1>
                <h1>Duration: 6 Weeks</h1>
                <h1>Stipend: 8000 Rs</h1>
                <button className='border p-1 rounded text-sm mt-2 bg-green-200' >Open</button>
            </div>
            
            <div className='p-5 border rounded m-5 w-[20%] h-[40vh] text-center'>
                <h1 className='font-semibold'>Cyber Security</h1>
                <h1>Department: CS </h1>
                <h1>Duration: 6 Weeks</h1>
                <h1>Stipend: 8000 Rs</h1>
                <button className='border p-1 rounded text-sm mt-2 bg-red-200' >Closed</button>
            </div>

            <div className='p-5 border rounded m-5 w-[20%] h-[40vh] text-center'>
                <h1 className='font-semibold'>Flutter Developer</h1>
                <h1>Department: CS</h1>
                <h1>Duration: 6 Weeks</h1>
                <h1>Stipend: 8000 Rs</h1>
                <button className='border p-1 rounded text-sm mt-2 bg-red-200' >Closed</button>
            </div>

            <div className='p-5 border rounded m-5 w-[20%] h-[40vh] text-center'>
                <h1 className='font-semibold'>Android Developer</h1>
                <h1>Department: CS</h1>
                <h1>Duration: 6 Weeks</h1>
                <h1>Stipend: 8000 Rs</h1>
                <button className='border p-1 rounded text-sm mt-2 bg-green-200' >Open</button>
            </div>

</div>
        </section>
    </>
  )
}

export default Internship
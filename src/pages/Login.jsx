import React from 'react'

function Login() {
  return (
    <>
        <div className='h-[100vh] flex justify-center items-center  '>
            <form action="" className='border border-black rounded-xl  flex flex-col gap-[10px] h-[50vh] p-[20px] '>
                <div>
                    <h1 className='text-center text-xl font-semibold'>InternHub</h1>
                </div>
               <label htmlFor="email">Email:</label>
               <input className='border rounded p-2' type="email" id='email' placeholder='Email'/>
               <label htmlFor="password">Password:</label>
               <input className='border rounded p-2' type="password" id='password' placeholder='Password'/>
                <button className='border rounded p-2 bg-blue-800 hover:bg-blue-700 text-white'>LOGIN</button>
            </form>
        </div>
    </>
  )
}

export default Login
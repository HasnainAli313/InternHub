import React from 'react'

function Login() {
  return (
    <>
        <div className='h-[100vh] flex justify-center items-center  '>
            <form action="" className='border border-black rounded-xl flex flex-col gap-[5px] p-[20px] '>
                <div>
                    <img src="" alt="" />
                    <h1 className='text-center'>InternHub</h1>
                </div>
               <label htmlFor="email">Email:</label>
               <input className='border rounded p-2' type="email" id='email' placeholder='Email'/>
               <label htmlFor="password">Password:</label>
               <input className='border rounded p-2' type="password" id='password' placeholder='Email'/>
                <button className='border rounded p-2 bg-blue-800 hover:bg-blue-700 text-white'>LOGIN</button>
            </form>
        </div>
    </>
  )
}

export default Login
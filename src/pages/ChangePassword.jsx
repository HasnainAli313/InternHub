import React from 'react'

function ChangePassword() {
  return (
    <>
        <div className='h-[100vh] flex justify-center items-center  '>
            <form action="" className='border border-black rounded-xl  flex flex-col gap-[10px] h-[50vh] p-[20px] '>
                <div>
                    <h1 className='text-center text-xl font-semibold'>Change Password</h1>
                </div>
               <label htmlFor="newPassword">New Password:</label>
               <input className='border rounded p-2' type="password" id='newPassword' placeholder='New Password'/>

               <label htmlFor="password">Confirm Password:</label>
               <input className='border rounded p-2' type="password" id='confirmPassword' placeholder='Confirm Password'/>
                <button className='border rounded p-2 bg-blue-800 hover:bg-blue-700 text-white'>Change Password</button>
            </form>
        </div>
    </>
  )
}

export default ChangePassword;
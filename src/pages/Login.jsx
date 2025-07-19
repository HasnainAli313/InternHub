import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill in both email and password.')
    } else {
      setError('')
      navigate('/dashboardHome/dashboard')
    }
  }

  return (
    <div className='h-screen flex justify-center items-center bg-gray-900 text-white'>
      <form 
        onSubmit={handleLogin} 
        className='bg-gray-800 border border-gray-700 rounded-xl shadow-lg flex flex-col gap-5 w-[90%] max-w-md p-8'
      >
        <h1 className='text-3xl font-bold text-center text-blue-400'>InternHub</h1>

        {error && (
          <p className="text-red-500 text-center font-medium">{error}</p>
        )}

        <div>
          <label htmlFor="email" className='block font-medium'>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label htmlFor="password" className='block font-medium'>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button 
          type="submit"
          className='bg-blue-600 hover:bg-blue-700 transition p-2 rounded font-semibold text-white'
        >
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default Login

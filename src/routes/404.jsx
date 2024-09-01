import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-sky-300/55'>
        <div className="flex gap-4 h-full w-full items-center justify-center flex-col">
            <h1 className='text-9xl text-sky-800 font-bold'>404</h1>
            <p className='text-2xl'>Page Not Found</p>
            <Link
                to="/"
                className='bg-blue-500 p-4 text-white rounded-xl shadow-lg'>
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound
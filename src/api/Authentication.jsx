import React, { useRef } from 'react'
import axios from '../utils/AxiosConfig'
import { UserCircle, Lock, KeyRound } from 'lucide-react';

const Authentication = () => {

  const userName = useRef();
  const passWord = useRef();

  function submitLogin(e) {
    e.preventDefault();
  }


  return (
    <form action="" className='flex flex-col w-full items-center h-full'>
      <div className='flex flex-col h-full'>
        <div className='flex'>
          <UserCircle />
          <input 
            ref={userName}
            type="text"
            placeholder='Username'
            />
        </div>
        <div className='flex'>
          <Lock />
          <input 
            ref={passWord}
            placeholder='Password'
            type="password" />
        </div>
      </div> 
      <button 
        className='bg-sky-600/90 text-white rounded-md shadow-lg w-3/4 py-2 gap-2 flex justify-center'
        title='Login' type='submit' onClick={submitLogin}>
        <KeyRound /> Login
      </button>
    </form>
  )
}

export default Authentication
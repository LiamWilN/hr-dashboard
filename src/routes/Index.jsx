import React from 'react'
import loginImg from '../assets/login-img.png'
import Card from '../components/Login/Card'

const Index = () => {
  return (
    
      <div 
        style={{backgroundImage: `url(${loginImg})`}}
        className='w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat' >
        <Card />
      </div>
  )
}

export default Index
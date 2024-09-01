import React from 'react'
import rmiLogo from '../../assets/rmi-logo.png'
import content from '../../api/content.details.json'
import Authentication from '../../api/Authentication'

const Card = () => {
  return (
    <div className='w-80 h-1/2 p-6 rounded-lg shadows-lg bg-white sm:w-1/3'>
        <div className='flex flex-col items-center justify-center h-full'>
            <img src={rmiLogo} alt={content.companyName} className='size-16'/>
            <div className='w-3/4 flex flex-col items-center justify-center gap-1 pb-2 border-b-2'>
                <h1 className='font-bold text-xl sm:text-2xl '>
                    {content.companyName}
                </h1>
                <h2 className='font-light text-xs sm:text-sm'>
                    {content.slogan}
                </h2>
            </div>
            <Authentication />
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import logoimg from '../assets/logoimg.png'
function Logo({width = '100px'}) {
  return (
    <div className='flex items-center w-full'>
      <img id='logo' src={logoimg} alt="logo"  className='w-[100px]'/>
      <h1 className='text-2xl font-semibold  text-slate-100 '>Blog</h1>
    </div>
  )
}

export default Logo
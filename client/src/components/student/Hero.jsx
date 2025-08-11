import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

 const Hero = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/7'>
      <h1 className='text-[3rem]  relative font-inter font-bolt text-gray-800 max-w-3xl mx-auto'>empower your future with course design to <span className='text-blue-600'>fit your choice. </span>  <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block text-[1rem] hidden text-gray-500 max-with-2xl mx-auto'>We bring together world-class instructors, 
       interactive content, and a supportive  <br />  community to help you achieve your personal and professional goals.</p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your goals.</p>
         <SearchBar />
    </div>
  )
}

export default Hero

import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
        <div className='flex gap-3 items-center'>
            <Image src={'/logo.png'} alt={"Discover Logo"} width={50} height={50}/>
            <h2 className='uppercase text-[20px] text-red-500 tracking-widest font-semibold'>discover</h2>
        </div>
        <ul className='flex items-center gap-8'>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>About Us</li>
            <li className='hover:text-red-500 cursor-pointer'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header
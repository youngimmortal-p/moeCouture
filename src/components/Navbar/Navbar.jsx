import React from 'react'
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0  w-full bg-white/80 backdrop-blur-sm z-50'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
            <Link to="/" className='font-Aller text-xl text-cherry font-heading font-bold tracking-wide'>
            moe <span>COUTURE</span>
            </Link>

            <div className='hidden md:flex space-x-8 text-grayish font-medium'>
                <a href="#about" className='hover:text-cherry transition'>About</a>
                <a href="#contact" className='hover:text-cherry transition'>Contact</a>
                <Link to="/gallery" className='hover:text-cherry transition'>Gallery</Link>
            </div>

            <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </div>
            </div>
            {isOpen && (
                <div className='md:hidden flex flex-col bg-white/80 backdrop-blur-lg  text-center py-4 space-y-4'>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                </div>
            )}
        
    </nav>
  )
}

export default Navbar

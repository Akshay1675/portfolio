import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <div className='flex justify-between p-4 bg-black text-white'>
        <div>
            <h1 className='text-sm md:text-xl px-6 py-2 font-bold'>AKSHAY.DEV</h1>
        </div>
        <div>
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <ul className='hidden md:flex font-bold space-x-8 text-lg py-2 mx-4'>
                <li className='cursor-pointer hover:text-blue-300' onClick={() => handleNavClick("home")}>Home</li>
                <li className='cursor-pointer hover:text-blue-300' onClick={() => handleNavClick("about")}>About</li>
                <li className='cursor-pointer hover:text-blue-300' onClick={() => handleNavClick("projects")}>Projects</li>
                <li className='cursor-pointer hover:text-blue-300' onClick={() => handleNavClick("contact")}>Contact</li>
            </ul>

      </motion.div>
            
        </div>

    </div>
  )
}

export default Navbar
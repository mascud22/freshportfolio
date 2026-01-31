import { Bars3Icon, BellIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the saved mode or check system preference
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className='w-full sm:px-0 md:px-20'>
      <div className='w-full flex  items-center justify-between rounded-[22px]/  px-1 sm:px-4 border-b-2 border-secondary mb-3.5 p-2 sm:p-2'>
          <div className='flex  items-center gap-3'>
            {/* <img className='size-9 mt-0.5 border-2 border-ui-color/20 p-0.5 rounded-xl' src="/public/Untitled-1 [Recovered].png" alt="" /> */}
            <div className='size-8 bg-invert/20 rounded-xl'></div>
            <div className='w-1 h-1 bg-invert rounded-3xl'></div>
            <h1 className='text-text font-semibold'>Abshir Dev.</h1>
          </div>
          <div className=' items-center gap-6 hidden sm:flex text-text '>
            <span className=' font-semibold  cursor-pointer hover:scale-105 transition-all ease-in-out'>Home</span>
            <span className=' font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out'>Projects</span>
            <span className=' font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out'>About</span>
            <span className=' font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out'>Skills</span>
            <span className=' font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out'>Contact</span>
          </div>
          {/* <div className='flex-1'></div> */}
          <div className='flex items-center gap-2'>
            <button onClick={() => setDarkMode(!darkMode)} className='p-[9.3px] cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-95 bg-invert text-invert-text rounded-[20px]'>
              {!darkMode ? <SunIcon className='size-[16.5px]'/>  : <MoonIcon className='size-[16.5px]'/> }
            </button>   
            <button className='p-[9.3px] sm:hidden flex cursor-pointer transition-all ease-in-out hover:scale-105 active:scale-95 bg-secondary text-text rounded-[20px]'> <Bars3Icon className='size-[16.5px]'/> </button>   
          </div>
        </div>
    </div>
  )
}

export default Navbar
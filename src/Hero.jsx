import { BoltIcon, BookOpenIcon, MapIcon } from '@heroicons/react/16/solid'
import { TagIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex  h-100 w-full justify-center items-center flex-col gap-3 mt-7 overflow-hidden '>
      <MapIcon className='size-20 top-50 left-30 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>
      <TagIcon className='size-20 top-20 left-60 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>
      <BoltIcon className='size-30 top-80 left-60 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>

      <MapIcon className='size-20 top-50 right-30 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>
      <TagIcon className='size-20 top-20 right-60 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>
      <BoltIcon className='size-30 top-80 right-60 absolute text-ui-color/20 blur-[4px] hidden sm:flex  drop-shadow-[0_4px_38px] drop-shadow-ui-color/60'/>
      <img className=' absolute h-114   opacity-10  object-fill ' src="/src/assets/grid.png" alt="" />
      {/* <img className='size-90 top-30 right-60 opacity-75 z-60 object-cover absolute' src="/public/pexels-catherine-zhuang-1225716959-23915302-removebg-preview.png" alt="" /> */}
      <h1  className='text-text sm:text-7xl text-[47px] leading-13.5 sm:leading-15 text-center font-semibold z-50 drop-shadow-[0_4px_38px] drop-shadow-ui-color/10'>Turn Your <span className=' font-bold text-ui-color drop-shadow-[0_4px_38px] drop-shadow-ui-color'> Ideas  </span> <br /> <span className='text-text-third sm:text-7xl text-[50px]'>Into Scalable Solutions</span></h1>
      <p className=' z-50 text-text-third  sm:text-lg text-center sm:max-w-200 px-6 '>I <b>design and build high-performance full-stack</b> web applications 😱 that are <b>fast,secure, 🧗‍♂️and crafted to grow</b> with your business📕.</p>
      <div className='flex items-center gap-3 sm:w-130 z-50 border-t-2/ border-t-secondary/ pt-5'>
        <button className=' drop-shadow-[0_4px_38px] drop-shadow-ui-color/60 bg-ui-color text-ui-color-text rounded-3xl py-2 px-4.5 transition-all ease-in-out hover:scale-103 active:scale-98 cursor-pointer font-semibold flex-1'>View My Projects</button>
        <button className=' bg-secondary  text-text rounded-3xl py-2 px-4.5 transition-all ease-in-out hover:scale-105 active:scale-96 cursor-pointer font-semibold'>Contact Me</button>
      </div>
      <div className='w-fit  justify-center h-10 bg--gradient-to-t from-primary to-secondary rounded-lg flex items-center gap-4'>
        <div className='flex px-3 items-center justify-center'>
            <div className=' flex items-center '>
                <div className='flex  items-center gap-2 ml-3 relative'>
                    <div className='size-6 bg-third border-2 border-invert/20  rounded-xl'></div>
                    <div className='size-6 absolute top-0 border-2 border-invert/20 left-4 bg-third rounded-xl'></div>
                    <div className='size-6 absolute top-0 border-2 border-invert/20 left-8 bg-third rounded-xl'></div>
                    <div className='size-6 absolute top-0 border-2 border-invert/20 left-12 bg-third rounded-xl'></div>
                </div>
                <div className='mx-7'></div>
                <h1 className='text-text font-semibold  ml-2 w-50 sm:w-full truncate'>Trusted by 100+ Customers Worldwide</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
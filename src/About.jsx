import { CodeBracketIcon, DevicePhoneMobileIcon, FlagIcon, GlobeAltIcon, HandRaisedIcon, PaintBrushIcon, QuestionMarkCircleIcon, RocketLaunchIcon, SparklesIcon, UserGroupIcon, ViewColumnsIcon, WrenchIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

const About = () => {
  const aboutData = [
    {
      name: "Abshir Dahir",
      description: "I’m a passionate "
    }
  ]
  return (
    <div className='flex flex-col mt-10'>
      <h1 className=' text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/60'>
            Space Talk   <span  className='bg-ui-color  mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>About  </span> <br className='' /> Me  And Progress
        </h1>
      <div className='w-full flex-col  md:flex-row h-fit md:h-fit mt-10 bg-indigo-500/ md:px-35  px-5 flex items-start gap-4 '>
        {/* <div className='flex w-full items-center justify-center '>
          <h1 className='text-text text-3xl font-bold'>About Me</h1>
        </div> */}
          <div className='w-full md:w-full h-full flex items-center gap-3 border-ui-color/10 border-2 bg-ui-color/ backdrop-blur-xl drop-shadow-[0_4px_18px] drop-shadow-ui-color/10 rounded-2xl p-2 hover:scale-101 transition-all ease-in-out order-1'>
              <div className='flex  w-full  bg-ui-color/40 h-85 md:h-124 rounded-2xl items-center justify-center flex-2 overflow-hidden relative'>
                  <img  className='size-full object-cover md:object-cover  flex items-center'  src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt=""  />
                  {/* <div className='w-95 h-13 bg-red-400/ border-2/ border-ui-color/ rounded-2xl px-1 backdrop-blur-3xl  absolute bottom-3 items-center flex justify-center'>
                      <h1 className=' text-ui-color-text font-bold text-xl'>Change Your Prespectiveof designing</h1>
                  </div> */}
              </div> 
              {/* <div className='w-8 items-center p-2  flex flex-col gap-2 bg-ui-color drop-shadow-[0_4px_58px] drop-shadow-ui-color/90 sm:h-130 h-full rounded-md justify-between'>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  <div className='size-5 bg-primary/20 drop-shadow-[0_4px_38px] drop-shadow-primary rounded-lg'></div>
                  
              </div> */}
          </div>
          <div className='border-2 border-ui-color/10 rounded-2xl  h-full flex p-4 flex-col gap-3    drop-shadow-[0_4px_58px] drop-shadow-ui-color/90'>
  
        {/* Intro */}
        <h1 className='text-text font-bold text-xl flex items-center gap-2'>
          👋 Hello, I’m <span className='text-text-third'>Abshir </span> <QuestionMarkCircleIcon className='size-6 cursor-pointer transition-all ease-in-out hover:scale-105'/>
        </h1>
  
        <p className='text-text-third'>
          I’m a passionate <b>Frontend Developer, Web Designer, and Graphic Designer</b> who loves turning ideas into clean,
          functional, and visually appealing digital experiences.
        </p>
  
        {/* What I Do */}
        <h2 className='text-text font-semibold text-lg flex items-center gap-2'>
          <FlagIcon className='w-5 h-5 text-text-third' />
          What I Do
        </h2>
  
        <div className='flex flex-col gap-2 text-text-third'>
          <p className='flex items-center gap-2'>
            <CodeBracketIcon className='w-5 h-5 text-text-third hidden md:flex' />
            <p><b>Frontend  |</b> Building interactive and responsive websites.</p>
          </p>
  
          <p className='flex items-center gap-2'>
            <GlobeAltIcon className='w-5 h-5 text-text-third hidden md:flex' />
            <p><b>Web Design |</b> Designing clean, modern, and user-friendly layouts.</p>
          </p>
  
          <p className='flex items-center gap-2'>
            <ViewColumnsIcon className='w-5 h-5 text-text-third hidden md:flex' />
            <p><b>Graphic Design |</b> Creating visually compelling graphics</p>
          </p>
  
          <p className='flex items-center gap-2'>
            <UserGroupIcon className='w-5 h-5 text-text-third hidden md:flex' />
            <p><b>Collaboration |</b> Working closely with others and  learning.</p>
          </p>
        </div>
  
        {/* Skills & Tools */}
        {/* <h2 className='text-text font-semibold text-lg flex items-center gap-2'>
          <WrenchScrewdriverIcon className='w-5 h-5 text-text-third' />
          Skills & Tools
        </h2> */}
  
        {/* <div className='flex flex-wrap gap-2'>
          {[
            'HTML',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'UI/UX Design',
            'Graphic Design',
            
          ].map((skill, index) => (
            <button
              key={index}
              className='px-3 py-1 text-md rounded-full bg-invert text-invert-text font-semibold  text-sm'
            >
              {skill}
            </button>
          ))}
        </div> */}
        <h2 className='text-text font-semibold text-lg flex items-center gap-2'>
          🎯 My Approach
        </h2>
  
        <p className='text-text-third'>
          I focus on <b>simplicity, clarity, and consistency</b>.
          I plan before I build, pay attention to details,
        </p>
        <h2 className='text-text font-semibold text-lg flex items-center gap-2'>
          🎯 My Goal
        </h2>
  
        <p className='text-text-third'>
          I focus on <b>simplicity, clarity, and consistency</b>.
          I plan before I build, pay attention to details,
        </p>
  
        
  
      </div>
      </div>
    </div>
  )
}

export default About
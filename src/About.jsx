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
   const stats = [
    { label: 'Projects', value: '25+' },
    { label: 'Clients', value: '15+' },
    { label: 'Experience', value: '3 Years' },
  ]
  return (
    <div className='flex flex-col mt-10'>
      <h1 className=' text-text text-3xl sm:text-4xl  w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl'>
            Space Talk   <span  className='bg-ui-color  mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>About  </span> <br className='' /> Me  And Progress
        </h1>
      <div className='w-full flex-col  md:flex-row h-fit md:h-fit mt-10 bg-indigo-500/ md:px-35  px-5 flex items-start gap-4 '>
        {/* <div className='flex w-full items-center justify-center '>
          <h1 className='text-text text-3xl font-bold'>About Me</h1>
        </div> */}
          <div className='w-full md:w-100 md:h-full h-full flex items-center gap-3 border-ui-color/10 border-2 bg-ui-color/ backdrop-blur-xl drop-shadow-[0_4px_18px] drop-shadow-ui-color/10 rounded-2xl p-2 hover:scale-101 transition-all ease-in-out order-1'>
              <div className='flex  w-full  bg-ui-color/40 h-85 md:h-153 rounded-2xl items-center justify-center flex-2 overflow-hidden relative'>
                  <img  className='size-full object-cover md:object-cover  flex items-center'  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"  alt=""  />
                 
              </div> 
              
          </div>
          <div className='border-2 border-ui-color/10 rounded-2xl  h-full flex p-4 flex-col gap-3    drop-shadow-[0_4px_58px] drop-shadow-ui-color/90 w-full'>
  
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
        <h2 className='text-text font-semibold text-lg flex items-center gap-2'><SparklesIcon className='w-5 h-5 text-text-third'/> My Progress</h2>
          <div className='flex gap-4'>
            {stats.map((stat, idx) => (
              <div key={idx} className='flex flex-col items-center'>
                <span className='text-ui-color font-bold text-lg'>{stat.value}</span>
                <span className='text-text-third text-sm'>{stat.label}</span>
              </div>
            ))}
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
             <button className='mt-6 drop-shadow-[0_4px_38px] drop-shadow-ui-color/10 bg-ui-color text-ui-color-text rounded-3xl py-3 px-4 transition-all hover:scale-105 active:scale-95 font-semibold'>
              Hire Me 🚀
            </button>
        
  
      </div>
      </div>
    </div>
  )
}

export default About
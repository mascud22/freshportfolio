import { DocumentTextIcon, EnvelopeIcon, FaceSmileIcon, FireIcon, ForwardIcon, PresentationChartBarIcon, ShieldCheckIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Line = () => {
  return (
    <div className='w-full  justify-center h-10  flex items-center gap-5 opacity-80 animate-pulse border-b-2 border-b-third  pb-8 flex-wrap mt-10'>
        <h1 className=' text-text font-semibold  animate-bounce'>Simple</h1>
        <FaceSmileIcon className='size-5 text-text animate-bounce'/>
        <h1 className=' text-text font-semibold animate-bounce'>Secure</h1>
        <ShieldCheckIcon className='size-5 text-text animate-bounce delay-300'/>
        <h1 className=' text-text font-semibold  animate-bounce'>Fast</h1>
        <ForwardIcon className='size-5 text-text   animate-bounce'/>
        <h1 className=' text-text font-semibold hidden sm:flex animate-bounce'>Creative</h1>
        <PresentationChartBarIcon className='size-5 text-text  hidden sm:flex animate-bounce'/> 
        <h1 className=' text-text font-semibold   hidden sm:flex animate-bounce'>Well Designed</h1>
        <DocumentTextIcon className='size-5 text-text  hidden sm:flex animate-bounce'/>
        
    </div>
  )
}

export default Line
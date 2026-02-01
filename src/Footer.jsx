import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col border-t-2 border-t-secondary w-full mt-8 pt-3'>
        <h1 className=' text-text text-3xl sm:text-4xl w-full font-semibold text-center drop-shadow-[0_4px_58px] drop-shadow-ui-color/40 border-b-2 border-b-ui-color/10 py-4 rounded-xl'>
        Stay Connected, <span className=' text-text-third'><br className='hidden sm:flex' /> 
        <span className='bg-ui-color mx-1 px-3 rounded-2xl text-ui-color-text drop-shadow-[0_4px_38px] drop-shadow-ui-color/20'>Reach</span> Me Anytime.</span>
        </h1>


    </div>
  )
}

export default Footer